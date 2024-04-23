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
import moment from 'jalali-moment';

const Chart = () => {
  const data = useSelector((state) => state.allDataChart.data);
  
  return (
    <div className="h-[500px] font-Yekan" >
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
          <XAxis dataKey="date" tickFormatter={x => moment(x).calendar()} padding={{ left: 0, right: 0 }} />
          <YAxis tickMargin={50} />
          <Tooltip labelFormatter={x => moment(x).calendar()}/>
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="arzePrice" fill="#9AADBF" name=" قیمت عرضه "/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
