import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from 'next/link';

const Header:React.FC = () =>
    <div className="absolute top-0 left-0 w-full h-[60px] bg-[#0B002A] flex items-center justify-between px-6 text-white">
        <Link href="/" id="event-drop-header" className="flex items-center justify-center select-none">
            <Image src="/event-drop-home.png" alt="Event Drop Icon" width={50} height={50} />
            <h1 className="ml-1">Event Drop</h1>
        </Link>
        <ul className="flex items-center">
          {menuItems.map((item, index) => 
            <li className={`${index === menuItems.length-1  ? 'mr-0' : 'mr-8'} hover:opacity-75`} key={item.name}>
                <a href={item.href} target="_blank">{item.name}</a>
            </li>)
          }
        </ul>
    </div>

export default Header;
