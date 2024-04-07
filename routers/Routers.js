import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CarDetails from "../pages/CarDetails";
import CarListing from "../pages/CarListing";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PlaceanAd from "../pages/PlaceanAd";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/place-an-ad" element={<PlaceanAd />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
