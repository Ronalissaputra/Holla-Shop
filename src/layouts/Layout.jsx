import React from "react";
import { NavbarApp } from "../components";

const Layout = (props) => {
  return (
    <div>
      <NavbarApp />
      {props.children}
    </div>
  );
};

export default Layout;
