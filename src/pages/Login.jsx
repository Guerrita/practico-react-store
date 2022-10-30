import React, { useRef } from "react";
import "@styles/Login.scss";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
		event.preventDefault();  //previene que se cargue la pagine y se manden parametros por la url cuando se de click en login
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="medico@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
