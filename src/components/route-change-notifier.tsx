import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Route {
  path: string;
  isPrivate?: boolean;
}

interface RouteChangeNotifierProps {
  routes?: Route[];
}

const RouteChangeNotifier = ({ routes = [] }: RouteChangeNotifierProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.parent.postMessage(
      { href: location.pathname + location.search + location.hash },
      "*",
    );
  }, [location]);

  useEffect(() => {
    if (routes.length > 0) {
      window.parent.postMessage({ routeIndex: routes }, "*");
    }
  }, [routes]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.navigate) {
        navigate(event.data.navigate);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  return null;
};

export default RouteChangeNotifier;
