import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { EditProfileModal } from "@/components/EditProfileModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Link as LinkIcon, Calendar, Award, Star, Trophy, Zap } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Anya Sharma",
    title: "Senior AI/ML Developer | UI/UX Enthusiast",
    bio: "Passionate about crafting intelligent systems and intuitive user experiences. I thrive on bringing innovative ideas to life through code and design, always learning and pushing boundaries in AI and frontend development.",
    location: "San Francisco, CA",
    website: "anyasharma.dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "SQL", "NoSQL", "UI/UX", "Machine Learning"]
  });

  const handleSaveProfile = (data: typeof profileData) => {
    setProfileData(data);
    toast.success("Profile updated successfully!");
  };

  const handleDownloadResume = () => {
    const resume = `
${profileData.name}
${profileData.title}
${profileData.location} | ${profileData.website}

ABOUT
${profileData.bio}

SKILLS
${profileData.skills.join(", ")}

BADGES
${badges.map(b => `• ${b.name}: ${b.description}`).join("\n")}

PINNED PROJECTS
${pinnedProjects.map(p => `
${p.title} (${p.category})
${p.description}
`).join("\n")}

ALL PROJECTS
${allProjects.map(p => `• ${p.title} (${p.category})`).join("\n")}
    `.trim();

    const blob = new Blob([resume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profileData.name.replace(/\s+/g, '_')}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Resume downloaded!");
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8">
        {/* Profile Header */}
        <div className="glass rounded-3xl p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 gradient-instagram rounded-full blur-xl opacity-50" />
              <img 
                src={profileData.avatar}
                alt="Profile"
                className="relative h-32 w-32 rounded-full object-cover ring-4 ring-background"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{profileData.name}</h1>
                  <p className="text-lg text-muted-foreground">{profileData.title}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="rounded-xl"
                    onClick={() => setShowEditProfile(true)}
                  >
                    Edit Profile
                  </Button>
                  <Button 
                    variant="gradient" 
                    className="rounded-xl"
                    onClick={handleDownloadResume}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 max-w-2xl">
                {profileData.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold gradient-primary text-gradient">1245</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-primary text-gradient">320</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-primary text-gradient">58</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {profileData.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="rounded-xl px-3 py-1 glass"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  {profileData.website}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined March 2023
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Earned Badges */}
        <div className="mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Earned Badges</h2>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div 
                key={badge.name}
                className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover-lift cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${badge.color}`}>
                  <badge.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{badge.name}</div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pinned Projects */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold mb-4">Pinned Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pinnedProjects.map((project) => (
              <div 
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="secondary" className="rounded-xl">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold mb-4">All Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div 
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="rounded-lg text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <EditProfileModal 
        open={showEditProfile}
        onOpenChange={setShowEditProfile}
        profileData={profileData}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

const badges = [
  { 
    name: "AI Innovator", 
    icon: Zap,
    color: "gradient-primary",
    description: "Built 5+ AI-powered apps"
  },
  { 
    name: "Top Contributor", 
    icon: Trophy,
    color: "gradient-accent",
    description: "100+ helpful community answers"
  },
  { 
    name: "Community Leader", 
    icon: Award,
    color: "gradient-instagram",
    description: "Hosted 3 workshops"
  },
  { 
    name: "Frontend Master", 
    icon: Star,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    description: "Expert in React ecosystem"
  }
];

const pinnedProjects = [
  {
    title: "Project NovaFlow",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
    category: "AI Analytics",
    description: "Real-time analytics dashboard powered by machine learning algorithms for predictive insights."
  },
  {
    title: "AR Fashion Studio",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=300&fit=crop",
    category: "Mobile AR",
    description: "Augmented reality app for virtual fashion try-ons using advanced computer vision."
  }
];

const allProjects = [
  {
    title: "Creative Portfolio Showcase",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
    category: "Web Design",
    description: "Modern portfolio template with smooth animations and dark mode support."
  },
  {
    title: "Decentralized VoteChain",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    category: "Blockchain DApp",
    description: "Secure voting platform built on Ethereum for transparent elections."
  },
  {
    title: "E-Commerce Reimagined",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop",
    category: "Frontend Dev",
    description: "Next-gen shopping experience with AI recommendations and seamless checkout."
  },
  {
    title: "Collab Design Studio",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
    category: "Productivity Tool",
    description: "Real-time collaborative design tool for remote teams with version control."
  },
  {
    title: "Generative Art Canvas",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    category: "Creative AI",
    description: "AI-powered art generation tool using neural style transfer and GANs."
  },
  {
    title: "Interactive Code Tutor",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop",
    category: "EdTech",
    description: "Learn coding interactively with AI-guided exercises and instant feedback."
  }
];

export default Profile;
