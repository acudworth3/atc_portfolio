import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./features/pages/Page1";
import Page2 from "./features/pages/Page2";
import Page3 from "./features/pages/Page3";
import Error from "./features/pages/Error";
import Homepage from "./features/pages/Homepage";
import NavBar from "./features/navBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
