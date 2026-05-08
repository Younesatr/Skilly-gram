import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageSquare, Repeat2, Share2, MoreHorizontal, Image as ImageIcon, Link as LinkIcon, Hash, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { name: "Sarah Chen", role: "AI Researcher", avatar: "SC", username: "@schen_ai", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
      content: "Just published my latest work on multimodal contrastive learning. Results show a +15% win in zero-shot classification! 🧬",
      likes: 124,
      comments: 18,
      tags: ["ML", "Research"],
      time: "45m ago",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      isLiked: false,
      isHiring: true
    },
    {
      id: 2,
      author: { name: "Marcus Thorne", role: "Design Lead", avatar: "MT", username: "@mthorne.design", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
      content: "Spatial UI is where it's at. Grids are dead, long live volumes. 🥽",
      likes: 89,
      comments: 6,
      tags: ["SpatialDesign", "XR"],
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      isLiked: true,
      isHiring: false
    }
  ]);

  const toggleLike = (id: number) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  return (
    <div className="container mx-auto max-w-xl px-4 py-16 tracking-tight bg-white min-h-screen">
      <div className="mb-12 flex items-center justify-between px-2">
        <div>
          <h1 className="text-2xl font-black tracking-tighter mb-1 italic">THE PROOF</h1>
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest leading-none">Visual receipts from the top 1%.</p>
        </div>
        <div className="h-10 w-10 md:h-12 md:w-12 rounded-[1rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
           <Plus className="h-5 w-5" />
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-16">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-2 mb-4">
              <div className="flex gap-3 items-center">
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border border-white shadow-xl ring-1 ring-zinc-100">
                  <AvatarImage src={post.author.photo} />
                  <AvatarFallback className="bg-zinc-50 font-bold text-xs">{post.author.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm tracking-tight hover:text-purple-600 transition-colors cursor-pointer uppercase italic">{post.author.username}</span>
                    {post.isHiring && <Badge className="bg-rose-50 text-rose-500 border-none font-black text-[8px] px-2 rounded-full uppercase tracking-widest leading-none py-0.5">Hiring</Badge>}
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">{post.author.role} • {post.time}</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-zinc-300 hover:text-black"><MoreHorizontal className="h-4 w-4" /></Button>
            </div>

            {/* Content Media */}
            <div 
              onDoubleClick={() => toggleLike(post.id)}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-950/5 group cursor-pointer"
            >
              <img src={post.image} alt="Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <AnimatePresence>
                {post.isLiked && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <Heart className="h-24 w-24 text-white fill-white drop-shadow-2xl opacity-80" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interaction Bar */}
            <div className="mt-6 px-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-6">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-2 transition-all group ${post.isLiked ? 'text-rose-500' : 'text-zinc-300 hover:text-rose-500'}`}
                  >
                    <Heart className={`h-5 w-5 ${post.isLiked ? 'fill-rose-500' : 'group-hover:scale-110'}`} /> 
                    <span className="text-[10px] font-black">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-300 hover:text-black transition-all group">
                    <MessageSquare className="h-5 w-5 group-hover:scale-110" /> 
                    <span className="text-[10px] font-black">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-300 hover:text-black transition-all group">
                    <Share2 className="h-5 w-5 group-hover:scale-110" /> 
                  </button>
                </div>
                <Button className="h-10 rounded-full bg-black text-white px-6 font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10">
                  {post.isHiring ? "Apply Now" : "Collab"}
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-zinc-800 leading-snug">
                  <span className="font-black mr-2 uppercase italic">{post.author.username}</span> 
                  {post.content}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black text-purple-600 uppercase tracking-widest cursor-pointer hover:underline underline-offset-2">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
