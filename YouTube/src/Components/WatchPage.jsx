import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import like from "../assets/Images/like.png";
import dislike from "../assets/Images/dislike.png";
import share from "../assets/Images/share.png";
import save from "../assets/Images/save.png";
import jack from "../assets/Images/jack.png";
import user from "../assets/Images/user.png";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log("Before console.log");
  console.log(searchParams.get("v"));
  console.log("After console.log");

  searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div>
        <div className="px-8 mt-3 flex relative top-16" >
          <iframe
            width="1150"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-5 w-4/5">
          <div className="p-1 m-2">
            <h1 className="font-bold text-xl">
              Lakshya Full Video - Title Track|Hrithik Roshan|Shankar Ehsaan
              Loy|Javed Akhtar
            </h1>
          </div>
          <span className="px-3">1525 Viwes &bull; 2Days Ago </span>
          <div className="flex p-1">
            <span className="px-4 my-1">
              <img className=" h-6 " src={like} alt="" />
              1.2M
            </span>
            <span className="px-4 my-1">
              <img className=" h-6 " src={dislike} alt="" />
              454k
            </span>
            <span className="px-4 my-1">
              <img className=" h-6 " src={share} alt="" />
              share
            </span>
            <span className="px-4 my-1">
              <img className=" h-6 " src={save} alt="" />
              save
            </span>
          </div>

          <div className="border-x-0 m-2 border-t border-gray-300"></div>
          <div className="flex p-3 justify-between items-center w-full">
            <div className="flex items-center">
              <img className="rounded-full h-12" src={jack} alt="" />
              <div className="ml-2">
                <p className="text-xl font-medium">Gret Stack</p>
                <span className="text-l font-small">1M Subscriber</span>
              </div>
            </div>
            <div>
              <button className="bg-red-500 rounded-md px-4 py-2 text-white">
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-x-0 m-2 border-t border-gray-300"></div>
          <div>
            <p>
              'Lakshya' the title track is a power packed music video featuring
              Hrithik Roshan who plays the role of Lieutenant Karan Shergill,
              who leads his team to victory over the Pakistani troops. Lakshya
              is an Indian war drama, directed by Farhan Akhtar. The starcast of
              the film consists of female lead Preity Zinta who plays the role
              of a war journalist. This film also stars Sharad Kapoor, Amitabh
              Bachchan, Aditya Srivastava, Om Puri and Boman Irani.
            </p>
          </div>
          <div className="border-x-0 m-2 border-t border-gray-300"></div>
          <div className="font-bold text-xl">Comments</div>
          <div className="flex items-center">
            <img className="h-6 mr-2" src={user} alt="" />
            <div>
              <span className="block text-base">Hasir Ali</span>
            </div>
            <span className="block px-4 text-sm text-slate-600">
              13 Hours Ago
            </span>
          </div>
          <div className="mt-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              aperiam maiores adipisci consectetur molestiae cupiditate
              reprehenderit dolor a veniam expedita.
            </p>
            <div className="flex items-center mt-2">
              <img className="h-5 px-2" src={like} alt="" />
              <span className="mr-4">244</span>
              <img className="h-5  px-2" src={dislike} alt="" />
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
