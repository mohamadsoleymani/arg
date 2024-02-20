import Table from "../components/Table";
import empty from "../assets/7486744.png";
import { useSelector } from "react-redux";

const Home = () => {

  const data = useSelector((state) => state.allData.data);

  return (
    <div>
      {data.length > 0 ? (
        <Table />
      ) : (
        <div className="flex flex-col m-auto items-center">
          <img src={empty} className="w-[250px] h-[250px] mt-16"></img>
          <p className="text-sm font-bold mt-5 sm:text-lg">اطلاعات مورد نظر در این بازه زمانی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Home;
