import {AppDispatch, AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export type AppType = {
    initialazed: boolean
}

export const initialState = {
    initialazed: false,
}

export type ActionAuthType = ReturnType<typeof initialazedSuccssAC>


export const appReducer = (state: AppType = initialState, action: ActionAuthType): AppType => {
    switch (action.type) {
        case "app/INITIALAZED-SUCCESS":
            return {
                ...state,
                initialazed: true
            }
        default:
            return state
    }
}


export const initialazedSuccssAC = () => {
    return {type: "app/INITIALAZED-SUCCESS"} as const
}


//Thunks
export const initialazeAppTC = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        let promise = dispatch(getAuthUserData());
        await Promise.all([promise])
        dispatch(initialazedSuccssAC())
    }
}


