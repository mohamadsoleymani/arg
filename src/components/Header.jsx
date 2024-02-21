import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavItem = ({ text, url,isLeft }) => {
  const pathname = useLocation().pathname;
  return (
    <NavLink
      to={url}
      className={classNames({
        "!bg-green-600 !text-white": pathname === url,
        'rounded-l-3xl': isLeft,
        'rounded-r-3xl': !isLeft
      }, "sm:w-fit bg-transparent text-center text-[11px] sm:text-[15px] hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-7 border border-green-500 transition-all hover:border-transparent sm:rounded-full")}
    >
      {text}
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className="sm:w-full flex flex-wrap items-center gap-2 justify-between border-b-2 pb-8">
      <h1 className="text-blue-700 font-bold text-3xl">ارگ</h1>
      <div className="flex sm:gap-2">
        <NavItem url="/" text="اطلاعات عرضه" />
        <NavItem url="/moamelat" text="اطلاعات معاملات فیزیکی" isLeft/>
      </div>
    </div>
  );
};

export default Header;
