import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Add from "./components/Add/Add";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
