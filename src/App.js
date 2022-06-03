import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Signin/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Hero from "./Components/Hero/Hero";
import Achievement from "./Components/footer/Achievement";
import Assign from "./Components/Assign/Assign";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/SignUp" element={<SignUp />} />
    //     <Route path="/SignIn" element={<SignIn />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
       <Header />
      <Hero />
      <Achievement /> 
      {/* <Assign /> */}
    </div>
  );
};

export default App;
