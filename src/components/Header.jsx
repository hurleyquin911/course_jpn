import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo/Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button, buttonVariants } from "../components/ui/button";
const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to={"/"} className="flex gap-2 items-center cursor-pointer">
          <img src={Logo} alt="" className="h-[70px] w-[70px]" />
          <h1 className=" text-4xl font-semibold font-second text-accent ">
            Tanimo<span className="text-second">.id</span>{" "}
          </h1>
        </NavLink>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <NavLink to={"/contac"}>
            <Button buttonVariants="default">
              <IoMdArrowDropdown /> ind
            </Button>
          </NavLink>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
