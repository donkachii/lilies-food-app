import React from "react";

const Signin = () => {
  return (
    <div className="login sm:flex ">
      <article className="login-bg h-48 mb-12 sm:w-1/2 sm:h-screen sm:m-0"></article>
      <article className="login-body px-7 sm:w-1/2 text-center flex flex-wrap items-center sm:h-screen ">
        <div className="w-full px-6">
          <h3 className="login-heading text-center pb-3">Welcome Back! </h3>
          <section className="login-form">
            <form className="pb-6">
              <div className="py-12">
                <input type="email" placeholder="Your Email address" />
              </div>
              <div className="pb-9">
                <input type="password" placeholder="Your Password" />
                <span className="password-show">show</span>
              </div>
              <button className="auth-button">Submit</button>
            </form>
            <div className="login-question flex justify-between">
                <a href="/signup"><span>Create an account</span></a>
                <span>Forgot Passoword?</span>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Signin;
