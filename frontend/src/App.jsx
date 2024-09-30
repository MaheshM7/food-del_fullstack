import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Verify from "./pages/Verify/Verify.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";

const App = () => {

  const [showLogin,setShowLoging] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLoging={setShowLoging} />:<></>}
    <div className="app">
      <Navbar setShowLoging={setShowLoging} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<MyOrders/>} />
      </Routes>
    </div>
    <Footer/> 
    </>
  );
};

export default App;
