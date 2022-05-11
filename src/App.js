import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Index from "./Pages/Index";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            {/* other routes */}
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
