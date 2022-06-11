/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserVoid } from "../store/slices/loggedUserReducer";
import { useNavigate } from "react-router-dom";
import { setLogginTrue, setLogginFalse } from "../store/slices/authReducer";
// import { getContacts } from "../store/slices/contactReducer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "../assets/styles/Login.css";

export default function Login(props) {
  const isLogIn = useSelector((state) => state.isLogIn);
  const dispatch = useDispatch();
  const [value, setValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const user = useSelector((state) => state.loggedUser);

  const onChange = ({ target }) => {
    setValue((value) => {
      return {
        ...value,
        [target.name]: target.value,
      };
    });
  };

  const onSubmit = (e) => {
    if (e.target) e.preventDefault();

    axios
      .post("/api/auth/login", value)

      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("millanfamily", `Bearer ${data.token}`);
        dispatch(setLogginTrue());
        dispatch(setUser());
        toast.success("Bienvenido/a");

        // getContacts();
        navigate("/add");
      })
      .catch((err) => {
        toast.error("Usuario y/o Contraseña incorrectos");
        dispatch(setLogginFalse());
      });
      

  };

  console.log("user", user)
  function logOut(e) {
      e.preventDefault()
    localStorage.removeItem("millanfamily");
    dispatch(setUserVoid());
  }

  return (
    <div>
      <section className="login">
        <section className="login__container">
          {!isLogIn ? (
            <h1>Inicio de sesión</h1>
          ) : (
            <h2 className="mt-4">
              Hola, has iniciado sesión como: {user.name}
            </h2>
          )}

          <form className="login__container--form">
            {!isLogIn ? (
              <div>
                <input
                  onChange={onChange}
                  name="email"
                  className="input"
                  type="text"
                  placeholder="Email"
                />
                <input
                  onChange={onChange}
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Contraseña"
                />
              </div>
            ) : null}
            {!isLogIn ? (
              <button className="button" onClick={onSubmit}>
                Iniciar sesión
              </button>
            ) : (
              <button className="button" onClick={logOut}>
                Cerrar sesión
              </button>
            )}
          </form>
        </section>
      </section>
    </div>
  );
}
