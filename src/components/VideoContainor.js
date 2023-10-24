import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainor = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);


  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }


  return (
    <div className="flex flex-wrap justify-between">
      {videos.map((video,index) => (
      <Link to ={"/watch?v="+video.id} ><VideoCard key={index} info={video} /></Link>  
      ))}
    </div>
  );
};

export default VideoContainor;