import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
  const [statusLogin, setStatusLogin]  =  useState(0)
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  return (
    <LoginContext.Provider value={[statusLogin, setStatusLogin, inputUsername, setInputUsername, inputPassword, setInputPassword]}>
      {props.children}
    </LoginContext.Provider>
  );
};
