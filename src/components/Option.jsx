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
import moment from "moment";

// eslint-disable-next-line react/prop-types
const Option = ({ className }) => {
  const { brokers, dates, startDate, endDate } = useSelector((state) => state.allData);

  const dispatch = useDispatch();
  const [values, setValues] = useState([]);

  useEffect(() => {
    console.log(startDate.format(), endDate.format());
  }, [startDate, endDate]); 

  useEffect(() => {
    console.log(dates[0], dates[dates.length - 1]);
    if (!dates) return;
    const lastDay = dates[dates.length - 1];
    const prevDay = moment(lastDay).subtract(5, 'days').toDate();
      setValues([prevDay.toString(), lastDay.toString()]);
  }, [dates])

  const handleBrokerSelected = (e) => {
    dispatch(filterDate({ broker: e.target.value }));
    dispatch(filterChart({ broker: e.target.value }));
  };

  useEffect(() => {
    let startDate = undefined;
    let endDate = undefined;
    removeWaterMark();

    if (values.length > 0 && values[0]) {
      startDate = moment(values[0]).format('YYYY/MM/DD')
      endDate = moment(values.length > 1 && values[1] ? values[1] : values[0]).format('YYYY/MM/DD')
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
          onChange={setValues}
          className="w-full"
          defaultValue={[startDate.toDate(), endDate.toDate()]}
          localeText={{ start: "از تاریخ", end: "تا تاریخ" }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Option;
