import React from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Notfound from "../Pages/Notfound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />


      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>


      <Route path="/register" element={<Register />} />

      
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRouters;
