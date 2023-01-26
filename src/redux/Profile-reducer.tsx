import {getAPI, PostsType, profileAPI, updatePhotoResponseType} from "../Api/api";
import {Dispatch} from "redux";

const Profile_ADD_POST = 'Profile/ADD-POST';
const Profile_DELETE_POST = 'Profile/DELETE_POST';
const Profile_SET_USER_PROFILE = 'Profile/SET_USER_PROFILE';
const Profile_SET_STATUS = 'Profile/SET_STATUS';
const Profile_SAVE_PHOTOS = 'Profile/SAVE_PHOTOS';


export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: null | ProfileType,
    status: string,
    isOwner: boolean,
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
export type ContactsType = {
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
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostActionCreactor>
    | ReturnType<typeof savePhotoSuccessAC>

const initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you? ', likesCount: 12},
        {id: 2, post: 'It\'s my first post ', likesCount: 11},
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: '',
    isOwner: false,
    photos: {
        small: '',
        large: ''
    }
};


const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case Profile_ADD_POST: {
            let newPost = {
                id: 5,
                post: action.message,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case Profile_DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case Profile_SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case Profile_SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            case Profile_SAVE_PHOTOS:
                return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

export const addPostActionCreactor = (message: string) => ({type: Profile_ADD_POST, message} as const)
export const deletePostActionCreactor = (id: number) => ({type: Profile_DELETE_POST, id} as const)
export const setUserProfile = (profile: ProfileType) => ({type: Profile_SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: Profile_SET_STATUS, status} as const)
export const savePhotoSuccessAC = (photos: updatePhotoResponseType) => ({type: Profile_SAVE_PHOTOS, photos} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionsProfileTypes>) => {
    const data = await getAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const setStatusTC = (userId: number) => async (dispatch: Dispatch<ActionsProfileTypes>) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch<ActionsProfileTypes>) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhoto = (photoFile: File) => async (dispatch: Dispatch<ActionsProfileTypes>) => {
    const res = await profileAPI.savePhoto(photoFile)
    if (res.data.resultCode === 0) {
       dispatch(savePhotoSuccessAC(res.data.data))
    }
}


export default profileReducer