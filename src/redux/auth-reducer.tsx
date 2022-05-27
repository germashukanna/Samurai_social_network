import {getAPI} from "../Api/api";
import {Dispatch} from "redux";

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

// export type initialStateType = {}

export const authsReducer = (state: AuthPageType = initialState, action: ActionsAuthTypes): AuthPageType => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,

            }

        default:
            return state
    }
}

// type UserDataType = {
//     id: null | number
//     email: null | string
//     login: null | string
// }

export const setAuthUserData = (userId: number, email: null | string, login: null | string) => ({
    type: SET_USERS_DATA, data: {
        userId,
        email,
        login
    }
})
export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionsAuthTypes>) => {
    getAPI.getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}
}

