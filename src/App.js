import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <Routes>
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
