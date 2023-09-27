import {
  faHouse,
  faUser,
  faEnvelope,
  faLaptopCode,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuItem } from "./MenuItem";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleActiveItem = (index: number) => {
    setActiveItem(index);
  };

  const menuItems = [
    { icon: faHouse, text: "Home", pos: "translate-x-0" },
    { icon: faGear, text: "Skills", pos: "translate-x-16" },
    { icon: faUser, text: "About", pos: "translate-x-32" },
    { icon: faLaptopCode, text: "Projects", pos: "translate-x-48" },
    { icon: faEnvelope, text: "Contact", pos: "translate-x-64" },
  ];

  return (
    <nav className=" text-white font-roboto font-normal fixed flex items-center justify-center bottom-0 w-[100svw] h-16 px-6 z-10 bg-navy_light max-w-[425px] sm:rounded-xl -translate-x-1/2 left-1/2 md:bottom-3">
      <ul className="flex items-center relative ">
        <div
          className={`${menuItems[activeItem].pos}  duration-500 bg-primary -translate-y-7 bottom-4 border-8 border-navy h-16 w-16 absolute rounded-full `}
        >
          <div className="w-6 h-4 absolute bottom-[-2px] -left-[20px]  shadow-icon-broder-left rounded-tr-full"></div>
          <div className="w-6 h-4 absolute bottom-[-2px] right-[-20px]  shadow-icon-broder-right rounded-tl-full"></div>
        </div>

        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            className={""}
            icon={item.icon}
            text={item.text}
            active={activeItem === index}
            handler={() => handleActiveItem(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
