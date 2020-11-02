import React from 'react';
import main from '../main.module.css';
import { NavLink } from 'react-router-dom';

const Product = () => {
    return (
        <div className={main.productsContainer}>
            <div className={main.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            {/* Navbar menu */}
            <div className={main.navMenu}>
                <h2>Продукты</h2>
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
            <div className={main.products}>
                <h1>Продукты</h1>
            </div>
        </div>
    )
}

export default Product