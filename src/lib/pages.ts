export interface PageInfo {
  path: string;
  routePath: string;
}

// System pages that should not be included in the route list
const SYSTEM_PAGES = ['not-found.tsx'];

export function deriveRouteFromPath(filePath: string): string {
  return (
    filePath.replace("./pages", "").replace(".tsx", "").replace("/index", "") ||
    "/"
  );
}

interface PageModule {
  default: React.ComponentType;
  isPrivate?: boolean;
}

export function getRoutesFromGlobImports(
  globModules: Record<string, PageModule>,
): Array<{
  path: string;
  Component: React.ComponentType;
  isPrivate: boolean;
}> {
  return Object.entries(globModules)
    .filter(([path]) => {
      // Check if this is a system page
      return !SYSTEM_PAGES.some(systemPage => path.includes(systemPage));
    })
    .map(([path, module]) => {
      const routePath = deriveRouteFromPath(path);
      const Component = module.default;
      const isPrivate = module.isPrivate || false;

      return { path: routePath, Component, isPrivate };
    });
}
