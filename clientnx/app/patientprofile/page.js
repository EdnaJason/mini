"use client";

import api from "@/api";

import { Form, Input, message, Checkbox, Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
    return (
      <div className="container-profile">
        <h1 className="heading-profile">Patient's Profile</h1>
        <div className="circle-profile" />
        <div className="rectangle-profile">
          <p>Name        :</p>
          <p>Age         :</p>
          <p>Gender      :</p>
          <p>email       :</p>
          <p>phone no.   :</p>
          <p>address     :</p>
        </div>
      </div>
    );
  };

  export default HomePage;