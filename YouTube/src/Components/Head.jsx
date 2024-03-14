import React from "react";
import logo from "../assets/Images/logo.png";
import hamburger from "../assets/Images/hamburger.png";
import user from "../assets/Images/user.png";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); //which will come from AppSlice

  };
  return (
    <>
      <div className="grid grid-flow-col p-4 m-2 shadow bg-gray-100">
        <div className="flex col-span-1">
        <img className="h-8 cursor-pointer" src={hamburger} alt="hamburger" onClick={toggleMenuHandler} />
        <Link to="/">
          <img className="h-8 mx-4" src={logo} alt="youtubeLogo" />
        </Link>
        </div>
        <div className="flex col-span-10 justify-center item-center m-x-80">
          <input
            className="h-10 border p-4 py-1  border-gray-500 w-1/2 rounded-l-full "
            type="text"
            placeholder="Search"
          />
          <button className="h-10 border p-2  border-gray-500 w-20 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        <div className="flex col-span-1 px-10 ml-">
          <img src={user} className="h-8" alt="" />
        </div>
      </div>
    </>
  );
};

export default Head;
