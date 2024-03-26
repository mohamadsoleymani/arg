import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const Chart = () => {
  const data = useSelector((state) => state.allDataChart.data);
  
  return (
    <div className="h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
          barSize={50}
        >
          <XAxis dataKey="date" padding={{ left: 0, right: 0 }} />
          <YAxis tickMargin={40} />
          <Tooltip />
          <Legend  />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="arzePrice" fill="#0069ff" name=" قیمت عرضه "/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
