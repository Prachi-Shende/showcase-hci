import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { CreatePostModal } from "@/components/CreatePostModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Explore = () => {
  const [activeTab, setActiveTab] = useState<"for-you" | "following" | "trending">("for-you");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState(projects);

  const handleCreatePost = (newPost: { image: string; caption: string; externalLink: string }) => {
    const post = {
      id: posts.length + 1,
      image: newPost.image,
      title: newPost.caption || "Untitled Project",
      author: { 
        name: "You", 
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
      },
      likes: 0,
      comments: 0,
      caption: newPost.caption
    };
    setPosts([post, ...posts]);
  };

  const getFilteredPosts = () => {
    switch (activeTab) {
      case "following":
        return posts.filter((_, i) => i % 3 === 0);
      case "trending":
        return [...posts].sort((a, b) => b.likes - a.likes);
      default:
        return posts;
    }
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-8">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 glass w-fit rounded-2xl p-1">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-xl",
              activeTab === "for-you" && "bg-accent text-accent-foreground"
            )}
            onClick={() => setActiveTab("for-you")}
          >
            For You
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-xl",
              activeTab === "following" && "bg-accent text-accent-foreground"
            )}
            onClick={() => setActiveTab("following")}
          >
            Following
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-xl",
              activeTab === "trending" && "bg-accent text-accent-foreground"
            )}
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredPosts.map((project, index) => (
            <div 
              key={project.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <Button 
        variant="instagram" 
        size="icon"
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-2xl hover:scale-110"
        onClick={() => setShowCreatePost(true)}
      >
        <Plus className="h-6 w-6" />
      </Button>

      <CreatePostModal 
        open={showCreatePost}
        onOpenChange={setShowCreatePost}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=450&fit=crop",
    title: "Innovating Design System for Web 3.0",
    author: { name: "Jane Doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    likes: 234,
    comments: 45
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=450&fit=crop",
    title: "Generative AI Art: The Future of Creativity",
    author: { name: "Alex Smith", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" },
    likes: 567,
    comments: 89
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=450&fit=crop",
    title: "Building a Headless CMS with Next.js",
    author: { name: "Maria Davis", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
    likes: 432,
    comments: 67
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=450&fit=crop",
    title: "Indie Game Development: Pixel Art Challenges",
    author: { name: "Tom Miller", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    likes: 789,
    comments: 123
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop",
    title: "User-Centered Design for SaaS Products",
    author: { name: "Lisa Perez", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    likes: 345,
    comments: 56
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=450&fit=crop",
    title: "Mastering Vector Graphics in Affinity Designer",
    author: { name: "David White", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    likes: 456,
    comments: 78
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=450&fit=crop",
    title: "Developing Engaging VR Experiences with Unity",
    author: { name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" },
    likes: 678,
    comments: 91
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop",
    title: "Interactive Data Storytelling with D3.js",
    author: { name: "Michael Kim", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop" },
    likes: 543,
    comments: 72
  }
];

export default Explore;
