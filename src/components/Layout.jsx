import Header from "./Header";
import SubHeader from "./SubHeader";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import Footer from "./Footer";

const theme = (outerTheme) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main : '#ed1c24'
      }
    },
    typography: {
      fontFamily: "Yekan"
    },
  });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col h-[100vh] justify-between">
          <div className="p-5">
            <Header />
            <SubHeader />
            {children}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Layout;
