import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Search, Plus, TrendingUp, Sparkles, Zap, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';

export default function Communities() {
  const [joinedNames, setJoinedNames] = useState<string[]>([]);
  
  const communities = [
    { name: "AI Builders", members: "12.4k", desc: "Building the agents of tomorrow. Model sharing & hackathons.", icon: Sparkles, color: "text-blue-600 bg-blue-50", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
    { name: "Pixel Guild", members: "8.2k", desc: "Design-first engineering. Shaders, animations, and vibes.", icon: Users, color: "text-purple-600 bg-purple-50", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400" },
    { name: "Systems Hub", members: "3.1k", desc: "Low-level mastery. Rust, Zig, and high-perf compute.", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { name: "Founder Squad", members: "15.9k", desc: "Bypassing VCs. Bootstrapping at the edge of the world.", icon: Plus, color: "text-orange-600 bg-orange-50", image: "https://images.unsplash.com/photo-1522071823991-b9671f47cca0?auto=format&fit=crop&q=80&w=400" },
    { name: "OnChain Alpha", members: "5.4k", desc: "The decentralized future is here. No hype, just code.", icon: Sparkles, color: "text-indigo-600 bg-indigo-50", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400" },
    { name: "Creative Logic", members: "7.1k", desc: "Interactive art and algorithmically generated UI.", icon: Zap, color: "text-pink-600 bg-pink-50", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400" }
  ];

  const handleJoin = (name: string) => {
    if (!joinedNames.includes(name)) {
      setJoinedNames([...joinedNames, name]);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 bg-white tracking-tight">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 px-2">
        <div>
          <h1 className="text-3xl font-black tracking-tighter italic uppercase underline decoration-rose-500/30 underline-offset-4">Circles</h1>
          <p className="text-zinc-500 mt-3 text-sm font-bold italic">Find your tribe. Ship faster together.</p>
        </div>
        <div className="flex gap-3">
          <Button size="lg" className="h-14 px-10 rounded-full bg-black text-white font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 text-xs uppercase tracking-widest">Start a Circle</Button>
        </div>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-300" />
        <Input 
          className="h-14 pl-14 bg-zinc-50 border-zinc-100 text-lg font-black rounded-full focus:bg-white transition-all shadow-sm ring-1 ring-zinc-950/5 placeholder:text-zinc-300" 
          placeholder="Search by tribe or vibe..." 
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((c) => (
          <motion.div 
            key={c.name} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm ring-1 ring-zinc-950/5 hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className="h-44 overflow-hidden relative">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-4 left-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-white/50 backdrop-blur-md ${c.color}`}>
                  <c.icon className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-black tracking-tighter italic uppercase">{c.name}</h3>
                  <Badge className="bg-zinc-50 text-zinc-400 border-none font-black text-[8px] px-2 py-0.5 uppercase tracking-widest rounded-full">{c.members}</Badge>
                </div>
                <p className="text-zinc-400 font-bold leading-tight text-[11px] h-10 line-clamp-3">{c.desc}</p>
              </div>
              
              <div className="flex justify-between items-center mt-auto pt-6 border-t border-zinc-50">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-zinc-100 shadow-sm overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${c.name}${i}`} alt="member" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleJoin(c.name)}
                  className={`rounded-full font-black px-6 h-10 transition-all ${joinedNames.includes(c.name) ? 'bg-emerald-500 text-white' : 'bg-zinc-50 text-zinc-950 hover:bg-black hover:text-white'}`}
                >
                  {joinedNames.includes(c.name) ? (
                    <span className="flex items-center gap-1 animate-in zoom-in duration-300"><Check className="h-4 w-4" /> Joined</span>
                  ) : "Join"}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

