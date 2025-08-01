import * as React from "react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const user = import.meta.env.VITE_ZO_USER;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background flex-col relative">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-2xl md:text-2xl font-bold mb-8 bg-primary text-primary-foreground rounded-lg px-6 pt-1 pb-2 inline-block">
          {user}.zo.space
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
          welcome to your zo space
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          This is a public site managed by your zo.computer. Manage it within
          the Site section of your zo.computer.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          You can build anything with Zo here. Ask Zo to build you a personal
          portfolio page, put up a blog, make an interactive tool, build a data
          dashboard, or simply put up a cozy web page or some digital art.
        </p>
      </div>

      <a
        href={`https://${user}.zo.computer/f/s`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 transition-transform hover:scale-105"
      >
        <Badge
          variant="secondary"
          className="flex items-center gap-2 px-3 py-2 text-sm shadow-lg border bg-accent text-accent-foreground"
        >
          <img src="/icon.svg" alt="zo.computer" className="w-4 h-4" />
          built with zo.computer
        </Badge>
      </a>
    </div>
  );
};

export default Index;
