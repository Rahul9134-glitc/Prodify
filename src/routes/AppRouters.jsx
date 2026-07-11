import React from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Notfound from "../Pages/Notfound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Calender from "../Pages/Calender";
import Profile from "../Pages/Profile";
import Analytics from "../Pages/Analyesis";
import Setting from "../Pages/Setting";
import Tasks from "../Pages/Tasks";
import WelcomeScreen from "../components/common/WelcomeScreen";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calender />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<WelcomeScreen />} />

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRouters;
