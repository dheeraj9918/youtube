
import React from 'react';

const VideoCard = ({ info }) => {
  // Check if 'info' is defined
  if (!info) {
    return <div>No video information available.</div>;
  }

  // Check if 'snippet' is defined
  const { snippet, statistics } = info;
  if (!snippet) {
    return <div>No snippet information available.</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=' p-2 m-2 w-[286px] h-[350px] shadow-lg'>
      <img className='rounded-lg' alt="thumbnails" src={thumbnails && thumbnails.medium && thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} View</li>
      </ul>
    </div>
  );
};

export default VideoCard;
