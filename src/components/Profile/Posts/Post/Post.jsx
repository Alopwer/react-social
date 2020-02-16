import React from 'react'
import s from './Post.module.scss'
import avatar from '../../../../static/avatar.png'

const Post = ({ message, likes }) => {
    return (
        <div className={s.post}>
            <img src={avatar} alt="Avatar"/>
            <div>
                { message || 'Post' }
            </div>
            <div className="">
                <span>Like {likes}</span>
                <span>Dislike</span>
            </div>
        </div>
    )
}

export default Post