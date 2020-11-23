import React from 'react'
import { NavLink } from 'react-router-dom';
import menu from './menu.module.css';
import plane from '../../img/send.png'
import search from '../../img/search.png'
import news from '../../img/news.png'
import product from '../../img/shopping-cart.png'
import settings from '../../img/settings.png'
import company from '../../img/company.png'
import user from '../../img/user.png'


const Menu = () => {
    return (
        <div className={menu.Menu}>
            <NavLink to="/news" activeClassName={menu.menuActive}>
                <img src={news} alt="" />
                <small>Новости</small>
            </NavLink>
            <NavLink to="/messages" activeClassName={menu.menuActive}>
                <img src={plane} alt="" />
                <small>Сообщение</small>
            </NavLink>
            <NavLink to="/product" activeClassName={menu.menuActive}>
                <img src={product} alt="" />
                <small>Продукты</small>
            </NavLink>
            <NavLink to="/clock" activeClassName={menu.menuActive}>
                <img src={search} alt=""/>
                <small>Поиск</small>
            </NavLink>
            <NavLink to="/users" activeClassName={menu.menuActive}>
                <img src={user} alt="" />
                <small>Люди</small>
            </NavLink>
            <NavLink to="/companies" activeClassName={menu.menuActive}>
                <img src={company} alt="" />
                <small>Компании</small>
            </NavLink>
            <NavLink to="/settings" activeClassName={menu.menuActive}>
                <img src={settings} alt="" />
                <small>Настройки</small>
            </NavLink>
        </div>
    )
}

export default Menu