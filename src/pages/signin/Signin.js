import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  let navigate = useNavigate();

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getUser = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = () => {
    // localStorage.setItem("user", JSON.stringify(user));
    if (getUser || Object.keys(getUser).length === 0) {
      alert("Please Register to proceed to dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  console.log(getUser);

  return (
    <div className="login sm:flex ">
      <article className="login-bg h-48 mb-12 sm:w-1/2 sm:h-screen sm:m-0"></article>
      <article className="login-body px-7 sm:w-1/2 text-center flex flex-wrap items-center sm:h-screen ">
        <div className="w-full px-6">
          <h3 className="login-heading text-center pb-3">Welcome Back! </h3>
          <section className="login-form">
            <form>
              <div className="py-12">
                <input
                  type="email"
                  placeholder="Your Email address"
                  onChange={handleUser}
                />
              </div>
              <div className="pb-9">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Your Password"
                  onChange={handleUser}
                />
                <span
                  className="password-show"
                  onClick={() => setPasswordShown(!passwordShown)}
                >
                  {passwordShown ? "hide" : "show"}
                </span>
              </div>
            </form>
            <button className="auth-button pb-6" onClick={handleSubmit}>
              Submit
            </button>
            <div className="login-question flex justify-between">
              <a href="/signup">
                <span>Create an account</span>
              </a>
              <span>Forgot Passoword?</span>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Signin;
