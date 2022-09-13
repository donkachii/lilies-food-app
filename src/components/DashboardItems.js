import React from "react";
import DashboardList from "./DashboardList";
import { dishes } from "./dishes";

const DashboardItems = ({ setShowOrderModal }) => {
  return (
    <>
      {dishes.map((dish, i) => (
        <DashboardList
          dish={dish}
          key={i}
          i={i}
          setShowOrderModal={setShowOrderModal}
        />
      ))}
    </>
  );
};

export default DashboardItems;
