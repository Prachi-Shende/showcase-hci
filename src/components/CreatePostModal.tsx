import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImagePlus } from "lucide-react";

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (post: { image: string; caption: string; externalLink: string }) => void;
}

export const CreatePostModal = ({ open, onOpenChange, onSubmit }: CreatePostModalProps) => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [externalLink, setExternalLink] = useState("");

  const handleSubmit = () => {
    if (image) {
      onSubmit({ image, caption, externalLink });
      setImage("");
      setCaption("");
      setExternalLink("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Post</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Image Preview */}
          {image && (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <img src={image} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Image URL */}
          <div>
            <Label className="flex items-center gap-2">
              <ImagePlus className="h-4 w-4" />
              Image URL
            </Label>
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mt-2"
            />
          </div>

          {/* Caption */}
          <div>
            <Label>Caption</Label>
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="mt-2 min-h-[100px]"
            />
          </div>

          {/* External Link */}
          <div>
            <Label>External Link (optional)</Label>
            <Input
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              placeholder="https://yourproject.com"
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="gradient" disabled={!image}>
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
