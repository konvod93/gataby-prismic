import { Link } from "gatsby";
import React from "react";

const Menu = () => {
    return  <nav className="w-full flex md:justify-center justify-between items-center p-4 bg-[#f4f4f4]">
        <ul
         className="md:flex hidden font-bold list-none flex-row justify-between items-center flex-initial m-0"
        >
            <li className='mx-20'>
                <Link to="/">Home</Link>
            </li>
            <li className='mx-20'>
                <Link to="/about">About</Link>
            </li>
            <li className='mx-20'>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </nav>
}

export default Menu