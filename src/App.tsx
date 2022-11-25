import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from "./features/pages/page1";
import Page2 from "./features/pages/page2";
import Page3 from "./features/pages/Page3";

export default function App() {
  return (
<div className="App">
<Router>
<Routes>
    <Route exact path="/" element={<h1>Home Page</h1>} />
    <Route exact path="page1" element={<Page1 />} />
    <Route exact path="page2" element={<Page2 />} />
    <Route exact path="page3" element={<Page3 />} />
  </Routes>
</Router>
</div>
  );
}

