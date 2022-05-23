import {getAPI} from "../Api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: null | ProfileType
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ActionsProfileTypes = ReturnType<typeof addPostActionCreactor>
    | ReturnType<typeof updateNewPostTextActionCreactor> | ReturnType<typeof setUserProfile>

const initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 11},

    ],
    newPostText: 'it-kamasutra',
    profile: null
};

// export type InitialStateType = typeof initialState

const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

}

export const addPostActionCreactor = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreactor = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const getUserProfile = (userId: number) => (dispatch: Dispatch<ActionsProfileTypes>) => {
    getAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))

        });
}

export default profileReducer