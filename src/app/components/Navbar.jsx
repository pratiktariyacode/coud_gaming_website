import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 ">
      <div className="flex">
        <Link href={"/"}>
          <Image src="/logo.png" height={100} width={100} alt="logo" />
        </Link>
      </div>
      <div className="text-2xl mt-2 navbarbox">
        <h1>cloud</h1>
        <h1>gaming</h1>
      </div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-900 rounded-2xl search"
        />
        <button className="login bg-green-600 rounded-2xl">Login</button>
        <button className="signup bg-green-600 rounded-2xl">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
