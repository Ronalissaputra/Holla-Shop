import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const NavbarSm = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex lg:hidden overflow-hidden top-0 sticky px-2 bg-slate-400 w-full h-14 items-center justify-between">
        <div>
          <p className="text-3xl text-indigo-700">HollaShop</p>
        </div>
        <div>
          <div onClick={() => setMenu(!menu)}>
            <HiMenuAlt3 className="text-3xl cursor-pointer" />
          </div>
          <div
            className={`w-full h-20 bg-slate-100 min-h-screen translate transition-all duration-300 transform top-0 ${
              menu ? "right-0" : "right-[-500px]"
            } fixed z-50`}
          >
            <div className="m-2">
              <div className="flex justify-between">
                <p className="text-3xl">Holla Shop</p>
                <div onClick={() => setMenu(!menu)}>
                  <GrFormClose className="text-3xl" />
                </div>
              </div>
              <div className="mt-20 flex flex-col space-y-2 items-center justify-center">
                <Link to="/" className="text-2xl">
                  Beranda
                </Link>
                <Link to="/product" className="text-2xl">
                  Product
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
