import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

function Body() {
  return (
    <div className="flex">
      <div >
        <Sidebar />
      </div>
      <div>
        {/* Render nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
