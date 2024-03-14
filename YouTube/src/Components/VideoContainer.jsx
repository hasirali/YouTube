import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, SetVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    SetVideos(json.items);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {videos.map((e) => (
          // <Link to={"/watch?v="+e.id}>
            <VideoCard key={e.id} info={e} />
          // </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
