import React from "react";
import DashboardList from "./DashboardList";
import { dishes } from "./dishes";

const DashboardItems = () => {
  return (
    <>
      {dishes.map((dish, i) => (
        <DashboardList dish={dish} i={i} />
      ))}
    </>
  );
};

export default DashboardItems;
