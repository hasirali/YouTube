import React, { useEffect } from "react";
import logo from "../assets/Images/logo.png";
import hamburger from "../assets/Images/hamburger.png";
import user from "../assets/Images/user.png";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  const handleBlur = () => {
    // Delay the hide of suggestions to allow click events on suggestions
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className="grid grid-flow-col p-3 m-0 shadow bg-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src={hamburger}
          alt="hamburger"
          onClick={toggleMenuHandler}
        />
        <Link to="/">
          <img className="h-8 mx-4" src={logo} alt="youtubeLogo" />
        </Link>
      </div>
      <div className="flex flex-col col-span-10 justify-center m-x-80">
        <div>
          <input
            className="h-10 border p-4 py-1  border-gray-500 w-1/2 rounded-l-full "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={handleBlur}
          />
          <button className="h-10 border p-2  border-gray-500 w-20 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <div className="fixed top-14 bg-white py-2 px-5 border border-gray-300 w-[33rem] shadow-lg rounded-md z-10 ">
            <ul>
              {suggestions.map((item) => (
                <li key={item} className="flex py-1 shadow-sm hover:bg-gray-100">
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-1 px-10 ml-">
        <img src={user} className="h-8" alt="" />
      </div>
    </div>
  );
};

export default Head;
