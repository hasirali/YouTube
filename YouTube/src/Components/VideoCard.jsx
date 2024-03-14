import React from 'react';

const VideoCard = ({ info }) => {

  if (!info) {
    console.error("VideoCard: 'info' prop is undefined");
    return null;
  }

  console.log(info);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className='p-4 shadow-sm w-1/4 cursor-pointer hover:scale-105 ease-in duration-100'>
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
