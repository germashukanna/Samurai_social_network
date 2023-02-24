import {AppDispatch, AppThunkType} from "./redux-store";
import {chatApi, ChatMessageType, StatusType} from "../api/Chat-api";


export const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

export type ActionChatType =
    ReturnType<typeof actions.setMessagesReceived>
    | ReturnType<typeof actions.statusChanged>


export const chatReducer = (state = initialState, action: ActionChatType) => {
    switch (action.type) {
        case "chat/SET-MESSAGES-RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case "chat/SET-STATUS-CHANGED":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export const actions = {
    setMessagesReceived: (messages: ChatMessageType[]) => {
        return {type: "chat/SET-MESSAGES-RECEIVED", payload: {messages}} as const
    },
    statusChanged: (status: StatusType) => {
        return {type: "chat/SET-STATUS-CHANGED", payload: {status}} as const
    }
}

let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: AppDispatch) => {
    if (_newMessageHandlerCreator !== null) {
        return _newMessageHandlerCreator;
    }
    _newMessageHandlerCreator = (messages) => {
        dispatch(actions.setMessagesReceived(messages))
    }
    return _newMessageHandlerCreator
}

let _statusChangeHandlerCreator: ((status: StatusType) => void) | null = null;
const statusChangeHandlerCreator = (dispatch: AppDispatch) => {
    if (_statusChangeHandlerCreator !== null) {
        return _statusChangeHandlerCreator;
    }
    _statusChangeHandlerCreator = (status) => {
        dispatch(actions.statusChanged(status))
    }
    return _statusChangeHandlerCreator
}

//Thunks
export const startMessagesListening = (): AppThunkType => async (dispatch: AppDispatch) => {
    chatApi.start()
    await chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    await chatApi.subscribe('status-changed', statusChangeHandlerCreator(dispatch))
}

export const stopMessagesListening = (): AppThunkType => async (dispatch: AppDispatch) => {
    await chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    await chatApi.unsubscribe('status-changed', statusChangeHandlerCreator(dispatch))
    chatApi.stop()
}
export const sendMessages = (message: string): AppThunkType => async (dispatch: AppDispatch) => {
    await chatApi.sendMessage(message)
}
