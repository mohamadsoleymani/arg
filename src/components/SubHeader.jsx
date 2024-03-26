import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import Option from "./Option";
import { Filter } from "iconsax-react";
import Sidebar from "./Sidebar";

const SubHeader = () => {
  const { opneNav } = useContext(NavContext);

  return (
    <div>
      <div className="hidden md:block">
        <Option />
      </div>

      <button
        onClick={opneNav}
        className="md:hidden w-full flex justify-center bg-gray-100 my-2 items-center gap-2 border py-1 px-2 border-gray-400 rounded-md"
      >
        <Filter size={26}/>
        <span>فیلتر</span>
      </button>
      <Sidebar />
    </div>
  );
};

export default SubHeader;
