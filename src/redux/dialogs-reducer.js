const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText : action.newText
            }
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageText : '',
                messages: [...state.messages, { id: 6, message: state.newMessageText }]
            }
        default:
            return state
    } 
}

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})