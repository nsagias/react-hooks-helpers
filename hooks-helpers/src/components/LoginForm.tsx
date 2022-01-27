// import { useState } from "react";
import useInput from "../hooks/useInput";

interface IHandleSubmit {
  (event:any): void;
}

const LoginForm = () => {
  const USERNAME_DEFAULT: string = "";
  const PASSWORD_DEFAULT: string = "";

  // const [userName, setUserName] = useState<string>(USERNAME_DEFAULT);
  // const [password, SetPassword] = useState<string>(PASSWORD_DEFAULT);
  const userName = useInput(USERNAME_DEFAULT);
  const password = useInput(PASSWORD_DEFAULT);


  const handleSubmit: IHandleSubmit = (event:any) => {
    // setUserName(USERNAME_DEFAULT);
    // SetPassword(PASSWORD_DEFAULT);
    alert(`Submiting ${userName.value} and ${password.value}`);
    event.preventDefault();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input 
          // value={userName.value}
          // onChange={(event) => setUserName(event.target.value)}
          // onChange={userName.onChange}
          { ...userName }
        />
        <br />
        <label>Password:</label>
        <input 
          // value={password.value}
          // onChange={(event) => SetPassword(event.target.value)}
          // onChange={password.onChange}
          { ...password}
          />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;