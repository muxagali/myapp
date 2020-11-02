import React from 'react';
import main from '../main.module.css';
import { NavLink } from 'react-router-dom';

const Users = () => {
    return (
        <div className={main.usersContainer}>
            <div className={main.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            {/* Navbar menu */}
            <div className={main.navMenu}>
                <h2>Люди</h2>
                <ul>
                    <li><a href="">Аккаунт</a></li>
                    <li><a href="">Демо</a></li>
                    <li><a href="">Фраза</a></li>
                    <li><a href="">Котировка</a></li>
                    <li><a href="">Расширение</a></li>
                    <li><a href="">Редактировать</a></li>
                </ul>
            </div>
            {/* Main message block */}
            <div className={main.users}>
                <h1>Люди</h1>
            </div>
        </div>
    )
}

const Company = () => {
    return (
        <div className={main.companiesContainer}>
            <div className={main.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            {/* Navbar menu */}
            <div className={main.navMenu}>
                <h2>Компании</h2>
                <ul>
                    <li><a href="">Аккаунт</a></li>
                    <li><a href="">Демо</a></li>
                    <li><a href="">Фраза</a></li>
                    <li><a href="">Котировка</a></li>
                    <li><a href="">Расширение</a></li>
                    <li><a href="">Редактировать</a></li>
                </ul>
            </div>
            {/* Main message block */}
            <div className={main.companies}>
                <h1>Компании</h1>
            </div>
        </div>
    )
}

export { Users, Company }