import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Siderbar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if(!isMenuOpen) {return null;}

  return !isMenuOpen ? null : (
    <div className='shadow-lg w-48 px-5 mt-0'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Siderbar;