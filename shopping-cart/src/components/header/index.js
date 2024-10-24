import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex shadow-md px-4 py-4 min-h-[70px] tracking-wide z-50 bg-white">
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        <Link href={"/"}>Shopping Cart</Link>
      </div>
      <uL className="flex items-center justify-center mr-10 gap-20">
        <li className="text-lg font-bold">
          <Link href={"/"}>Prodcts</Link>
        </li>
        <li className="text-lg font-bold">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </uL>
      <div className="flex space-x-3">
        <form>
          <Button>Login</Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
