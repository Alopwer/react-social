import React from 'react'
import banner from '../../../assets/banner.png'
import s from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = props => {
    return <>
        {
            props.profile 
            ? <section className={s.profile}>
                <div className={s.banner}>
                    <img src={banner} alt="banner"/>
                </div>
                <img src={props.profile.avatar_url} alt="" className={s.photo}/>
                {props.profile.fullName}
                <div className={s.description}>
                    Description
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </section>
            : <Preloader />
        }
    </>
}

export default ProfileInfo