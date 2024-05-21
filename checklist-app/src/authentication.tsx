import React, { useState } from "react";
import "./style.css";
import Login from "./login";
import Signup from "./signup";
import { Typography } from "@material-tailwind/react";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="w-[100%]">
      {active === "login" ? <Login /> : <Signup />}{" "}
      <Typography
        variant="small"
        color="gray"
        className="text-center font-normal"
      >
        {active === "login" ? (
          <>
            Not registered?{" "}
            <button
              onClick={handleChange}
              className="font-medium text-gray-900"
            >
              Create an Account
            </button>
          </>
        ) : (
          <>
            Have an account?{" "}
            <button
              onClick={handleChange}
              className="font-medium text-gray-900"
            >
              Log in
            </button>
          </>
        )}
      </Typography>
    </div>
  );
}

export default Authentication;
