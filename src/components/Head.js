import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    const dispatch = useDispatch();
    
    const toggleHndlerMenu = ()=>{
        dispatch(toggleMenu());
    }
  
    return (
        <div className='grid grid-flow-col p-4 m-2 shadow-md '>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleHndlerMenu()}
                    className='h-8 mx-5 cursor-pointer'
                    alt="menu"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" />
                <img className='h-8'
                    alt="youtube-logo"
                    src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" />
            </div>
            <div className='col-span-10 ml-36'>
                <input className='w-1/2 border border-gray-600  p-2 rounded-l-full' type="text" />
                <button className='border border-gray-600 border-l-transparent p-2 rounded-r-full bg-gray-100'>Search</button>
            </div>
            <div >
                <img
                    className='h-10'
                    alt="user"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            </div>
        </div>
    )
}

export default Head;