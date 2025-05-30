import Chart from "../components/Chart";
import { useSelector } from "react-redux";
import empty from "../assets/empty-box.png";
import MoamelatTable from "../components/MoamelatTable";

const Moamelat = () => {
  const data = useSelector((state) => state.allDataChart.data);
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <Chart />
          <MoamelatTable />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src={empty} className="w-[150px] h-[150px] lg:w-[150px] lg:h-[150px] max-lg:mt-[10rem] mt-20"></img>
          <p className="text-sm font-Yekan mt-5 sm:text-xl text-espandarBlack">اطلاعات مورد نظر در این بازه زمانی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Moamelat;
