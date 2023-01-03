import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, {getAuthUserData, logOutTC})(HeaderContainer)