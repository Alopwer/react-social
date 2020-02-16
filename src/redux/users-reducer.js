const FOLLOW = 'FOLLOW_ACTION_CREATOR'
const UNFOLLOW = 'UNFOLLOW_ACTION_CREATOR'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u, i) => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u, i) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users
})