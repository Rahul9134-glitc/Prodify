import React from "react";
import AppRouters from "./routes/AppRouters";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { getCurrentWeather } from "./services/weatherServices";



const App = () => {

 

  return (
    <>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
        pauseOnHover
      />
    </>
  );
};

export default App;
