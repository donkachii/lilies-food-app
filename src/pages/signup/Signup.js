import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signupBg from "../../images/signupBg.svg";

const Signup = () => {
  const [user, setUser] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  }

  console.log(user);

  return (
    <div className="login sm:flex">
      <article
        className="login-bg h-48 mb-12 sm:w-1/2 sm:h-screen sm:m-0"
        style={{ backgroundImage: `url(${signupBg})` }}
      ></article>
      <article className="login-body px-7 sm:w-1/2 text-center flex flex-wrap items-center sm:h-screen ">
        <div className="w-full px-6">
          <h3 className="login-heading text-center pb-3">Welcome to Lilies!</h3>
          <section className="login-form">
            <form
              className=""
            >
              <div className="py-12">
                <input
                  type="text"
                  placeholder="Your First Name"
                  name="firstName"
                  onChange={handleUser}
                />
              </div>
              <div className="pb-9">
                <input
                  type="email"
                  placeholder="Your Email address"
                  name="email"
                  onChange={handleUser}
                />
              </div>
              <div className="pb-9">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Your Password"
                  name="password"
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
            <button className="auth-button mb-6" onClick={handleSubmit}>Submit</button>
            <div className="login-question text-center">
              <p>
                Already have an account.{" "}
                <a href="/login">
                  <span>LOGIN</span>
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Signup;
