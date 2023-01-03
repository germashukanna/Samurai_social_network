import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogPageReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {usersReducer} from "./Users-reducer";
import {ActionAuthType, authsReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";

// type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authsReducer,
    app: appReducer

});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppActionStateType = ActionAuthType

export type ReduxStoreType = typeof store

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>

export type AppThunkType = ThunkAction<
    any,
    AppStateType,
    unknown,
    AppActionStateType>

// @ts-ignore
window.store = store