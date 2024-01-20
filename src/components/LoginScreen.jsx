import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import Form from "react-bootstrap/Form";
import loginImg from "./../Tablet login-cuate.svg";
import SoulSoftLogo from "../_SOULSOFT 2023.png";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  function authenticateUser(userName, pw) {
    console.log(userName + " " + pw);
    return userDetails.find(
      (user) => user.userName === userName && user.password === pw
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authenticateUser(userName, pw)) {
      navigate("/super/dashboard");
    } else {
      alert("Invalid credentials");
      // setNo("");
      // setPw("");
    }
  };
  const userDetails = [
    {
      userName: "nik",
      password: "123456",
    },
    {
      userName: "chotu",
      password: "123456",
    },
    {
      userName: "admin",
      password: "123456",
    },
  ];
  return (
    <div className="main_container">
      <div className="Box">
        <div className="innerBox">
          <div className="left_container">
            {" "}
            <img src={loginImg} className="LoginScreenImage" alt="left_container_image" />
          </div>
          <div className="right_container">
            <div className="text-center">
              <img src={SoulSoftLogo} className="right_container_image" alt="right_container_image" />
            </div>
            <h2>KINDLY SIGNIN TO MOVE FORWARD!</h2>

            <div className="form_row">
              <Form.Label className="text-white" s>
                UserName
              </Form.Label>
              <Form.Control
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form_row">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-dark w-100 loginButton "
            >
              Login
            </button>
            <p
              className="text-dark d-flex align-items-center justify-content-center gap-1"
              style={{ fontSize: "12px" }}
            >
              <IoMdLock />
              forgot password / username
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
