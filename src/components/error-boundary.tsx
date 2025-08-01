import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Send error to parent window
    window.parent.postMessage(
      {
        type: "error",
        error: {
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
        },
      },
      "*",
    );
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="max-w-2xl w-full bg-background border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Something went wrong
            </h2>
            <p className="text-foreground mb-4">
              An error occurred while rendering this page. The error has been
              reported and will be fixed soon.
            </p>
            <details className="mt-4">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                Error details
              </summary>
              <pre className="mt-2 p-4 bg-muted rounded text-xs overflow-auto">
                {this.state.error?.stack || this.state.error?.message}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}