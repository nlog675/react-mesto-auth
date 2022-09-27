import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({onLogout}) {
  const location = useLocation();
  const isLoginPage = location?.pathname === '/sign-in';
  const isRegisterPage = location?.pathname === '/sign-up';

  return (
    <header className="header">
          <img src={logo} alt="Логотип" className="header__logo" />
          {isLoginPage ? (
            <Link className="header__btn" to="/sign-up">Регистрация</Link>
          ) : isRegisterPage ? (
            <Link className="header__btn" to="/sign-in">Вход</Link>
          ) : (
            <Link onClick={onLogout} className="header__btn" to="/sign-in">Выйти</Link>
          )}
      </header>
  )
}

export default Header;