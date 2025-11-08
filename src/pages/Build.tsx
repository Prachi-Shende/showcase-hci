import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Build = () => {
  const [dragActive, setDragActive] = useState(false);
  const [template, setTemplate] = useState("modern-minimal");
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [educationOpen, setEducationOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Upload & Controls */}
          <div className="space-y-6">
            {/* Drag & Drop Upload */}
            <div className="glass rounded-3xl p-8 animate-fade-in">
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-border/50 hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Drag & Drop Your Resume
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      or click to upload. Supports PDF, DOCX.
                    </p>
                  </div>
                  <Button variant="outline" className="rounded-xl">
                    Browse Files
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="glass rounded-3xl p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Assistant
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Choose Portfolio Template
                  </label>
                  <Select value={template} onValueChange={setTemplate}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern-minimal">Modern Minimal</SelectItem>
                      <SelectItem value="creative-bold">Creative Bold</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Project Descriptions
                  </label>
                  <Textarea
                    placeholder="Describe your projects or let AI generate descriptions from your resume..."
                    className="rounded-xl min-h-[100px] resize-none"
                  />
                </div>

                <Button className="w-full gradient-primary text-white rounded-xl">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate AI Captions
                </Button>
              </div>
            </div>

            {/* Review & Edit Content */}
            <div className="glass rounded-3xl p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-4">Review & Edit Content</h3>

              <div className="space-y-3">
                <Collapsible open={experienceOpen} onOpenChange={setExperienceOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-accent/50 transition-colors">
                    <span className="font-medium">Experience</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${experienceOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-3 space-y-2 text-sm text-muted-foreground">
                    <p>- Developed high-performance APIs for e-commerce platform.</p>
                    <p>- Led a team of 5 engineers in agile development cycles.</p>
                    <p>- Increased system efficiency by 20% through optimization.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={educationOpen} onOpenChange={setEducationOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-accent/50 transition-colors">
                    <span className="font-medium">Education</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${educationOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-3 space-y-2 text-sm text-muted-foreground">
                    <p>Bachelor of Science in Computer Science</p>
                    <p>University Name, 2015 - 2019</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-accent/50 transition-colors">
                    <span className="font-medium">Projects</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-3 space-y-2 text-sm text-muted-foreground">
                    <p>E-commerce Platform, Task Management App</p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>

          {/* Right Panel - Live Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="glass rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Live Portfolio Preview</h2>
                <p className="text-sm text-muted-foreground">
                  This is how your portfolio will look based on the selected template and content.
                </p>
              </div>

              {/* Portfolio Preview Card */}
              <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
                {/* Profile */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold gradient-instagram text-gradient">John Doe</h3>
                  <p className="text-muted-foreground mt-1">
                    Senior Software Engineer | Web Development Enthusiast
                  </p>
                </div>

                {/* About Me */}
                <div>
                  <h4 className="font-semibold gradient-primary text-gradient mb-2">About Me</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate and driven Senior Software Engineer with over 7 years of experience in developing scalable web
                    applications and robust software solutions. My expertise lies in full-stack development, cloud technologies, and
                    crafting engaging user experiences.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="font-semibold gradient-primary text-gradient mb-3">Experience</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium gradient-accent text-gradient">
                        Lead Software Developer - Tech Innovations Inc.
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">Jan 2022 - Present</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Orchestrated the development of a next-gen e-commerce platform, leading to a 30% increase in conversion rates.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium gradient-accent text-gradient">
                        Software Engineer - Global Solutions Ltd.
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">Jul 2018 - Dec 2021</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Designed and developed RESTful APIs using Node.js and Python.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="font-semibold gradient-primary text-gradient mb-3">Projects</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card rounded-xl p-3 border border-border/50">
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-2" />
                      <h5 className="font-medium text-sm gradient-accent text-gradient">AI-Powered Analytics Dashboard</h5>
                      <p className="text-xs text-muted-foreground mt-1">Built with React, D3.js, and Flask for real-time data analysis.</p>
                    </div>
                    <div className="bg-card rounded-xl p-3 border border-border/50">
                      <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg mb-2" />
                      <h5 className="font-medium text-sm gradient-accent text-gradient">Decentralized Voting System</h5>
                      <p className="text-xs text-muted-foreground mt-1">Blockchain-based platform ensuring secure and transparent elections.</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold gradient-primary text-gradient mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "SQL", "NoSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-lg">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <Button className="w-full gradient-primary text-white rounded-xl mt-4">
                  Download Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Build;
