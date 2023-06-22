import React from "react";

const Navbar = () => {
  return (
    <div className="section flex justify-between items-center py-6">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 border border-blue-500 text-center italic">
          M
        </div>
        <span className="font-semibod text-blue-500 text-2xl">Moskot</span>
      </div>
      <ul className="flex items-center space-x-6">
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Availability
        </li>
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Integration
        </li>
        <li className="lg:text-lg text-base font-medium cursor-pointer">
          Community
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
