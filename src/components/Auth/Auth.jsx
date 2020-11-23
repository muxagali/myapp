import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from './auth.module.css';


const Login = () => {
    let username = React.createRef()
    let password = React.createRef()

    const showData = (e) => {
        e.preventDefault()
        alert(`login: ${username.current.value}\npassword: ${password.current.value}`)
    }

    return (
        <div className={auth.loginContainer}>
            <div className={auth.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            <div className={auth.login}>
                <h1>Войти в систему</h1>
                <form action="" method="POST">
                    <div className={auth.formControl}>
                        <input type="text" name="" ref={username} id="username" placeholder="Введите логин..." />
                    </div>
                    <div className={auth.formControl}>
                        <input type="password" name="password" ref={password} id="password" placeholder="Пароль..." />
                    </div>
                    <div className={auth.formControl}>
                        <button type="submit" onClick={showData}>Войти</button>
                    </div>
                </form>
                <NavLink to="/register" className={auth.LinkToRegister}>Регистрация</NavLink>
            </div>
        </div>
    )
} 

const Register = () => {
    return (
        <div className={auth.registerContainer}>
            <div className={auth.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            <div className={auth.login}>
                <h1>Регистрация</h1>
                <form action="">
                    <div className={auth.formControl}>
                        <input type="text" name="" id="" placeholder="Введите логин..." />
                    </div>
                    <div className={auth.formControl}>
                        <input type="text" name="first_name" id="" placeholder="Ваше имя" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="text" name="last_name" id="" placeholder="Ваше фамилия" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="email" name="email" id="" placeholder="example@gmail.com" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="password" name="password" id="" placeholder="Придумаете пароль" />
                    </div>
                    <div className={auth.formControl}>
                        <button type="submit">Отправить</button>
                    </div>
                </form>
                <NavLink to="/login" className={auth.linkToLogin}>У вас есть аккаунт?</NavLink>
            </div>
        </div>
    )
} 

export { Login, Register } 