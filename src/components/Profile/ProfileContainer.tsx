import React, {JSXElementConstructor} from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, savePhoto, setStatusTC, updateStatusTC} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {getProfileResponseType} from "../../Api/api";


type mapStateToPropsType = {
    profile: any | getProfileResponseType
    status: string
    authorizedUserId: number | null
    isAuth: boolean,
    isOwner: boolean,
    savePhoto: any
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => any
    setStatusTC: (userId: number) => any
    updateStatusTC: (status: string) => any
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        // @ts-ignore
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.setStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    // @ts-ignore
                         isOwner={!this.props.router.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}
                         savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    isOwner: state.profilePage.isOwner,
    savePhoto: state.profilePage.posts

})

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, setStatusTC, updateStatusTC, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)