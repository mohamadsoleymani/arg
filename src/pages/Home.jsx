import empty from "../assets/empty-box.png";
import { useSelector } from "react-redux";
import ArzeTable from "../components/ArzeTable";

const Home = () => {

  const data = useSelector((state) => state.allData.data);

  return (
    <div>
      {data.length > 0 ? (
        <ArzeTable />
      ) : (
        <div className="flex flex-col items-center">
          <img src={empty} className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] max-sm:mt-[10rem] mt-20"></img>
          <p className="text-sm mt-5 sm:text-xl text-espandarBlack font-Yekan">اطلاعات مورد نظر در این بازه زمانی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Home;
