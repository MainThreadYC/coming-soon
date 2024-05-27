import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useState } from "react";

const Header:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className="absolute top-0 left-0 w-full h-[60px] bg-[#0B002A] flex items-center justify-between px-2 text-white md:px-6">
            <Link href="/" id="event-drop-header" className="flex items-center justify-center select-none">
                {/* <Image src="/event-drop-home.png" alt="MainThread Icon" width={50} height={50} /> */}
                <h1 className="ml-1">MainThread</h1>
            </Link>
            <ul className="hidden items-center md:flex">
            {menuItems.map((item, index) => 
                <li className={`${index === menuItems.length-1  ? 'mr-0' : 'mr-8'} hover:opacity-75`} key={item.name}>
                    <a href={item.href} target="_blank">{item.name}</a>
                </li>)
            }
            </ul>
            <div id="mobile-menu" className="md:hidden">
                    <div className="absolute top-2 right-2 z-20">
                        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
                    </div>
                    <div id="mobile-menu-items" className={`absolute opacity-0 top-0 -left-full w-full h-screen bg-[#0B002A] z-10 transition-all ease-in-out ${isMenuOpen ? 'left-0 opacity-90' : ''}`}>
                        <ul className="w-full p-6 pt-16">
                        {menuItems.map((item) => 
                            <li className="text-xl mb-12 underline" key={item.name}>
                                <a href={item.href} target="_blank">{item.name}</a>
                            </li>)
                        }
                        </ul>
                    </div>
            </div>
           
        </div>
    )
}

export default Header;
