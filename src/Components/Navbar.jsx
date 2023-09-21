import { Link } from "react-router-dom";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from 'react-icons/hi2';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    }
    return (
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-10 py-2 border-b relative">
            <Link to='/' className="text-2xl text-green-500 font-medium">SweetProcudt</Link>
            <div className={`absolute delay-100 transition-all ${open === true ? 'top-full opacity-100 visible' : 'top-8 opacity-0 invisible'} top-full right-10 p-3 bg-white border md:static md:bg-transparent md:border-0 md:opacity-100 md:visible`}>
                <ul className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
            <div onClick={handleToggle} className="flex items-center justify-center cursor-pointer p-2 border rounded-md md:hidden">
                <span className={`delay-100 ${open === true ? 'opacity-100 visible' : 'opacity-0 invisible'} text-2xl w-6 -mr-3`} ><HiMiniBarsArrowUp /></span>
                <span className={`delay-100 ${open === false ? 'opacity-100 visible' : 'opacity-0 invisible'} text-2xl w-6 -ml-3`} ><HiMiniBarsArrowDown /></span>
            </div>
        </nav>
    );
};

export default Navbar;