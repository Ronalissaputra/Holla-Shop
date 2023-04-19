import React from "react";
import { Link } from "react-router-dom";

const NavbarLg = () => {
  return (
    <div className="hidden lg:flex">
      <div className="w-full h-16 top-0 sticky bg-slate-400 flex justify-between px-2 items-center">
        <div>
          <Link to="/" className="text-3xl text-indigo-700">
            HollaShop
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-xl">
            Beranda
          </Link>
          <Link to="/product" className="text-xl">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLg;
