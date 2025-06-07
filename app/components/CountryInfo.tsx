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
    <div className="flex items-center gap-2">
      <div className="relative">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
      </div>
      <span>Location : {country}</span>
    </div>
  );
};

export default CountryInfo;
