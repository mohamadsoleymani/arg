import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Moamelat from "./pages/Moamelat";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

const theme = (outerTheme) =>
  createTheme({
    direction: 'rtl',
    palette: {
      mode: outerTheme.palette.mode,
      // primary: {
      //   main : '#2D3142'
      // }
    },
    typography:{
      fontFamily: 'Yekan, sans-serif',
    }
  });

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <div className="p-5">
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="moamelat" element={<Moamelat />}/>
      </Routes>
    </div>
    </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
