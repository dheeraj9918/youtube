
import React, {useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
     const [searchParems]= useSearchParams("v");
     console.log(searchParems.get("v"))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  })
  return (
    <div className='p-5 '>
      <iframe className='rounded-lg' width="900" height="500" 
      src={"https://www.youtube.com/embed/"+ searchParems.get("v")}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;