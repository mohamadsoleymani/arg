import { createSlice } from "@reduxjs/toolkit";
import dataFakes from "../../dataTable.json";
import moment from "jalali-moment";

const initialState = {
  data: dataFakes.data,
  brokers: [...new Set(dataFakes.data.map(x => x.broker))],
  startDate: undefined,
  endDate: undefined,
  broker: undefined
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
        state.startDate = moment(action.payload.startDate);
      }
      if (action.payload?.endDate) {
        state.endDate = moment(action.payload.endDate);
      }

      state.endDate = state.endDate?.set({minute: 0, hour: 0, second: 0});
      state.startDate = state.startDate?.set({minute: 0, hour: 0, second: 0});

      // console.log(state.endDate, state.startDate);

      state.data = dataFakes.data.filter((item) => {
        const date = moment(item.releaseDate, "jYYYY/jMM/jDD");
      
        let flag = true;

        const dateUnix = date.unix()
        if (state.endDate && state.startDate) {
          flag = flag && dateUnix >= state.startDate.unix() && dateUnix <= state.endDate.unix();
        } else if (state.endDate) {
          flag = flag && dateUnix <= state.endDate.unix();
        } else if (state.startDate) {
          flag = flag && dateUnix >= state.startDate.unix();
        }
        
        if (state.broker) {
          flag = flag && (state.broker == "empty" || item.broker === state.broker);
        }
        return flag;
      });
    },
  },
});

export const {  filterDate } = DataSlice.actions;
export default DataSlice.reducer;
