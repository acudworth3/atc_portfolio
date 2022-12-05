import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./features/pages/Error";
import Homepage from "./features/pages/Homepage";
import NavBar from "./features/navBar/NavBar";
import AgGrid from "./features/pages/AgGrid";
import MaterialUI from "./features/pages/MaterialUI";
import OpenAPI from "./features/pages/OpenAPI";
import ReactRedux from "./features/pages/ReactRedux";
import Resume from "./features/pages/Resume";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/atc_portfolio" element={<Homepage />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Material-UI" element={<MaterialUI />} />
        <Route path="AG-Grid" element={<AgGrid />} />
        <Route path="Open API" element={<OpenAPI />} />
        <Route path="React-Redux" element={<ReactRedux />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
// const pages = ["Resume", "Material-UI", "AG-Grid", "Open API", "React-Redux"];
