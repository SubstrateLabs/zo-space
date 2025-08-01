import { useEffect } from "react";

export default function ErrorReporter() {
  useEffect(() => {
    // Handle runtime errors
    const handleError = (event: ErrorEvent) => {
      window.parent.postMessage(
        {
          type: "error",
          error: {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error?.stack,
            timestamp: new Date().toISOString(),
          },
        },
        "*",
      );
    };

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      let message = "Unhandled promise rejection";
      let stack = "";

      if (event.reason instanceof Error) {
        message = event.reason.message;
        stack = event.reason.stack || "";
      } else if (typeof event.reason === "string") {
        message = event.reason;
      } else {
        message = JSON.stringify(event.reason);
      }

      window.parent.postMessage(
        {
          type: "error",
          error: {
            message,
            stack,
            timestamp: new Date().toISOString(),
          },
        },
        "*",
      );
    };

    // Listen for Vite HMR errors
    const handleViteError = (payload: any) => {
      window.parent.postMessage(
        {
          type: "error",
          error: {
            message: payload?.err?.message || "Vite HMR Error",
            stack: payload?.err?.stack || "",
            timestamp: new Date().toISOString(),
          },
        },
        "*",
      );
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    
    // Vite-specific error handling
    if (import.meta.hot) {
      import.meta.hot.on("vite:error", handleViteError);
    }

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      if (import.meta.hot) {
        import.meta.hot.off("vite:error", handleViteError);
      }
    };
  }, []);

  return null;
}