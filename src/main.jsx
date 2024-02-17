import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { NavProvider } from "./context/NavContext.jsx";
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["Yekan"].join(","),
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavProvider>
          <App />
        </NavProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
