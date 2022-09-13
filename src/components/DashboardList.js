import React from "react";

const DashboardList = ({ dish, i }) => {
  return (
    <div className="dashboard-item p-5 md:basis-1/3">
      <article className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img className="pb-4" src={dish.image} alt={"img"} />

          <h6>{dish.name}</h6>
          <p>{dish.description}</p>
        </div>
      </article>
      <article className="flex flex-wrap justify-between">
        <span className="price">{dish.price}</span>
        <span className="cart" role="button">
          Add to cart
        </span>
      </article>
    </div>
  );
};

export default DashboardList;
