const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, everybody', likes: 2},
        {id: 2, message: 'I\'m done!', likes: 19}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                msg: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                newPostText : '',
                posts : [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText : action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})