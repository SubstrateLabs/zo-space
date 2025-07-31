/**
 * This template is auto-generated for the Zo Space context.
 *
 * IMPORTANT REQUIREMENTS:
 * - The `isPrivate` export MUST be present (controls route access)
 * - The default export MUST be a React component named Page
 *
 * Modify this component according to user requests.
 * See zo-space/repo-overview.md for background and best practices.
 */

export const isPrivate = false;

export default function Page() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">poemss</h1>

        <div className="bg-card shadow rounded-lg p-6 space-y-4 border">
          <p className="text-lg text-foreground">
            This is a new Zo Page. Customize it by chatting with Zo.
          </p>

          <p className="text-muted-foreground">Try asking Zo to:</p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Add interactive components like buttons, forms, charts</li>
            <li>Style the page with different layouts or colors</li>
            <li>Fetch and display data from APIs</li>
            <li>Create animations, visual effects, diagrams, even 3D scenes</li>
          </ul>

          <p className="text-sm text-muted-foreground mt-6">
            Start by describing what you want this page to do, and Zo will help
            you build it step by step.
          </p>
        </div>
      </div>
    </div>
  );
}
