import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLoging }) => {

  const {url,token,setToken} = useContext(StoreContext)


  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) =>{
    event.preventDefault();
    let newUrl = url;
    if(currentState=="Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLoging(false);
    }
    else{
      console.log(response.data);
      alert(response.data.message || "An error occured");
    }

  }


  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLoging(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              required
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Your emial"
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
