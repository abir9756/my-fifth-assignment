
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
    <nav className="sticky top-0 border-b-2 z-20 bg-white border-b-[#F1F5F9]">
         <div className=" container mx-auto py-3 flex justify-between items-center ">
            <img src={Logo} alt="logo"/>
            <ul className="font-medium text-[#475569]  flex gap-4">
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
        </div>
    </nav>
      
    );
};

export default Nav;