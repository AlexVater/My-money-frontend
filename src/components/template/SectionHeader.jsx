import React from "react";

const SectionHeader = (props) => {
  return (
    <section className="p-4">
      <h2>
        {props.title} <small>{props.small}</small>
      </h2>
    </section>
  );
};

export default SectionHeader;
