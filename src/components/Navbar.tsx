import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between text-lg bg-primary p-4 h-52">
      <div>
        <span>Travel-Booking</span>
      </div>
      <div className="">
        <button>Register</button>
        <button className="ml-4 bg-green border-solid border-1 border-green-600 rounded px-4 hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
