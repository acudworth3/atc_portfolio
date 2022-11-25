import "./App.css";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Page1 from "./features/pages/Page1";
import Page2 from "./features/pages/Page2";
import Page3 from "./features/pages/Page3";

export default function App() {
  return (
<div className="App">
<Router>
<Routes>
    <Route  path="/atc_portfolio" element={<h1>Home Page</h1>} />
    <Route  path="page1" element={<Page1 />} />
    <Route  path="page2" element={<Page2 />} />
    <Route  path="page3" element={<Page3 />} />
  </Routes>
</Router>
</div>
  );
}

