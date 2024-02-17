"use client";
import { useEffect } from "react";

const LocationButton = ({ FlyToMyLocation }) => {
  useEffect(() => {
    FlyToMyLocation();
  }, []);

  return <button onClick={FlyToMyLocation}></button>;
};

export default LocationButton;
