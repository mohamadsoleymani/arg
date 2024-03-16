import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moamelat from "./pages/Moamelat";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moamelat" element={<Moamelat />} />
      </Routes>
    </Layout>
  );
}

export default App;
