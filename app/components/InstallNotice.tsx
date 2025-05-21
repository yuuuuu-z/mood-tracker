"use client";

import { useEffect, useState } from "react";
import { isMobileDevice } from "@/utils/isMobile";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InstallNotice() {
  useEffect(() => {
    if (!isMobileDevice()) {
      toast.success(
        "Available now on iOS & Android — You can add to home screen! 🎊",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
    }
  }, []);

  return <ToastContainer newestOnTop />;
}
