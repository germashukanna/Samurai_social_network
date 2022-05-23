const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type MessagesType = {
    id: number,
    message: string,
}
export type DialogsType = {
    id: number,
    name: string,
}
export type DialogsPageType = {
    dialogsData: Array<DialogsType>,
    messagesData: Array<MessagesType>,
    newMessageBody: string
}

const initialState: DialogsPageType = {
        dialogsData: [
            {id: 1, name: 'Dmitrii'},
            {id: 2, name: 'Ann'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Diana'},
            {id: 5, name: 'Lena'},
            {id: 6, name: 'Valera'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'mmmmm'},
            {id: 5, message: 'Yo'},

        ],
        newMessageBody: ''
    };

export type ActionsDialogsTypes = ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>



const dialogPageReducer = (state: DialogsPageType = initialState, action: ActionsDialogsTypes): DialogsPageType => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE}as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}as const)

export default dialogPageReducer