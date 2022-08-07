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


const dialogPageReducer = (state: DialogsPageType = initialState, action: ActionsDialogsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.message
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }
        default:
            return state;
    }

}

export const sendMessageCreator = (message: string) => ({type: SEND_MESSAGE, message} as const)

export default dialogPageReducer