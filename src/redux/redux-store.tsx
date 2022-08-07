import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogPageReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import {authsReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";



type ReducersType = typeof rootReducer

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authsReducer,

});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store