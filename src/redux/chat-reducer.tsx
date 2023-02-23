import {AppDispatch, AppThunkType} from "./redux-store";
import {chatApi, ChatMessageType} from "../api/Chat-api";
import message from "../components/Dialogs/Message/Message";

export const initialState = {
    messages: [] as ChatMessageType[],
}

export type ActionChatType =
    ReturnType<typeof actions.setMessagesReceived>


export const chatReducer = (state = initialState, action: ActionChatType) => {
    switch (action.type) {
        case "chat/SET-MESSAGES-RECEIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }

        default:
            return state
    }
}

export const actions = {
    setMessagesReceived: (messages: ChatMessageType[]) => {
        return {type: "chat/SET-MESSAGES-RECEIVED", payload: {messages}} as const
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

//Thunks
export const startMessagesListening = (): AppThunkType => async (dispatch: AppDispatch) => {
    chatApi.start()
    await chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): AppThunkType => async (dispatch: AppDispatch) => {
    await chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
    chatApi.stop()
}
export const sendMessages = (message: string): AppThunkType => async (dispatch: AppDispatch) => {
    await chatApi.sendMessage(message)
}
