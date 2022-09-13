import React from "react";
import Toast from "../images/dashboardItem5.svg";

const OrderModal = ({ setShowOrderModal }) => {
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 outline-none focus:outline-none md:inset-0 h-modal md:h-full">
        <div className="modal-content relative w-full max-w-md h-full md:h-auto">
          <div className="relative border-0 bg-white shadow outline-none focus:outline-none md:h-screen px-16 flex justify-center items-center">
            <section>
              <article className="selected-dish text-center flex flex-col items-center pb-4">
                <img
                  className="pb-7"
                  src={Toast}
                  alt="img"
                  width={230}
                  height={230}
                />
                <h6 className="pb-4">Blueberry Toasts and smoothie</h6>
                <p>
                  Just have a single bite of this Black Forest pastry and it
                  will all make a proper sense to you. The kick of cherry and
                  rich chocolate of this super light, airy pastry will
                  definitely make you feel "wow". The perfect combination of
                  cherry cream and rich chocolate can provide the ultimate
                  fulfillment to your dessert craving.
                </p>
              </article>
              <article className="selected-price flex justify-between pb-12">
                <span>NGN 2000</span>
                <span>10-20 Mins</span>
                <span>10 Pcs Avail</span>
              </article>
              <article className="flex justify-between">
                <div className="flex items-center gap-3">
                  <button className="cart-btn"> - </button>
                  <span className="order-no"> 3 </span>
                  <button className="cart-btn"> + </button>
                </div>
                <button
                  className="add-cart-btn"
                  onClick={() => setShowOrderModal(false)}
                >
                  Add to cart
                </button>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default OrderModal;
