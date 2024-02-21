import React from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white flex justify-center items-center">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </span>
        <Link href="#hero-section">
          <div
            className="bg-purple-600 rounded-full p-2 flex items-center justify-center animate-bounce cursor-pointer"
            id="btn-back-to-top"
          >
            <KeyboardArrowUpIcon />
          </div>
        </Link>
        <div>
          <p className="text-slate-600">All rights reserved.</p>
          <p className="flex flex-row items-center">
            <span>
              <CopyrightIcon />
            </span>{" "}
            Ajit Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
