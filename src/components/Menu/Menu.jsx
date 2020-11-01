import React from 'react'
import { NavLink } from 'react-router-dom';
import menu from './menu.module.css';

const Menu = () => {
    return (
        <div className={menu.Menu}>
            <NavLink to="/messages" activeClassName={menu.menuActive}>
                <i className="far fa-paper-plane"></i>
                <small>Сообщение</small>
            </NavLink>
            <NavLink to="/lists" activeClassName={menu.menuActive}>
                <i className="far fa-list-alt"></i>
                <small>Список</small>
            </NavLink>
            <NavLink to="/hospital" activeClassName={menu.menuActive}>
                <i className="far fa-hospital"></i>
                <small>Госпиталь</small>
            </NavLink>
            <NavLink to="/clock" activeClassName={menu.menuActive}>
                <i className="far fa-clock"></i>
                <small>Часы</small>
            </NavLink>
            <NavLink to="/folders" activeClassName={menu.menuActive}>
                <i className="far fa-folder-open"></i>
                <small>Файлы</small>
            </NavLink>
            <NavLink to="/authors" activeClassName={menu.menuActive}>
                <i className="far fa-user-circle"></i>
                <small>Авторы</small>
            </NavLink>
            <NavLink to="/companies" activeClassName={menu.menuActive}>
                <i className="far fa-building"></i>
                <small>Компании</small>
            </NavLink>
        </div>
    )
}

export default Menu