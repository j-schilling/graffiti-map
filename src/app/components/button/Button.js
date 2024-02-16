"use client";
import { useEffect } from "react";

const Button = ({ FlyToMyLocation }) => {
  useEffect(() => {
    FlyToMyLocation();
  }, []);

  return <button onClick={FlyToMyLocation}></button>;
};

export default Button;
