import React from "react";
import { Routes, Route } from "react-router-dom";

import MainHome from "./home";


function LoginRoute(){
  return <div>
    hllo route
  </div>
}

export function PagesRoute() {
  return (
    <div>
      <Routes >
        <Route exact path="/" element={<MainHome />} />
        <Route path="/login" element={<LoginRoute />} />
      </Routes>
    </div>
  );
}
