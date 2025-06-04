"use client";

import { useEffect, useState } from "react";

const PwaUpdater = () => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                setWaitingWorker(newWorker);
                setShowReload(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  };

  return showReload ? (
    <div className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
      <p className="font-semibold mb-2">✨ New version available!</p>
      <button
        onClick={reloadPage}
        className="bg-white text-purple-600 font-bold px-3 py-1 rounded-md hover:bg-purple-100"
      >
        Update Now
      </button>
    </div>
  ) : null;
};

export default PwaUpdater;
