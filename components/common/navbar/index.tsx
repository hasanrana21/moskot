import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <Link href="/home" className="flex items-center space-x-2">
        <div className="h-8 w-8 border border-primary-1 text-center italic">
          M
        </div>
        <span className="font-semibod text-primary-1 text-2xl">Moskot</span>
      </Link>
      <ul className="lg:flex hidden items-center space-x-6">
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Availability
        </li>
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Integration
        </li>
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Community
        </li>
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          <Link href="/">Login/Signup</Link>
        </li>
      </ul>
      <div className="lg:hidden block text-2xl font-medium">=</div>
    </div>
  );
};

export default Navbar;
