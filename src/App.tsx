import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import RouteChangeNotifier from "@/components/route-change-notifier";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/pages/not-found";

// Individual page imports go here:
import Index from "@/pages/index-page";
import ProjectsPage from "@/pages/projects-page";
// import BioPage from "@/pages/bio-page"; // Fake test page - leave in as a comment
// import SinkPage from "@/pages/sink-page"; // just a demo page for ui components, not to be shown to users

const queryClient = new QueryClient();

type RouteMap = {
  path: string;
  Component: React.ComponentType;
};
export const PUBLIC_ROUTES: RouteMap[] = [
  { path: "/", Component: Index },
  { path: "/projects", Component: ProjectsPage },
  // { path: "/bio", Component: BioPage },
  // { path: "/__sink", Component: SinkPage },

  // ^ Add more public routes above here
] as const;

export const PRIVATE_ROUTES: RouteMap[] = [
  // { path: "/my-example-private-page", Component: MyExamplePrivatePage },
  // ^ Add private routes here
] as const;

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
