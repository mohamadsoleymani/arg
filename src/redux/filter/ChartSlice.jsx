import { createSlice } from "@reduxjs/toolkit";
import dataFakes from "../../dataChart.json";
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
    ?.map((data) => moment(data.date, "jYYYY/jMM/jDD").toDate())
    .sort((a, b) => a - b);
};

const firstDate = () => {
  const result = lastDate();
  return getDaysBefore(result);
};

const lastDate = () => {
  const result = datesList();
  return result[result.length - 1];
};

const fetchData = () => {
  const data = dataFakes.data?.map((data) => ({
    ...data,
    date: moment(data.date, "jYYYY/jMM/jDD").toDate(),
  }));
  const d = data.sort((a, b) => a.date - b.date);
  return d;
};

const initialState = {
  data: fetchData(),
  dates: dataFakes.data.map((data) => data.date).sort(),
  brokers: [...new Set(dataFakes.data.map((x) => x.broker))],
  lastDateInList: lastDate(),
  firstDateInList: firstDate(),
  startDate: undefined,
  endDate: undefined,
  broker: undefined,
};

const ChartSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    /**
     *
     * @param {{broker?: string, endDate?: import("jalali-moment").Moment, startDate?: import("jalali-moment").Moment}} state
     * @param {{payload:{startDate?: string, endDate?: string, broker?: string}}} action
     */

    filterChart: (state, action) => {
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

      // console.log(state.endDate, state.startDate);

      state.data = initialState.data.filter((item) => {
        const date = moment(item.date);

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

export const { filterChart } = ChartSlice.actions;
export default ChartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import dataFakes from "../../dataChart.json";
// import moment from "jalali-moment";

// const initialState = {
//   data: dataFakes.data,
//   brokers: [...new Set(dataFakes.data.map(x => x.broker))],
//   startDate: undefined,
//   endDate: undefined,
//   broker: undefined
// };

// const ChartSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {
//     /**
//      *
//      * @param {{broker?: string, endDate?: import("jalali-moment").Moment, startDate?: import("jalali-moment").Moment}} state
//      * @param {{payload:{startDate?: string, endDate?: string, broker?: string}}} action
//      */
//     filterChart: (state, action) => {
//       moment.locale("fa");
//       if (action.payload?.broker) {
//         state.broker = action.payload.broker;
//       }
//       if (action.payload?.startDate) {
//         state.startDate = moment(action.payload.startDate);
//       }
//       if (action.payload?.endDate) {
//         state.endDate = moment(action.payload.endDate);
//       }

//       state.endDate = state.endDate?.set({ minute: 0, hour: 0, second: 0 });
//       state.startDate = state.startDate?.set({ minute: 0, hour: 0, second: 0 });

//       // console.log(state.endDate, state.startDate);

//       state.data = dataFakes.data.filter((item) => {
//         const date = moment(item.date,"jYYYY/jMM/jDD");

//         let flag = true;

//         const dateUnix = date.unix();
//         if (state.endDate && state.startDate) {
//           flag =
//             flag &&
//             dateUnix >= state.startDate.unix() &&
//             dateUnix <= state.endDate.unix();
//         } else if (state.endDate) {
//           flag = flag && dateUnix <= state.endDate.unix();
//         } else if (state.startDate) {
//           flag = flag && dateUnix >= state.startDate.unix();
//         }

//         if (state.broker) {
//           flag = flag && (state.broker == "empty" || item.broker === state.broker);
//         }
//         return flag;
//       });
//     },
//   },
// });

// export const {  filterChart } = ChartSlice.actions;
// export default ChartSlice.reducer;
