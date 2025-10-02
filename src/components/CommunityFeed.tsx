import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";

interface StoryProps {
  userName: string;
  userAvatar: string;
  petName: string;
  petImage: string;
  story: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const Story = ({ userName, userAvatar, petName, petImage, story, likes, comments, timeAgo }: StoryProps) => {
  return (
    <Card className="rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow border-2 border-border">
      <CardContent className="p-6">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback className="bg-primary text-white font-bold">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground">{userName}</p>
            <p className="text-sm text-muted-foreground">{timeAgo}</p>
          </div>
        </div>

        {/* Story Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed">
            <span className="font-semibold text-primary">Adopted {petName}! 🎉 </span>
            {story}
          </p>
        </div>

        {/* Pet Image */}
        <div className="rounded-2xl overflow-hidden mb-4">
          <img
            src={petImage}
            alt={petName}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6 text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
            <span className="font-medium">{likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{comments}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const CommunityFeed = () => {
  const stories: StoryProps[] = [
    {
      userName: "Sarah Johnson",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      petName: "Max",
      petImage: "/placeholder.svg",
      story: "He's been the best companion I could ask for. From day one, Max has brought so much joy and love into our home. Can't imagine life without him!",
      likes: 124,
      comments: 18,
      timeAgo: "2 days ago",
    },
    {
      userName: "Michael Chen",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      petName: "Luna",
      petImage: "/placeholder.svg",
      story: "After searching for months, we finally found our perfect match. Luna is gentle, playful, and has already stolen everyone's hearts. Thank you PawMatch!",
      likes: 203,
      comments: 31,
      timeAgo: "5 days ago",
    },
    {
      userName: "Emily Rodriguez",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      petName: "Charlie",
      petImage: "/placeholder.svg",
      story: "This little guy has completely transformed our lives. He went from a shy shelter cat to the most loving cuddle bug. Adoption saves lives! 💕",
      likes: 156,
      comments: 22,
      timeAgo: "1 week ago",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Happy Tails 💕
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See the heartwarming stories from our community of pet parents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {stories.map((story, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <Story {...story} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityFeed;