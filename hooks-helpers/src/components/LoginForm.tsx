import { useState } from "react";



const LoginForm = () => {
  const USERNAME_DEFAULT = "";
  const PASSWORD_DEFAULT = "";

  const [userName, setUserName] = useState(USERNAME_DEFAULT);
  const [password, SetPassword] = useState(PASSWORD_DEFAULT);


  const handleSubmit = (event:any) => {
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