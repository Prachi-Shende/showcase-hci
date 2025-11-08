import { useState } from "react";
import { X, Heart, Send } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Comment {
  id: number;
  user: { name: string; avatar: string };
  text: string;
  likes: number;
  liked: boolean;
  timestamp: string;
}

interface CommentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post: {
    image: string;
    author: { name: string; avatar: string };
    caption?: string;
  };
}

export const CommentModal = ({ open, onOpenChange, post }: CommentModalProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: { name: "Alex Rivera", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" },
      text: "This is incredible! Love the creativity 🔥",
      likes: 12,
      liked: false,
      timestamp: "2h ago"
    },
    {
      id: 2,
      user: { name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
      text: "Amazing work! Can you share your process?",
      likes: 5,
      liked: true,
      timestamp: "5h ago"
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const toggleLike = (id: number) => {
    setComments(comments.map(c => 
      c.id === id ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c
    ));
  };

  const addComment = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: comments.length + 1,
      user: { name: "You", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
      text: newComment,
      likes: 0,
      liked: false,
      timestamp: "Just now"
    };
    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 gap-0 bg-background">
        <div className="flex h-full">
          {/* Image Section */}
          <div className="hidden md:flex flex-1 bg-black items-center justify-center">
            <img 
              src={post.image} 
              alt="Post" 
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Comments Section */}
          <div className="flex flex-col w-full md:w-[400px]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <img src={post.author.avatar} alt={post.author.name} />
                </Avatar>
                <span className="font-semibold text-sm">{post.author.name}</span>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </DialogClose>
            </div>

            {/* Caption */}
            {post.caption && (
              <div className="p-4 border-b border-border">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <img src={post.author.avatar} alt={post.author.name} />
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold mr-2">{post.author.name}</span>
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Comments */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3 group">
                    <Avatar className="h-8 w-8 shrink-0">
                      <img src={comment.user.avatar} alt={comment.user.name} />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold mr-2">{comment.user.name}</span>
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span>{comment.timestamp}</span>
                        {comment.likes > 0 && <span>{comment.likes} likes</span>}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-6 w-6 shrink-0",
                        comment.liked && "text-red-500"
                      )}
                      onClick={() => toggleLike(comment.id)}
                    >
                      <Heart className={cn("h-4 w-4", comment.liked && "fill-current")} />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addComment()}
                  className="flex-1 border-0 focus-visible:ring-0 bg-transparent"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={addComment}
                  disabled={!newComment.trim()}
                  className="text-primary disabled:opacity-30"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
