import React from 'react';
import main from '../main.module.css';
import { NavLink } from 'react-router-dom';

const Messages = () => {
    return (
        <div className={main.messagesContainer}>
            <div className={main.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            {/* Navbar menu */}
            <div className={main.navMenu}>
                <h2>Сообщение</h2>
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
            <div className={main.messages}>
                <h1>Сообщение</h1>
            </div>
        </div>
    )
}

export default Messages