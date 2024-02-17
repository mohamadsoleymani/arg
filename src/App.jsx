import { Routes , Route } from "react-router-dom";
// import Header from "./components/Header";
// import Option from "./components/Option";
// import Table from "./components/Table";
import Home from "./pages/Home";
import Moamelat from "./pages/Moamelat";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="p-5">
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="moamelat" element={<Moamelat />}/>
      </Routes>
    </div>
  );
}

export default App;
