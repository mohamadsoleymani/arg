// import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import DateRange from "./DateRange";
import { useDispatch, useSelector } from "react-redux";
import { filterDate } from "../redux/filter/DataSlice";
import { filterChart } from "../redux/filter/ChartSlice";
import classNames from "classnames";



// eslint-disable-next-line react/prop-types
const Option = ({className}) => {

  const { brokers } = useSelector((state) => state.allData);

  const dispatch = useDispatch();

  const handleBrokerSelected = (e) => {

    dispatch(filterDate({ broker: e.target.value }))
    dispatch(filterChart({ broker: e.target.value }))
    
  };

  return (
    <div className={classNames("gap-20 pt-8 pb-10 w-9 flex-wrap  flex flex-col md:flex-row md:w-full", className, {})}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            همه گروه های اصلی
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "همه گروه های اصلی",
              id: "uncontrolled-native",
            }}
          >
            <option value={20}>همه</option>
            <option value={10}>صنعتی</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            همه گروه ها
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "همه گروه ها",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>همه</option>
            <option value={10}>سیمان</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            تامین کنندگان
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "همه تامین کنندگان",
              id: "uncontrolled-native",
            }}
            onClick={handleBrokerSelected}
          >
            <option value='empty'>همه</option>
            {brokers.map((broker, i) => (
              <option key={`broker-${i}`} value={broker}>
                {broker}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <DateRange />
      {/* <div onClick={handleNav} className="md:hidden">
        <Filter />
      </div> */}
    </div>
  );
};

export default Option;

