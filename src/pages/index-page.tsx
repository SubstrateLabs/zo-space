import * as React from "react";

const IndexPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background flex-col">
      <h1 className="text-4xl mb-4 bg-primary text-primary-foreground rounded-lg px-4 pb-1">
        {import.meta.env.VITE_ZO_USER}.zo.space
      </h1>
      <p className="text-xl text-muted-foreground">
        this space built by zo.computer
      </p>
    </div>
  );
};

export default IndexPage;
