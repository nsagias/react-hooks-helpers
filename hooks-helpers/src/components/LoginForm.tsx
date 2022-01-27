import { setPriority } from "os";
import { useState } from "react";

interface IHandleSubmit {
  (event:any): void;
}

const LoginForm = () => {
  const USERNAME_DEFAULT: string = "";
  const PASSWORD_DEFAULT: string = "";

  const [userName, setUserName] = useState<string>(USERNAME_DEFAULT);
  const [password, SetPassword] = useState<string>(PASSWORD_DEFAULT);


  const handleSubmit: IHandleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Submiting ${userName} and ${password}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input 
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <label>Password:</label>
        <input 
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;