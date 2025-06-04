"use client";

import { useEffect } from "react";

export default function Pwa() {
  useEffect(() => {
    if ("serverWorker" in navigator) {
      window.addEventListener("load", async function () {
        await navigator.serviceWorker.register("/sw.js");
      });
    }
  });
  return <></>;
}
