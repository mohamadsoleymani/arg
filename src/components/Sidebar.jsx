import { useContext } from "react";
import Option from "./Option";
import { NavContext } from "../context/NavContext";
import { CloseCircle } from "iconsax-react";
const Sidebar = () => {
  const {nav,closeNav } = useContext(NavContext);
  return (
    <div
      className={
        nav
          ? "fixed z-10 right-0 top-0 w-[60%] h-full backdrop-filter-xl bg-blue-400  ease-in-out duration-500"
          : "ease-in-out duration-500  bg-white/30 fixed right-[-100%]"
      }
    >
      <button onClick={closeNav}>
        <CloseCircle size={40} className="m-5"/>
      </button>
      <Option />
    </div>
  );
};

export default Sidebar;
