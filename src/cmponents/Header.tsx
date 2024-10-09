import logo from "../assets/images/gaper-logo.png";
import Hamburger from '../cmponents/Hamburger'

function Header() {
  return (
    <>
     <nav className="w-[100%] bg-white  flex flex-col items-center shadow-md border-gray-300">
        <div className="w-[90%] py-[8px] flex items-center justify-between">
            <img src={logo} className="h-8"/>
            <div>
                <ul className="hidden md:flex space-x-8 items-center text-lg ">
                    <li className="hover:text-[#0693e3] hover:cursor-pointer">Assets</li>
                    <li className="hover:text-[#0693e3] hover:cursor-pointer">Jobs</li>
                    <li><button className="rounded border-4 border-[#0693e3] hover:text-[#0693e3] font-semibold md:w-[160px] py-[4px] hover:bg-white
                     bg-[#0693e3] text-white">Hire Engineers</button></li>
                </ul>
                <div className="md:hidden">
                <Hamburger/>
                </div>
            </div>
        </div>
        
       
     </nav>
    </>
  );
}

export default Header;
