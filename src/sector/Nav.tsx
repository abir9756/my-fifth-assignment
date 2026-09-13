
import { useState } from "react";
import Logo from "../assets/logo-text.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";

const Nav = () => {
    const [isClicked,setisClicked] = useState(false)
    return (
    <nav className="sticky top-0 border-b-2 z-20 bg-white border-b-[rgb(241,245,249)]">
         <div className=" container mx-auto py-3 flex  justify-between items-center ">

            <button
            onClick={()=>setisClicked(!isClicked)}
            className="text-2xl md:hidden"
            >
            {isClicked?<FiX />:<RxHamburgerMenu />}
            </button>

            <img src={Logo} alt="logo"/>

            <ul className="font-medium hidden text-[#475569]  md:flex gap-4">
                <li className="text-[#DB2777] "><a href="https://github.com/">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div>
               <button className="btn border-none rounded-4xl">Sign In</button>
               <button className="btn  border-none rounded-4xl btn-secondary">Sign Up</button>
               
            </div>

            {/* {isClicked &&
                <div className="hidden flex-col px-3 pb-5 ">
                    <a href="" onClick={()=>setisClicked(false)}>Home</a>
                    <a href="" onClick={()=>setisClicked(false)}>Technologies</a>
                    <a href="" onClick={()=>setisClicked(false)}>Projects</a>
                    <a href="" onClick={()=>setisClicked(false)}>About</a>
                    <a href="" onClick={()=>setisClicked(false)}>Contact</a>

                </div>
            } */}
        </div>
    </nav>
      
    );
};

export default Nav;