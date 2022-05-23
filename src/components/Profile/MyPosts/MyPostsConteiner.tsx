import {addPostActionCreactor, ProfilePageType, updateNewPostTextActionCreactor} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    profilePage: ProfilePageType
}

type matDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPostToo: () => void
}

export type myPostsPropsType = mapStatePropsType & matDispatchPropsType

export const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return{
      profilePage: state.profilePage
  }
}

export const matDispatchToProps = (dispatch: Dispatch): matDispatchPropsType => {
return{
    updateNewPostText: (text: string) => {
        const action = updateNewPostTextActionCreactor(text);
        dispatch(action);
    },
    addPostToo: () => {
        dispatch(addPostActionCreactor());
    }
}
}


export const MyPostsContainer = connect(mapStateToProps, matDispatchToProps) (MyPosts);

export default MyPostsContainer