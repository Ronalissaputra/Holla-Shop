import React from "react";
import { NavbarLg, NavbarSm } from "../components";

const Layout = (props) => {
  return (
    <>
      <NavbarLg />
      <NavbarSm />
      <div className="mx-2">{props.children}</div>
    </>
  );
};

export default Layout;
