import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rafalubis/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/raniawho?igsh=OXcxZDV2Z2FiOWhi",
  },
  {
    icon: <FaTwitter />,
    path: "https://www.instagram.com/raniawho?igsh=OXcxZDV2Z2FiOWhi",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.instagram.com/raniawho?igsh=OXcxZDV2Z2FiOWhi",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <NavLink key={index} to={item.path} className={iconStyles}>
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Social;
