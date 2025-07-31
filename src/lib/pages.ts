export interface PageInfo {
  path: string;
  routePath: string;
}

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
  return Object.entries(globModules).map(([path, module]) => {
    const routePath = deriveRouteFromPath(path);
    const Component = module.default;
    const isPrivate = module.isPrivate || false;

    return { path: routePath, Component, isPrivate };
  });
}
