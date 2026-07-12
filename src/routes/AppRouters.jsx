import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Tasks from "../Pages/Tasks";
import Calender from "../Pages/Calender";
import Analytics from "../Pages/Analyesis";
import Profile from "../Pages/Profile";
import Setting from "../Pages/Setting";
import Notfound from "../Pages/Notfound";

import MainLayout from "../components/layout/MainLayout";
import WelcomeScreen from "../components/common/WelcomeScreen";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";
import HelpCenter from "../Pages/HelpCenter";
const AppRouters = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/welcome" element={<WelcomeScreen />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/help" element={<HelpCenter />} />
        </Route>
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRouters;