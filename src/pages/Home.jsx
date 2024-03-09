import empty from "../assets/7486744.png";
import { useSelector } from "react-redux";
import ArzeTable from "../components/ArzeTable";

const Home = () => {

  const data = useSelector((state) => state.allData.data);

  return (
    <div>
      {data.length > 0 ? (
        <ArzeTable />
      ) : (
        <div className="flex flex-col md:mb-[354px]  items-center">
          <img src={empty} className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] mt-20"></img>
          <p className="text-sm font-bold mt-5 sm:text-lg">اطلاعات مورد نظر در این بازه زمانی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Home;
