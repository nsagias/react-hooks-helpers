import { useState } from "react";

const LoginForm = () => {

  const handleSubmit = (event:any) => {
    event.preventDefault()
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
};

export default LoginForm;