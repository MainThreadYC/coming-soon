import { menuItems } from "@/data/menu";

const Header:React.FC = () =>
    <div className="absolute top-0 left-0 w-full h-[60px] bg-[#0B002A] flex items-center justify-between px-6 text-white">
        <h1>Event Drop</h1>
        <ul className="flex items-center">
          {menuItems.map((item, index) => 
            <li className={`${index === menuItems.length-1  ? 'mr-0' : 'mr-8'} hover:opacity-75`} key={item.name}>
                <a href={item.href}>{item.name}</a>
            </li>)
          }
        </ul>
    </div>

export default Header;
