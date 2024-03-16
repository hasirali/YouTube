import React from 'react';

const VideoCard = ({ info }) => {

  if (!info) {
    console.error("VideoCard: 'info' prop is undefined");
    return null;
  }

  // console.log(info);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className='p-5 m-3 shadow-sm w-96 cursor-pointer hover:bg-slate-100 transform hover:scale-105 transition ease-in duration-100'>
        <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
