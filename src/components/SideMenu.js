import React from "react";

const SideMenu = props => {
  let menuClasses = "side-menu";
  if (props.show) {
    menuClasses = "side-menu open";
  }
  return (
    <div className={menuClasses}>
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default SideMenu;
