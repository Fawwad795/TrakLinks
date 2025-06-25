import React from "react";
import { Link } from "react-router-dom";
import Aurora from "../lib/Aurora";
import Navbar from "../components/Navbar";

const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <Aurora />
    </div>
  );
};

export default SignUpPage;
