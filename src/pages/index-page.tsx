import * as React from "react";

const IndexPage = () => {
  const [apiResponse, setApiResponse] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchApiData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const apiUrl = `https://${import.meta.env.VITE_ZO_USER}.api.zo.space`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch API");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background flex-col">
      <h1 className="text-4xl mb-4 bg-primary text-primary-foreground rounded-lg px-4 pb-1">
        {import.meta.env.VITE_ZO_USER}.zo.space
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        this space built by zo.computer
      </p>
      
      <div className="mt-8 p-6 bg-secondary rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">API Test</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Calling {import.meta.env.VITE_ZO_USER}.api.zo.space
        </p>
        
        <button
          onClick={fetchApiData}
          disabled={loading}
          className="mb-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Fetch API"}
        </button>
        
        {loading && (
          <p className="text-lg">Loading...</p>
        )}
        
        {error && (
          <div className="text-red-500 bg-red-50 p-3 rounded">
            Error: {error}
          </div>
        )}
        
        {apiResponse && (
          <div className="bg-background p-4 rounded border">
            <pre className="text-sm overflow-x-auto">{apiResponse}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
