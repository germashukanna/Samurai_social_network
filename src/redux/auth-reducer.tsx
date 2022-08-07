import {getAPI, loginAPI} from "../Api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";

const SET_USERS_DATA = "SET_USERS_DATA"

export type AuthPageType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    isFetching: boolean
    photo: string
}
export type ActionsAuthTypes = ReturnType<typeof setAuthUserData>

export const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    photo: ''
}


export const authsReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }

        default:
            return state
    }
}


export const setAuthUserData = (userId: number, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USERS_DATA, payload: {
        userId,
        email,
        login,
        isAuth
    }
})


//Thunks
export const getAuthUserData = (): AppThunkType => {
    return (dispatch: Dispatch<ActionsAuthTypes>) => {
        getAPI.getAuthMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType =>
    (dispatch: Dispatch<ActionsAuthTypes>) => {
    loginAPI.login(email, password, rememberMe)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(getAuthUserData())
            }
        })
}
export const logOutTC = (): AppThunkType =>
    (dispatch: Dispatch<ActionsAuthTypes>) => {
    loginAPI.loginOut()
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setAuthUserData(0, null, null, false))
            }
        })
}

