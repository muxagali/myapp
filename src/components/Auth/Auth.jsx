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

const Register = (props) => {
    let username = React.createRef()
    let first_name = React.createRef()
    let last_name = React.createRef()
    let email = React.createRef()
    let password = React.createRef()
    
    let addPost = (e) => {
        e.preventDefault()
        const action = {
            'type': 'CREATE_USER', 
            'username': username.current.value,
            'first_name': first_name.current.value,
            'last_name': last_name.current.value,
            'email': email.current.value,
            'password': password.current.value,
        }
        props.dispatch(action)
        username.current.value = ''
        first_name.current.value = ''
        last_name.current.value = ''
        email.current.value = ''
        password.current.value = ''
    }
    return (
        <div className={auth.registerContainer}>
            <div className={auth.closeBtn}>
                <NavLink to="/">Закрыть</NavLink>
            </div>
            <div className={auth.login}>
                <h1>Регистрация</h1>
                <form action="">
                    <div className={auth.formControl}>
                        <input type="text" name="" id="username" ref={username} placeholder="Введите логин..." />
                    </div>
                    <div className={auth.formControl}>
                        <input type="text" name="first_name" ref={first_name} id="first_name" placeholder="Ваше имя" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="text" name="last_name" ref={last_name} id="last_name" placeholder="Ваше фамилия" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="email" name="email" ref={email} id="email" placeholder="example@gmail.com" />
                    </div>
                    <div className={auth.formControl}>
                        <input type="password" name="password" ref={password} id="password" placeholder="Придумаете пароль" />
                    </div>
                    <div className={auth.formControl}>
                        <button type="submit" onClick={addPost}>Отправить</button>
                    </div>
                </form>
                <NavLink to="/login" className={auth.linkToLogin}>У вас есть аккаунт?</NavLink>
            </div>
        </div>
    )
} 

export { Login, Register } 