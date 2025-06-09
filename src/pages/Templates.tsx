
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean and modern design perfect for tech professionals",
      image: "/placeholder.svg",
      category: "Professional"
    },
    {
      id: 2,
      name: "Creative Designer",
      description: "Eye-catching design for creative professionals",
      image: "/placeholder.svg",
      category: "Creative"
    },
    {
      id: 3,
      name: "Executive",
      description: "Sophisticated template for senior executives",
      image: "/placeholder.svg",
      category: "Executive"
    },
    {
      id: 4,
      name: "Fresh Graduate",
      description: "Perfect template for recent graduates",
      image: "/placeholder.svg",
      category: "Entry Level"
    },
    {
      id: 5,
      name: "Minimalist",
      description: "Simple and clean design focusing on content",
      image: "/placeholder.svg",
      category: "Minimal"
    },
    {
      id: 6,
      name: "Academic",
      description: "Designed for academic and research positions",
      image: "/placeholder.svg",
      category: "Academic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-slate-950 dark:via-background dark:to-slate-900 theme-transition">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-professional rounded-lg flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              urCV.ai
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/">
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-accent">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <Link to="/builder">
              <Button className="btn-professional">
                Create Resume
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Resume Template
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our professionally designed templates and customize them to create your perfect resume
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border-border">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-card-foreground">{template.name}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {template.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                <Link to="/builder">
                  <Button className="w-full btn-professional font-medium">
                    Use This Template
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Payment Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upgrade to Premium
            </h2>
            <p className="text-lg text-muted-foreground">
              Get access to all premium templates and advanced features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-border bg-card">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Basic</h3>
                <div className="text-3xl font-bold text-foreground mb-4">Free</div>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• 3 basic templates</li>
                  <li>• PDF download</li>
                  <li>• Basic AI assistance</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Current Plan
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 border-2 border-primary relative bg-card">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium">
                  POPULAR
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Premium</h3>
                <div className="text-3xl font-bold text-foreground mb-1">$9.99</div>
                <div className="text-sm text-muted-foreground mb-4">per month</div>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• All premium templates</li>
                  <li>• Unlimited downloads</li>
                  <li>• Advanced AI features</li>
                  <li>• Priority support</li>
                  <li>• Custom branding</li>
                </ul>
                <Button className="w-full btn-professional">
                  Upgrade Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-professional rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-card-foreground">urCV.ai</span>
          </div>
          <p className="text-muted-foreground">© 2024 N-PCs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Templates;
