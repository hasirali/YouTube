import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { Routes, Route, Link } from "react-router-dom";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import Error from "./Components/Error";
import Sidebar from "./Components/Sidebar";
import Head from './Components/Head'
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<MainContainer />} />
        <Route path="watch" element={<WatchPage />} />
      </Route>
      <Route path="*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
