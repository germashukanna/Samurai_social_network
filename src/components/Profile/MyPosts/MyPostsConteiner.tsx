import {addPostActionCreactor, ProfilePageType} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    profilePage: ProfilePageType
}

type matDispatchPropsType = {
    addPostToo: (message: string) => void
}

export type myPostsPropsType = mapStatePropsType & matDispatchPropsType

export const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

export const matDispatchToProps = (dispatch: Dispatch): matDispatchPropsType => {
    return {
        addPostToo: (message: string) => {
            dispatch(addPostActionCreactor(message));
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, matDispatchToProps)(MyPosts);

export default MyPostsContainer