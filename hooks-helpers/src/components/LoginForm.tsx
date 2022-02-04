// import { useState } from "react";
import React from "react";
import useInput from "../hooks/useInput";

interface IHandleSubmit {
  (event: React.FormEvent): void;
}

const LoginForm = () => {
  const USERNAME_DEFAULT: string = "";
  const PASSWORD_DEFAULT: string = "";

  // const [userName, setUserName] = useState<string>(USERNAME_DEFAULT);
  // const [password, SetPassword] = useState<string>(PASSWORD_DEFAULT);
  const userName = useInput(USERNAME_DEFAULT);
  const password = useInput(PASSWORD_DEFAULT);


  const handleSubmit: IHandleSubmit = (event: React.FormEvent) => {
    // setUserName(USERNAME_DEFAULT);
    // SetPassword(PASSWORD_DEFAULT);
    event.preventDefault();
    alert(`Submiting ${userName.value} and ${password.value}`);
    userName.clearSetValue(USERNAME_DEFAULT);
    password.clearSetValue(PASSWORD_DEFAULT);

    // axios post would go here
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input 
          // onChange={(event) => setUserName(event.target.value)}
          value={userName.value}
          onChange={userName.onChange}
          // { ...userName }
        />
        <br />
        <label>Password:</label>
        <input 
          // onChange={(event) => SetPassword(event.target.value)}
          value={password.value}
          onChange={password.onChange}
          // { ...password}
          />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;