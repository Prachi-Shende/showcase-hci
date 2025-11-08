import { useState } from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CommentModal } from "./CommentModal";

interface ProjectCardProps {
  image: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  likes?: number;
  comments?: number;
  className?: string;
  caption?: string;
}

export const ProjectCard = ({ 
  image, 
  title, 
  author, 
  likes = 0, 
  comments = 0,
  className,
  caption 
}: ProjectCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };
  return (
    <div className={cn(
      "group rounded-2xl overflow-hidden glass hover-lift cursor-pointer",
      className
    )}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="glass" 
            size="icon" 
            className={cn("rounded-full", isLiked && "text-red-500")}
            onClick={(e) => {
              e.stopPropagation();
              toggleLike();
            }}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          </Button>
          <Button variant="glass" size="icon" className="rounded-full">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          {/* Author Info */}
          <div className="flex items-center gap-3 min-w-0">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-sm truncate">{title}</h3>
              <p className="text-xs text-muted-foreground truncate">{author.name}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleLike();
              }}
              className={cn(
                "flex items-center gap-1 hover:text-red-500 transition-colors",
                isLiked && "text-red-500"
              )}
            >
              <Heart className={cn("h-3.5 w-3.5", isLiked && "fill-current")} />
              {likeCount}
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowComments(true);
              }}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {comments}
            </button>
          </div>
        </div>
      </div>

      <CommentModal 
        open={showComments} 
        onOpenChange={setShowComments}
        post={{ image, author, caption }}
      />
    </div>
  );
};
