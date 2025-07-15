import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import RouteChangeNotifier from "@/components/route-change-notifier";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/pages/not-found";

// Individual page imports go here:
import Index from "@/pages/index-page";
import BioPage from "@/pages/bio-page";
// import SinkPage from "@/pages/sink-page"; // just a demo page for ui components, not to be shown to users

const queryClient = new QueryClient();

export const ROUTES = [
  { path: "/", Component: Index },
  { path: "/bio", Component: BioPage },

  // Add more routes here
] as const;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <RouteChangeNotifier />
      <Routes>
        {/* ALL CUSTOM ROUTES */}
        {ROUTES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {/* CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
