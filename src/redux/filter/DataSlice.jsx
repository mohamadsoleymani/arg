import { createSlice } from "@reduxjs/toolkit";
import dataFakes from "../../dataTable.json";
import moment from "jalali-moment";

function getDaysBefore(date, days = 5) {
  date.setDate(date.getDate() - days);
  return date;
}

/**
 * @returns {Date[]}
 */

const datesList = () => {
  return dataFakes.data
    ?.map((data) => moment(data.releaseDate, "jYYYY/jMM/jDD").toDate())
    .sort((a, b) => a - b);
};

const fetchData = () => {
  return dataFakes.data
    ?.map(d => ({...d, releaseDate: moment(d.releaseDate, "jYYYY/jMM/jDD").toDate()}))
    .sort((a, b) => a.releaseDate - b.releaseDate);
}

const firstDate = () => {
  const result = lastDate();
  return getDaysBefore(result);
};

const lastDate = () => {
  const result = datesList();
  return result[result.length - 1];
};

const initialState = {
  data: fetchData(),
  dates: dataFakes.data.map((data) => data.releaseDate).sort(),
  brokers: [...new Set(dataFakes.data.map((x) => x.broker))],
  lastDateInList: lastDate(),
  firstDateInList: firstDate(),
  startDate: undefined,
  endDate: undefined,
  broker: undefined,
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

    /**
     *
     * @param {{broker?: string, endDate?: import("jalali-moment").Moment, startDate?: import("jalali-moment").Moment}} state
     * @param {{payload:{startDate?: string, endDate?: string, broker?: string}}} action
     */

    filterDate: (state, action) => {
      moment.locale("fa");
      if (action.payload?.broker) {
        state.broker = action.payload.broker;
      }
      if (action.payload?.startDate) {
        state.startDate = action.payload.startDate;
      }
      if (action.payload?.endDate) {
        state.endDate = action.payload.endDate;
      }

      state.endDate = state.endDate?.set({ minute: 0, hour: 0, second: 0 });
      state.startDate = state.startDate?.set({ minute: 0, hour: 0, second: 0 });

      state.data = initialState.data.filter((item) => {
        const date = moment(item.releaseDate);

        let flag = true;

        const dateUnix = date.unix();
        if (state.endDate && state.startDate) {
          flag =
            flag &&
            dateUnix >= state.startDate.unix() &&
            dateUnix <= state.endDate.unix();
        } else if (state.endDate) {
          flag = flag && dateUnix <= state.endDate.unix();
        } else if (state.startDate) {
          flag = flag && dateUnix >= state.startDate.unix();
        }

        if (state.broker) {
          flag =
            flag && (state.broker == "empty" || item.broker === state.broker);
        }
        return flag;
      });
    },
  },
});

export const { filterDate } = DataSlice.actions;
export default DataSlice.reducer;
