import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersActionCreator(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;