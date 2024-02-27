import Chart from "../components/Chart";
import Table2 from "../components/MoamelatTable";
import { useSelector } from "react-redux";

import empty from "../assets/7486744.png";

const Moamelat = () => {
  const data = useSelector((state) => state.allDataChart.data);
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <Chart />
          <Table2 />
        </div>
      ) : (
        <div className="flex flex-col m-auto items-center">
          <img src={empty} className="w-[250px] h-[250px] mt-20"></img>
          <p className="text-sm font-bold mt-5 sm:text-lg">اطلاعات مورد نظر در این بازه زمانی وجود ندارد</p>
        </div>
      )}
    </div>
  );
};

export default Moamelat;
