import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home.jsx";
import Form from "./page/Form.jsx";
import AddSchemes from "./page/AddSchemes.jsx";
import SchemesPage from "./page/SchemesPage.jsx";
import FilteredSchemesPage from "./page/FilteredSchemesPage.jsx";
import Login from "./page/Login.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/form-filling" element={<Form />} />
        <Route path="/addschemes" element={<AddSchemes />} />
        <Route path="/schemes-all" element={<SchemesPage />} />
        <Route path="/filtered-schemes" element={<FilteredSchemesPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
