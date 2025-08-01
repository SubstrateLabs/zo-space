import * as React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "experimental";
  tags: string[];
  link?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Distributed Task Orchestrator",
    description: "A fault-tolerant system for managing distributed compute workloads across heterogeneous clusters. Built with Rust and implements consensus algorithms for state management.",
    status: "active",
    tags: ["rust", "distributed-systems", "consensus"],
    year: "2024"
  },
  {
    id: "2",
    title: "Neural Architecture Search Framework",
    description: "Automated machine learning pipeline that evolves neural network architectures using genetic algorithms. Reduced model search time by 70% compared to traditional approaches.",
    status: "completed",
    tags: ["python", "automl", "pytorch"],
    link: "https://github.com",
    year: "2023"
  },
  {
    id: "3",
    title: "Type-Level State Machine DSL",
    description: "A domain-specific language for defining compile-time verified state machines. Leverages advanced type system features to prevent invalid state transitions at compile time.",
    status: "experimental",
    tags: ["typescript", "dsl", "type-theory"],
    year: "2024"
  },
  {
    id: "4",
    title: "Autonomous Code Review Agent",
    description: "LLM-powered system that performs context-aware code reviews, identifying bugs, suggesting optimizations, and ensuring consistency with project patterns.",
    status: "active",
    tags: ["ai", "developer-tools", "llm"],
    year: "2024"
  },
  {
    id: "5",
    title: "Real-time Collaborative Editor",
    description: "CRDT-based collaborative text editor supporting real-time synchronization across distributed clients. Handles conflict resolution without central coordination.",
    status: "completed",
    tags: ["crdt", "websockets", "react"],
    link: "https://github.com",
    year: "2023"
  },
  {
    id: "6",
    title: "Quantum Circuit Simulator",
    description: "High-performance quantum computing simulator supporting up to 32 qubits. Includes visualization tools and quantum algorithm implementations.",
    status: "experimental",
    tags: ["quantum", "c++", "visualization"],
    year: "2024"
  }
];

const ProjectsPage = () => {
  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "active":
        return "text-green-600 dark:text-green-400";
      case "completed":
        return "text-zinc-600 dark:text-zinc-400";
      case "experimental":
        return "text-amber-600 dark:text-amber-400";
    }
  };

  const getStatusLabel = (status: Project["status"]) => {
    switch (status) {
      case "active":
        return "Active";
      case "completed":
        return "Completed";
      case "experimental":
        return "Experimental";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link 
            to="/" 
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8 inline-block"
          >
            ← Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A selection of systems, tools, and experiments.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h2>
                <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{project.year}</span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;