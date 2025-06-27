"use client";

import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

const CountryInfo = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name))
      .catch(() => setCountry("Unknown"));
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <span>Location : {country}</span>
    </div>
  );
};

export default CountryInfo;
