import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

import logo from '../assets/logo2.png';

// eslint-disable-next-line react/prop-types
const NavItem = ({ text, url, isLeft }) => {
  const pathname = useLocation().pathname;
  return (
    <NavLink
      to={url}
      className={classNames({
        "!bg-green-600 !text-white": pathname === url,
        'rounded-l-3xl': isLeft,
        'rounded-r-3xl': !isLeft
      }, "sm:w-fit  sm:bg-transparent max-sm:bg-white max-sm:p-4 max-sm:w-[20rem] max-sm:border-gray-200 max-sm:rounded-none max-sm:  text-center text-[13px] sm:text-[15px] hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-7 border border-green-500 transition-all hover:border-transparent sm:rounded-full")}
    >
      {text}
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className="sm:w-full flex flex-wrap items-center gap-2 justify-between border-b-2 pb-3">
      <div className="flex m-auto sm:mx-[1px] gap-5 font-bold">
        <img src={logo} className="w-[4.5rem] cursor-pointer" />
      </div>
      <div className="flex sm:gap-2 max-sm:fixed bottom-0 left-0 right-0 z-10">
        <NavItem url="/" text="اطلاعات عرضه" />
        <NavItem url="/moamelat" text="اطلاعات معاملات فیزیکی" isLeft />
      </div>
    </div>
  );
};

export default Header;
