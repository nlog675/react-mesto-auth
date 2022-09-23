import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return(
    <form className="auth-form">
      <h3 className="auth-form__title">Вход</h3>
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
        Войти
      </button>
    </form>

  );
};

export default Login;