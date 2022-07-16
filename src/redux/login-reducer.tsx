import {LoginParamsType} from "../Api/api";
import {Dispatch} from "redux";

const initialState: initialStateType = {
    isLoggedIh: false
}

export const loginReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {
                ...state, isLoggedIh: action.value
            }
        }

        default:
            return state
    }
}

// Actions
export const setIsLoggedIhAC = (value: boolean) => {
    return {type: 'login/SET-IS-LOGGED-IN', value} as const
}


//Thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionType>) => {

}
// export const logOutTC = () => (dispatch: Dispatch<ActionType>) => {
//
// }


//Types
export type ActionType = ReturnType<typeof setIsLoggedIhAC>


type initialStateType = {
    isLoggedIh: boolean
}

