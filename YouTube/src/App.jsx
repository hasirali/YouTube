import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./Utils/store";
import WatchPage from "./Components/WatchPage";
import Error from "./Components/Error";
import {  Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
      <Provider store={store}>
        <>
          <Head />

          <Routes>  
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<WatchPage/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </>
      </Provider>
   
  );
}

export default App;
