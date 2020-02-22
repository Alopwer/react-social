import React from 'react';
import s from './Users.module.scss'
import { NavLink } from 'react-router-dom'
import avatar from '../../assets/user-avatar.png'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className="">
            <div className="">
                {
                    pages.map(p => <span onClick={() => props.onPageChanged(p)} key={p} className={props.currentPage === p && s['selected-page']}>{p}</span>)
                }
            </div>
            <div className="">
                {
                    props.users.map(u => <div key={u.id}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={avatar} alt="" />
                            </NavLink>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.follow(u.id)}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)}>Follow</button>}
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                            </div>
                            <div>
                                {/* <div>{u.location.city}</div>
                                <div>{u.location.contry}</div> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;