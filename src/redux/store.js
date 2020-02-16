import { profileReducer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const store = {
    _state : {
        profilePage: {
            posts: [
                {msg: 'Hi, everybody', likes: 2},
                {msg: 'I\'m done!', likes: 19}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'HI!!!'},
                {id: 3, message: 'How r u doin\'?'}
            ],
            dialogs: [
                {id: 1, name: 'Alopwer'},
                {id: 2, name: 'Alopwers'},
                {id: 3, name: 'Alopwerw'},
                {id: 4, name: 'Alopwera'},
                {id: 5, name: 'Alopweres'},
                {id: 6, name: 'Alopweresa'},
                {id: 7, name: 'Alopwerumba'},
                {id: 8, name: 'Alopwerik'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {name: 'Alopwer', id: 1},
                {name: 'Alopwer2', id: 2},
                {name: 'Alopwer3', id: 3},
            ]
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;