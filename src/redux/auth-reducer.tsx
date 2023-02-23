import {ResultCodeEnumType} from "../api/api";
import {AppDispatch, AppThunkType} from "./redux-store";
import {getAPI} from "../api/Users-api";
import {loginAPI, securityAPI} from "../api/Auth-api";


export type AuthPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

export const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: ''
}

export type ActionAuthType =
    ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof getCaptchaUtlAC>


export const authsReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "auth/SET-USERS-DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "auth/GET-CAPTCHA-URL":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => {
    return {type: "auth/SET-USERS-DATA", payload: {id, email, login, isAuth}} as const
}
export const getCaptchaUtlAC = (captchaUrl: string | null) => {
    return {type: "auth/GET-CAPTCHA-URL", payload: {captchaUrl}} as const
}


//Thunks
export const getAuthUserData = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let data = await getAPI.getAuthMe();
        if (data.resultCode === ResultCodeEnumType.Success) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        } else if (data.resultCode === ResultCodeEnumType.CaptchaIsRequired) {
            dispatch(getCaptchaUtl())
        }
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captchaUrl: string): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let data = await loginAPI.login(email, password, rememberMe, captchaUrl)
        if (data.resultCode === ResultCodeEnumType.Success) {
            dispatch(getAuthUserData())
        } else if (data.resultCode === ResultCodeEnumType.CaptchaIsRequired) {
            dispatch(getCaptchaUtl())
        }
    }
}

export const logOutTC = (): AppThunkType =>
    async (dispatch: AppDispatch) => {
        let data = await loginAPI.loginOut()
        if (data.resultCode === ResultCodeEnumType.Success) {
            dispatch(setAuthUserDataAC(0, '', '', false))
        }
    }

export const getCaptchaUtl = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let data = await securityAPI.getCaptchaUtl()
        const captchaUrl = data.url;
        dispatch(getCaptchaUtlAC(captchaUrl))
    }
}

