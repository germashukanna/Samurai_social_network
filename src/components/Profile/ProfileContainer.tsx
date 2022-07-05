import React, {JSXElementConstructor} from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: any | ProfileType
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


//
// let WithUrlDataContainerComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
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
//
// export const ProfileContainerToStore = connect(mapStateToProps, {
//     getUserProfile
// })(withRouter(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)