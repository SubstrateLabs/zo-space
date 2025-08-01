import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import RouteChangeNotifier from "@/components/route-change-notifier";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/pages/not-found";
import { getRoutesFromGlobImports } from "@/lib/pages";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const queryClient = new QueryClient();

const pageModules = import.meta.glob("./pages/**/*.tsx", {
  eager: true,
}) as Record<
  string,
  {
    default: React.ComponentType;
    isPrivate?: boolean;
  }
>;

const allRoutes = getRoutesFromGlobImports(pageModules);

const PUBLIC_ROUTES = allRoutes.filter((route) => !route.isPrivate);
const PRIVATE_ROUTES = allRoutes.filter((route) => route.isPrivate);

const showPrivate = process.env.NODE_ENV === "development";

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <RouteChangeNotifier
          routes={allRoutes.map((route) => ({
            path: route.path,
            isPrivate: route.isPrivate,
          }))}
        />
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
  </ThemeProvider>
);

export default App;
