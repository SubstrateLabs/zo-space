import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("Not found", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <p className="text-xl mb-4">Page not found</p>
        <a href="/" className="underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
