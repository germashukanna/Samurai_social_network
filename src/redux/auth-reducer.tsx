import {getAPI, loginAPI} from "../Api/api";
import {Dispatch} from "redux";
import {AppThunkType} from "./redux-store";

const SET_USERS_DATA = "SET_USERS_DATA"

// type initialStateType = typeof initialState

export type AuthPageType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    // isFetching: boolean
    // photo: string
}

export type ActionsAuthTypes = ReturnType<typeof setAuthUserDataAC>

export const initialState: AuthPageType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
    // isFetching: true,
    // photo: ''
}


export const authsReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => {
    return {type: SET_USERS_DATA, payload: {id, email, login, isAuth}} as const
}


//Thunks
export const getAuthUserData = (): AppThunkType => {
    return (dispatch: Dispatch<ActionsAuthTypes>) => {
        getAPI.getAuthMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data;
                    dispatch(setAuthUserDataAC(id, email, login, true));
                }
            });
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const response = await loginAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logOutTC = (): AppThunkType =>
    (dispatch: Dispatch<ActionsAuthTypes>) => {
        loginAPI.loginOut()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(0, '', '', false))
                }
            })
    }

