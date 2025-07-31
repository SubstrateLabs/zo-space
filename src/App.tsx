import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import RouteChangeNotifier from "@/components/route-change-notifier";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/pages/not-found";
import { getRoutesFromGlobImports, PAGES_GLOB } from "@/lib/pages";

const queryClient = new QueryClient();

const pageModules = import.meta.glob(PAGES_GLOB, { eager: true }) as Record<
  string,
  {
    default: React.ComponentType;
    isPrivate?: boolean;
  }
>;

const allRoutes = getRoutesFromGlobImports(pageModules);

export const PUBLIC_ROUTES = allRoutes.filter((route) => !route.isPrivate);
export const PRIVATE_ROUTES = allRoutes.filter((route) => route.isPrivate);

const showPrivate = process.env.NODE_ENV === "development";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <RouteChangeNotifier routes={PUBLIC_ROUTES.map((route) => route.path)} />
      <Routes>
        {/* PRIVATE ROUTES */}
        {showPrivate
          ? PRIVATE_ROUTES.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          : null}
        {/* PUBLIC ROUTES */}
        {PUBLIC_ROUTES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {/* CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
