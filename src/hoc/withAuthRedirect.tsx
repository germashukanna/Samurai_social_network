import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth

});

export const withAuthRedirect = (Component: JSXElementConstructor<any>) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"}/>;
            return <Component {...this.props}/>;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

