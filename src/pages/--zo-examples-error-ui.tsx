import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestError() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error thrown from the component");
  }

  const triggerRuntimeError = () => {
    // This will cause a runtime error
    const obj: any = null;
    obj.nonExistentMethod();
  };

  const triggerAsyncError = async () => {
    // This will cause an unhandled promise rejection
    await Promise.reject(new Error("This is an async error"));
  };

  const triggerSyntaxError = () => {
    // This will cause a syntax error when evaluated
    eval("this is not valid javascript {{{");
  };

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Error Testing Page</CardTitle>
          <CardDescription>
            Test different types of errors to see how they're displayed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <Button
              onClick={() => setShouldThrow(true)}
              variant="destructive"
            >
              Trigger React Component Error
            </Button>
            
            <Button
              onClick={triggerRuntimeError}
              variant="destructive"
            >
              Trigger Runtime Error
            </Button>
            
            <Button
              onClick={triggerAsyncError}
              variant="destructive"
            >
              Trigger Async Error
            </Button>
            
            <Button
              onClick={triggerSyntaxError}
              variant="destructive"
            >
              Trigger Syntax Error
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Click any button above to trigger an error. The error will be caught
              and displayed in the parent window with options to copy the error
              details.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Mark as private so it only shows in development
export const isPrivate = true;