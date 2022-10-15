import profileReducer, {
    addPostActionCreactor,
    ProfilePageType,
} from "./Profile-reducer";
import dialogPageReducer, {
    DialogsPageType,
    sendMessageCreator,
    } from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";




export type FriendsType = {
    id: number,
    img: string,
    name: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType,
    sidebar: SidebarType

}
export type StoreType = {
    _state: StateType
    _onChange: (state:StateType) => void
    getState: () => StateType
    subscribe:(observer: (state: StateType) => void) => void
    dispatch: (action: AddPostActionType|SendMessageActionType) => void

}

export type AddPostActionType = ReturnType<typeof addPostActionCreactor>
export type SendMessageActionType = ReturnType<typeof sendMessageCreator>


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: 'It\'s my first post', likesCount: 11},

            ],
            newPostText: "",
            profile: null,
            status: ''
        },
        dialogsPage: {
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
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    img: 'https://lapkins.ru/upload/iblock/11e/11ea73b02406f137742271272c2812e5.jpg',
                    name: 'Ymmi'
                },
                {
                    id: 2,
                    img: 'https://images11.esquire.ru/upload/img_cache/e67/e67da2b5cbc8f6053bc560d2d36c928c_cropped_666x832.webp',
                    name: 'Eichy'
                },
                {
                    id: 3,
                    img: 'https://www.meme-arsenal.com/memes/e88d9c84877b37e1cd25b8a1f3f1ab28.jpg',
                    name: 'Meggi'
                },

            ]
        }
    },
    _onChange(state: StateType) {
        console.log(state)
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        // @ts-ignore
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._onChange(this._state)
    }
}


export default store
// window.state = store;