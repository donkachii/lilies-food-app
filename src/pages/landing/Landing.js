import React from "react";
import Navbar from "../../components/Navbar";
import landingFood from "../../images/landingFood.svg";
import googlePlay from "../../images/googlePlay.svg";
import appStore from "../../images/appStore.svg";
import stirfryPasta from "../../images/stirfryPasta.svg";
import meatBalls from "../../images/meatBalls.svg";
import burgerMeal from "../../images/burgerMeal.svg";

import "./landing.css";
import LiliesButton from "../../components/LiliesButton";
import Footer from "../../components/footer/Footer";

const Landing = () => {

  return (
    <div className="landing text-white scroll-smooth">
      <Navbar />
      <section className="landing-heading container md:flex justify-between items-center mx-auto px-2 py-20 mb-5">
        <article className="landing-body pb-8">
        <article className=" inline-block md:hidden flex justify-center">
          <img classname="shadow rounded max-w-full h-auto align-middle border-none" src={landingFood} alt="" />
        </article>
          <h1 className="font-medium pb-2">
            Order <span>food</span> anytime, anywhere
          </h1>
          <p className="pb-2">
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div className="space-x-3 flex">
            <img src={googlePlay} alt="google" />
            <img src={appStore} alt="apple" />
          </div>
        </article>
        <article className="hidden md:inline-block">
          <img src={landingFood} alt="" />
        </article>
      </section>
      <section className="text-center">
        <h5 className="specials">Special Meals of the Day!</h5>
        <p className="special-text pb-3">
          Check our sepecials of the day and get discounts on all our meals{" "}
          <br /> and swift delivery to what ever location within Abuja.
        </p>
        <article className="flex flex-wrap md:flex md:flew-row space-y-4 justify-evenly items-center">
          <div className="flex flex-col space-y-3 items-center">
            <img src={stirfryPasta} alt="" />
            <h6>Stir fry Pasta</h6>
            <p>
              Stir fry pasta yada yada yada <br /> because of Sesan
            </p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src={meatBalls} alt="" />
            <h6>Meat Balls</h6>
            <p>
              Meat Balls yada yada yada <br /> because of Sesan
            </p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src={burgerMeal} alt="" />
            <h6>Burger Meal</h6>
            <p>
              Burger Meal yada yada yada <br /> because of Sesan
            </p>
          </div>
        </article>
      </section>
      <section className="notification-body flex flex-wrap items-center justify-evenly">
        <article className="pb-5 px-5 md:p-0">
          <h3 className="notification-heading pb-4">
            Get notified when we update!
          </h3>
          <p>
            Get notified when we add new items to our specials menu, <br />{" "}
            update our price list of have promos!
          </p>
        </article>
        <article className="flex flex-wrap justify-center flex-col gap-2 md:flex md:flex-row">
          <input
            className="notification-input"
            type="text"
            placeholder="gregphillips@gmail.com"
          />
          <LiliesButton buttonName="Get Notified" />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
