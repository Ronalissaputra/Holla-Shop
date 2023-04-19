import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbBrandAppgallery } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavbarSm = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex lg:hidden overflow-hidden top-0 sticky px-2 bg-indigo-700 w-full h-14 items-center justify-between">
        <div>
          <p className="text-2xl text-slate-50">HollaShop</p>
        </div>
        <div>
          <div onClick={() => setMenu(!menu)}>
            <HiMenuAlt3 className="text-3xl cursor-pointer text-slate-50" />
          </div>
          <div
            className={`w-full h-20 bg-slate-100 min-h-screen translate transition-all duration-300 transform top-0 ${
              menu ? "right-0" : "right-[-500px]"
            } fixed z-50`}
          >
            <div className="m-2">
              <div className="flex justify-between">
                <p className="text-2xl">Holla Shop</p>
                <div onClick={() => setMenu(!menu)}>
                  <GrFormClose className="text-3xl" />
                </div>
              </div>
              <div className="mt-20 flex flex-col space-y-6 items-center justify-center">
                <Link to="/" className="text-2xl flex items-center">
                  <BiHomeAlt2 className="mr-3 text-3xl" /> Beranda
                </Link>
                <Link to="/product" className="text-2xl flex items-center">
                  <TbBrandAppgallery className="mr-3 text-3xl" />
                  Product
                </Link>
                <Link to="/product" className="text-2xl flex items-center">
                  <HiOutlineShoppingBag className="mr-3 text-3xl" />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSm;
