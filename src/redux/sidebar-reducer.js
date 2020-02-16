const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    friends: [
        {name: 'Alopwer', id: 1},
        {name: 'Alopwer2', id: 2},
        {name: 'Alopwer3', id: 3},
    ]
}

export const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}
