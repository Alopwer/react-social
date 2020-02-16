import React from 'react'
import banner from '../../../static/banner.png'
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <section className={s.profile}>
            <div className={s.banner}>
                <img src={banner} alt="banner"/>
            </div>
            <img src="" alt="" className={s.photo}/>
            <div className={s.description}>
                Description
            </div>
        </section>
    )
}

export default ProfileInfo