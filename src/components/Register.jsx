import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return(
    <form className="auth-form">
      <h3 className="auth-form__title">Регистрация</h3>
      <input 
        className="auth-form__input"
        id="email"
        name="email"
        type="email"
        placeholder="Email" 
      />
      <input 
        className="auth-form__input"
        id="password"
        name="password"
        type="password"
        placeholder="Пароль" 
      />
      <button className="auth-form__submit-btn">
        Зарегистрироваться
      </button>
      <p className="auth-form__caption">
        Уже зарегистрированы?
        <Link className="auth-form__sign-in-link"> Войти</Link>
      </p>
    </form>

  );
};

export default Register;