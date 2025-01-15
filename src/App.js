import React from "react";
import Header from "./components/layouts/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./components/layouts/user/Login";
import Regsiter from "./components/layouts/user/Regsiter";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regsiter />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
