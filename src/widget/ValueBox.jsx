import React from "react";
import { RiBankFill, RiBankCardLine } from "react-icons/ri";
import { FaMoneyBill, FaCoins } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const ValueBox = (props) => {
  function handleIcon(icon) {
    switch (icon) {
      case "RiBankFill":
        return <RiBankFill />;
      case "RiBankCardLine":
        return <RiBankCardLine />;
      case "GiBanknote":
        return <FaMoneyBill />;
      default:
        return <FaCoins />;
    }
  }

  return (
    <div
      className={`w-80 p-4 flex border-l-8 border-${props.color}-500 bg-gray-100 text-gray-700 rounded shadow-md`}
    >
      <div className="mr-auto">
        <h1 className="text-2xl font-bold">R$ {props.title}</h1>
        <p>{props.sub}</p>
      </div>
      <div className="">
        <IconContext.Provider value={{ size: "50px" }}>
          {handleIcon(props.icon)}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ValueBox;
