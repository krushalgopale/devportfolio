"use client";

import { useEffect, useState } from "react";

export function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let minimumElapsed = false;
    let isOnline = navigator.onLine;
    let pageLoaded = document.readyState === "complete";

    const hideWhenReady = () => {
      if (minimumElapsed && isOnline && pageLoaded) {
        setVisible(false);
      }
    };

    const handleLoad = () => {
      pageLoaded = true;
      hideWhenReady();
    };

    const handleOnline = () => {
      isOnline = true;
      setOffline(false);
      pageLoaded = document.readyState === "complete";
      hideWhenReady();
    };

    const handleOffline = () => {
      isOnline = false;
      setOffline(true);
      setVisible(true);
    };

    setOffline(!isOnline);
    window.addEventListener("load", handleLoad);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const timer = window.setTimeout(() => {
      minimumElapsed = true;
      hideWhenReady();
    }, 850);

    hideWhenReady();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const status = offline
    ? "Waiting for an internet connection"
    : "Loading portfolio";

  return (
    <div
      className="initial-loader"
      data-visible={visible}
      role={visible ? "status" : undefined}
      aria-label={visible ? status : undefined}
      aria-hidden={!visible}
    >
      <div className="initial-loader-content">
        <span className="pixel-loader" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
        {offline && (
          <span className="initial-loader-message">
            Waiting for an internet connection
          </span>
        )}
      </div>
    </div>
  );
}
