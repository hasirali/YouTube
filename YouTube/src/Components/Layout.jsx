import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
