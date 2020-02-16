import React from 'react'
import logo from '../../static/logo.svg'
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo" />
        </header>
    )
}

export default Header