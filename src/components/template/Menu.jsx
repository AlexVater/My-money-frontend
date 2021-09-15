import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <div className="flex justify-center p-2">
        <img src="../../franc_bronze.svg" width="80" alt="icon" />
      </div>

      <ul className="list-inside flex-col gap-2">
        <MenuItem title="Home" path="/" />
        <MenuItem title="Pagamentos" path="/billingCycles" />
      </ul>
    </>
  );
};

export default Menu;
