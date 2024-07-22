import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Artikel",
    path: "/artikel",
  },
  {
    name: "Course",
    path: "/course",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-20 text-2xl font-second">
          <NavLink href="/">
            <h1 className="font-semibold text-white text-4xl">
              Tanimo<span className="text-accent">.id</span>
            </h1>
          </NavLink>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <NavLink to={link.path} key={index}>
              <a
                className={`text-xl capitalize text-white ${
                  link.path === pathname
                    ? "text-primary border-b-2 border-accent"
                    : "hover:text-second"
                } transition-all`}
              >
                {link.name}
              </a>
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
