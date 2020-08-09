import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { LoginContext } from "./LoginContext";
import './Login.css';

const LoginForm = () => {
    const history = useHistory()
    const [, setStatusLogin, inputUsername, setInputUsername, inputPassword, setInputPassword] = useContext(LoginContext);

    const handleSubmit = (event) => {
        if (inputUsername === "admin" && inputPassword === "passwordadmin") {
            setStatusLogin(1)
            history.push("/")
        } else {
            alert('Maaf Salah nih!!')
        }
    }

    const handleChangeUsername = (event) => {
        setInputUsername(event.target.value)
    }
    const handleChangePassword = (event) => {
        setInputPassword(event.target.value)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input className="input-login" type="text" placeholder="Enter Username -admin-" value={inputUsername} name="name" onChange={handleChangeUsername} required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input className="input-login" type="password" placeholder="Enter Password -passwordadmin-" value={inputPassword} name="password" onChange={handleChangePassword} required />
                    <button className="button-login" type="submit">Login</button>
                </form>
            </div>
        </>
    )

}

export default LoginForm
