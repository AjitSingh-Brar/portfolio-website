import React from "react";
import Image from "next/image";
import Link from "next/link";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex justify-center items-center">
      <div className="container p-12 flex justify-between">
        <span>
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </span>
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
