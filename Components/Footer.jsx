import React from "react";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Jasurbek Isokov Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillGithub />
        <AiOutlineTwitter />
        <BiPaperPlane />
      </p>
    </div>
  );
};

export default Footer;
