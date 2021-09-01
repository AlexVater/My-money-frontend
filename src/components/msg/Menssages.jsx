import React from "react";
import ReduxToastr from "react-redux-toastr";

const Menssages = () => {
  return (
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates={true}
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  );
};

export default Menssages;
