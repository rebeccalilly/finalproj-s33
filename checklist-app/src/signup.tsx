import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase";

function Signup({ setWhichPage, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user with email " + user.email + " created!");

        updateProfile(user, { displayName: username }).then(() => {
          console.log(user.displayName);
          setCurrentUser(user);
          setWhichPage(1);
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="grid place-items-center p-2">
      <div>
        <img
          src="https://api.logo.com/api/v2/images?logo=logo_6213aef0-3840-4904-bd11-7676b87f5e4f&u=1716304552848&format=svg&margins=166&width=1000&height=750&fit=contain"
          className="grid mx-auto max-w-[24rem]"
          alt="Logo"
        />
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 grid mx-auto max-w-[24rem]"
        >
          Sign Up
        </Typography>
        <Typography className="mb-10 text-gray-600 font-normal text-[18px] grid mx-auto max-w-[24rem]">
          Enter your username, email, and password to sign up
        </Typography>
        <form className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="username">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Username
              </Typography>
            </label>
            <Input
              id="username"
              color="gray"
              size="lg"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your username"
              value={username}
              className="w-full placeholder-opacity-100 focus:border--primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@mail.com"
              value={email}
              className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              id="password"
              color="gray"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
              value={password}
              className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button
            onClick={handleSignup}
            color="purple"
            size="lg"
            className="mt-6"
            fullWidth
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
