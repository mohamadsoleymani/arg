import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/logo2.png";
import { Note, TransactionMinus } from "iconsax-react";
import EspandarLogo from "./espandarLogo";

// eslint-disable-next-line react/prop-types
const NavItem = ({ text, url, icon }) => {
  const pathname = useLocation().pathname;
  return (
    <NavLink
      to={url}
      className={classNames(
        {
          "!bg-espandarRed !border-espandarRed !text-white": pathname === url,
        },
        "sm:w-fit sm:flex hover:shadow-lg hover:shadow-gray-300 sm:gap-3 sm:items-center sm:justify-center sm:bg-transparent max-sm:flex max-sm:gap-2 max-sm:items-center max-sm:justify-center max-sm:bg-white max-sm:p-2 max-sm:w-[20rem] max-sm:border-gray-200 max-sm:rounded-none max-sm:  text-center text-[14px] sm:text-[17px] hover:bg-espandarRed  text-espandarBlack hover:text-white py-2 px-7 border border-espandarBlack transition-all hover:border-transparent sm:rounded-[4px]"
      )}
    >
      {icon}
      {text}
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className="sm:w-full flex flex-wrap items-center gap-2 justify-between border-b-2 pb-3 sm:sticky sm:top-0  sm:backdrop-blur-md sm:bg-white/60 sm:z-10">
      <div className="flex m-auto sm:mx-[1px] gap-5 font-bold">
        <EspandarLogo/>
      </div>
      <div className="flex sm:gap-2 max-sm:fixed bottom-0 left-0 right-0 z-10 max-sm:shadow" style={{fontFamily:'Yekan'}}>
        <NavItem url="/" text="اطلاعات عرضه" icon={<Note />} />
        <NavItem
          url="/moamelat"
          text="اطلاعات معاملات فیزیکی"
          icon={<TransactionMinus />}
        />
      </div>
    </div>
  );
};

export default Header;
