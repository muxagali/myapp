import React from 'react';
import  { NavLink }  from 'react-router-dom';
import header from './header.module.css';


const Header = () => {
    return (
        <div className={header.header}>
            {/* Intro header */}
            <div className={header.introHeader}>
                {/* Logotype */}
                {/* ========================== */}
                <div className={header.logo}>
                    <a href="/">aBay <small>st</small></a>
                </div>

                {/* Projects menu */}
                {/* ========================== */}
                <div className={header.projectMenu}>
                    <a href="/">mediahosting</a>
                    <a href="/">nurismedia</a>
                    <a href="/">webhosting</a>
                    <a href="/">Свойство</a>
                    <a href="/">Помощь</a>
                </div>

                {/* Authorization */}
                <div className={header.auth}>
                    <NavLink to="/login"><i className="far fa-user"></i></NavLink>
                    <a href="/" title="Закладки"><i className="far fa-heart"></i></a>
                    <a href="/" title="Увидомление"><i className="far fa-bell"></i></a>
                </div>
            </div>
        </div>
    )
} 

export default Header