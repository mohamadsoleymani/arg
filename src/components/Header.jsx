import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavItem = ({ text, url }) => {
  const pathname = useLocation().pathname;
  return (
    <NavLink
      to={url}
      className={`${
        pathname === url ? "!bg-green-600 !text-white" : ""
      } bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white py-2 px-6 border border-green-500 transition-all hover:border-transparent rounded-full`}
    >
      {text}
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className="sm:w-full flex flex-wrap items-center gap-2 justify-between border-b-2 pb-8">
      <h1 className="text-blue-700 font-bold text-3xl">ارگ</h1>
      <div className="flex gap-2 flex-wrap">
        <NavItem url="/" text="اطلاعات عرضه" />
        <NavItem url="/moamelat" text="اطلاعات معاملات فیزیکی" />
      </div>
    </div>
  );
};

export default Header;
