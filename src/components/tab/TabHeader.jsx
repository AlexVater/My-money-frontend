import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab } from "../../store/actions/tabsAction";
import If from "../operator/If";

//icons
import { IoList } from "react-icons/io5";
import { HiPlusSm } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";
import { BsTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const TabHeader = (props) => {
  function handleIcon(icon) {
    switch (icon) {
      case "RiBankFill":
        return <IoList />;
      case "RiBankCardLine":
        return <HiPlusSm />;
      case "GiBanknote":
        return <RiPencilFill />;
      case "BsTrashFill":
        return <RiPencilFill />;
      default:
        return <BsTrashFill />;
    }
  }

  const selected = props.tab.selected === props.target;
  const visible = props.tab.visible[props.target];

  return (
    <If test={visible}>
      <li
        className={`flex rounded-sm border-t-2 ${
          selected ? "bg-gray-50 border-blue-900" : ""
        }`}
      >
        <a
          className="p-2"
          href="#"
          data-toggle="tab"
          data-target="{props.target}"
          onClick={() => props.selectTab(props.target)}
        >
          <IconContext.Provider
            value={{
              style: { display: "inline", verticalAlign: "top", margin: "4" },
            }}
          >
            {handleIcon(props.icon)}
          </IconContext.Provider>
          {props.label}
        </a>
      </li>
    </If>
  );
};

const mapStateToProps = (state) => ({ tab: state.tab });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
