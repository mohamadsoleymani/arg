import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { filterDate } from "../redux/filter/DataSlice";
import { filterChart } from "../redux/filter/ChartSlice";
import classNames from "classnames";
import { MenuItem, Select } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState, useEffect } from "react";
import { removeWaterMark } from "../tools/ui";
// import { getDate } from "../tools/date";
import moment from "jalali-moment";

// eslint-disable-next-line react/prop-types
const Option = ({ className }) => {
  const { brokers } = useSelector((state) => state.allData);
  // const { brokers, lastDateInList, firstDateInList } = useSelector((state) => state.allData);

  const dispatch = useDispatch();
  const [values, setValues] = useState([new Date(), new Date()]);

  const handleBrokerSelected = (e) => {
    dispatch(filterDate({ broker: e.target.value }));
    dispatch(filterChart({ broker: e.target.value }));
  };

  // useEffect(() => {
  //  if (!firstDateInList || !lastDateInList) return;
  // //  console.log(firstDateInList, lastDateInList);
  //  setValues([moment(firstDateInList), moment(lastDateInList)]);
  // }, [firstDateInList, lastDateInList]);
  
  
  useEffect(() => {
    const today = new Date();
    const day1 = today.setDate(today.getDate() - 3);
    const day2 = today.setDate(today.getDate() + 3);
    setValues([day1, day2]);
  }, []);

  useEffect(() => {
    // console.log(values)
    let startDate = undefined;
    let endDate = undefined;
    removeWaterMark();

    const valuesMap = values.map((value) => moment(value))
    if (values.length > 0 && values[0]) {
      startDate = valuesMap[0];
      endDate = valuesMap.length > 1 ? valuesMap[1] : valuesMap[0];
    }

    dispatch(filterDate({ startDate, endDate }));
    dispatch(filterChart({ startDate, endDate }));
  }, [values, dispatch]);

  return (
    <div
      className={classNames(
        "gap-5 pt-8 pb-10 w-9 flex flex-col md:flex-row md:w-full",
        className,
        {}
      )}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">گروه های اصلی</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="گروه های اصلی"
        >
          <MenuItem value={20}>همه</MenuItem>
          <MenuItem value={10}>صنعتی</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">گروه</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="گروه"
        >
          <MenuItem value={-1}>همه</MenuItem>
          <MenuItem value={10}>سیمان</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">تامین کنندگان</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="تامین کنندگان"
          onChange={handleBrokerSelected}
        >
          <MenuItem value="empty">همه</MenuItem>
          {brokers.map((broker, i) => (
            <MenuItem key={`broker-${i}`} value={broker}>
              {broker}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <DateRangePicker
          onChange={(e) => setValues(e)}  
          // value={[firstDateInList, lastDateInList]}
          value={values}
          className="w-full"
          localeText={{ start: "از تاریخ", end: "تا تاریخ" }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Option;
