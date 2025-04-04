import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Blank from "./components/Blank";
import Typography from "./components/Typography";
import Home from "./components/Home";
import Element from "./components/Element";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";  // ✅ Added import
import Content from "./components/Content";  // ✅ Added import
import Table from "./components/Table";  // ✅ Added import
import Widget from "./components/Widget";  // ✅ Added import

import "./App.css";
import Chart from "./components/Chart";
import Button from "./components/Button";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />  {/* ✅ Sidebar is now imported */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/button" element={<Button />} />
          <Route path="/element" element={<Element />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> </div>
    </Router>
  );
}

export default App;
