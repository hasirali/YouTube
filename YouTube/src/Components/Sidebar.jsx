import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import user from "../assets/Images/user.png";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-2xl w-64 px-5 text-lg overflow-y-auto h-full relative top-16 ">
      <section className="pt-5">
        <Link to="/">
          <h2 className="hover:bg-slate-100">🏠Home</h2>
        </Link>
        <ul>
          <li className=" hover:bg-slate-100 cursor-pointer">⚡Shorts</li>
          <li className=" hover:bg-slate-100 cursor-pointer">⏯️Subscription</li>
          <li className=" hover:bg-slate-100 cursor-pointer">🔴Live</li>
        </ul>
        <div className="border-x-0 m-2 border-t border-gray-300"></div>
      </section>

      <section className="pt-5">
        <h2 className="font-bold">You</h2>
        <ul>
          <li className=" hover:bg-slate-100 cursor-pointer">🤵Your Channel</li>
          <li className=" hover:bg-slate-100 cursor-pointer">🕛History</li>
          <li className=" hover:bg-slate-100 cursor-pointer">▶️Your Videos</li>
          <li className=" hover:bg-slate-100 cursor-pointer">👁️‍🗨️Watch Later</li>
        </ul>
        <div className="border-x-0 m-2 border-t border-gray-300"></div>
      </section>

      <section className="pt-5 ">
        <h2 className="font-bold">Explore</h2>
        <ul>
          <li className=" hover:bg-slate-100 cursor-pointer">🎵Music</li>
          <li className=" hover:bg-slate-100 cursor-pointer">🏏Sports</li>
          <li className=" hover:bg-slate-100 cursor-pointer">🎮Gaming</li>
          <li className=" hover:bg-slate-100 cursor-pointer">🍿Movies</li>
        </ul>
      </section>
      <div className="border-x-0 m-2 border-t border-gray-300 "></div>
      <section className="pt-5">
        <h2 className="font-bold">Subscription</h2>
        <ul>
          <li className="flex py-2 hover:bg-slate-100 cursor-pointer items-center">
            <img src={user} className="h-6 w-6 mr-2" alt="" />
            <span>Aalo Waaliya</span>
          </li>
          <li className="flex py-2 hover:bg-slate-100 cursor-pointer items-center">
            <img src={user} className="h-6 w-6 mr-2" alt="" />
            <span>Aalo Waaliya</span>
          </li>
          <li className="flex py-2 hover:bg-slate-100 cursor-pointer items-center">
            <img src={user} className="h-6 w-6 mr-2" alt="" />
            <span>Aalo Waaliya</span>
          </li>
          <li className="flex py-2 hover:bg-slate-100 cursor-pointer items-center">
            <img src={user} className="h-6 w-6 mr-2" alt="" />
            <span>Aalo Waaliya</span>
          </li>
          <li className="flex py-2 hover:bg-slate-100 cursor-pointer items-center">
            <img src={user} className="h-6 w-6 mr-2" alt="" />
            <span>Aalo Waaliya</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
