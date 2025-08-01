import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider.tsx";

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
  const { setTheme } = useTheme();

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
      if (event.data?.theme) {
        setTheme(event.data.theme);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate, setTheme]);
  return null;
};

export default RouteChangeNotifier;
