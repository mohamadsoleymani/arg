import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./filter/DataSlice"
import dataChartReducer from "./filter/ChartSlice"

const Store = configureStore({
    reducer: {
        allData : dataReducer,
        allDataChart: dataChartReducer,
    }
});

export default Store;