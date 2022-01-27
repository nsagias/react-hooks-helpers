import { useState } from "react";

interface IHandleSubmit {
  (event:any): void;
}

const LoginForm = () => {
  const USERNAME_DEFAULT: string = "" ;
  const PASSWORD_DEFAULT: string = "";

  const [userName, setUserName] = useState<string>(USERNAME_DEFAULT);
  const [password, SetPassword] = useState<string>(PASSWORD_DEFAULT);


  const handleSubmit: IHandleSubmit = (event:any) => {
    event.preventDefault()
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
};

export default LoginForm;