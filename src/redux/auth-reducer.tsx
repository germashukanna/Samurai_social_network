import {getAPI, loginAPI} from "../Api/api";
import {AppDispatch, AppThunkType} from "./redux-store";


export type AuthPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export type ActionAuthType = ReturnType<typeof setAuthUserDataAC>


export const authsReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "auth/SET-USERS-DATA":
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


//Thunks
export const getAuthUserData = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let data = await getAPI.getAuthMe();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        }

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let data = await loginAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
}

export const logOutTC = (): AppThunkType =>
    async (dispatch: AppDispatch) => {
        let data = await loginAPI.loginOut()
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(0, '', '', false))
        }
    }

