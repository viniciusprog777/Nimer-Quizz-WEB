import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { io } from "socket.io-client";

import "./login.css";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

import nymerLogo from "../../assets/NymerLogo.png";
import { useGlobal } from "../../App";

function Login() {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      const response = await api.post("/sessions", login);

      console.log(response.data.token);
      signIn(response.data);

      history.push("/course");
    } catch (error) {
      console.error(error);
    }
  };
  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img src={nymerLogo} alt="Nymer Quizz" />
      </div>

      <div className="login-right">
        <h1>Acessar Nymer</h1>

        <div className="login-loginInputEmail">
          <MdEmail />
          <input
            id="email"
            type="email"
            placeholder="Digite um email"
            value={login.email}
            onChange={handleInput}
          />
        </div>

        <div className="login-loginInputPassword">
          <MdLock />
          <input
            id="password"
            placeholder="Digite sua senha"
            type={show ? "text" : "password"}
            value={login.password}
            onChange={handleInput}
          />
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>

        <button type="submit" onClick={() => handleSubmit()}>
          Entrar
        </button>

        <h4>Não tenho conta!</h4>

        <button>
         
          <Link to="/register">
            Cadastrar
            </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
