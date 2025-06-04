import { useContext } from "react";
import Option from "./Option";
import { NavContext } from "../context/NavContext";
import { CloseCircle } from "iconsax-react";
import classNames from "classnames";
const Sidebar = () => {
  const { nav, closeNav } = useContext(NavContext);
  return (
    <>
      <div
        className={classNames( 
          "fixed z-20 right-0 top-0 w-[70%] h-full bg-white ease-in-out duration-500 p-3 flex items-end flex-col",
          {"right-[-100%]": !nav}
          )
    }
      >
        <button onClick={closeNav}>
          <CloseCircle size={30} />
        </button>
        <div className="w-full flex justify-center">
          <Option className="w-full" />
        </div>
      </div>
      {nav && (
        <div className="backdrop-blur-sm bg-black/30 fixed inset-0 w-full h-full z-10 "></div>
      )}
    </>
  );
};

export default Sidebar;
