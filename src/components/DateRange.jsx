import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// import DateObject from "react-date-object";
import { useDispatch } from "react-redux";
import { filterDate } from "../redux/filter/DataSlice";
import { filterChart } from "../redux/filter/ChartSlice";

const DateRange = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);

  useEffect(() => {
    let startDate = undefined;
    let endDate = undefined;
    
    console.log(values);
    if (values.length > 0 && values[0]) {
      startDate = values[0].toDate().toString();
      endDate = (values.length > 1 && values[1] ? values[1] : values[0]).toDate().toString();
    }
    dispatch(filterDate({ startDate, endDate }));
    dispatch(filterChart({ startDate, endDate }));
  }, [values, dispatch]);

  return (
    <div className="flex flex-col items-center relative">
      <p className="text-[#00000099] font-bold-400 text-[0.8rem] absolute left-0 -top-1">
        تاریخ
      </p>
      <DatePicker
        value={values}
        onChange={setValues}
        range
        calendarPosition="bottom-right"
        locale={persian_fa}
        calendar={persian}
        inputClass="p-4 w-[13.7rem] text-md bg-inherit border-b-1 pb-2 outline-none text-center border-b border-[#0000006b] "
      />
    </div>
  );
};

export default DateRange;
