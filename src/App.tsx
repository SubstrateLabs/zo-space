import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "@/pages/index-page";
// import SinkPage from "@/pages/sink-page";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const RouteChangeNotifier = () => {
  const location = useLocation();

  useEffect(() => {
    window.parent.postMessage(
      { href: location.pathname + location.search + location.hash },
      "*",
    );
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <RouteChangeNotifier />
      <Routes>
        {/* CUSTOM ROUTES GO HERE */}
        <Route path="/" element={<Index />} />
        {/*<Route path="/__sink" element={<SinkPage />} />*/}

        {/* CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
