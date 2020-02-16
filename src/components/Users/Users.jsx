import React from 'react';
import userAvatar from '../../static/user-avatar.png'
import s from './Users.module.scss'
import Axios from 'axios';

const Users = (props) => {
   
    if (props.users.length === 0) {
        Axios.get('https://gitlab.com/api/v4/users?private_token=JsoMykLmKyRfeLsztCpS')
        .then(response => response.data)
        .then(data => data.map(item => ({...item, followed : false})))
        .then(data => props.setUsers(data))
    }

    return (
        <div className="">
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.avatar_url} alt=""/>
                        { u.followed 
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                            : <button onClick={() => props.follow(u.id)}>Follow</button> }
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.username}</div>
                        </div>
                        <div>
                            {/* <div>{u.location.city}</div>
                            <div>{u.location.contry}</div> */}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;