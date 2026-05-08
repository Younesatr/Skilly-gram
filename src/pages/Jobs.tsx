import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Briefcase, MapPin, DollarSign, Clock, Filter, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Jobs() {
  const [appliedIds, setAppliedIds] = useState<number[]>([]);
  
  const jobs = [
    {
      id: 1,
      title: "Chief Vibe Officer",
      company: "Linear",
      vibe: "98%",
      location: "SF / Remote",
      salary: "$140k - $180k",
      type: "Full-time",
      skills: ["React", "Product Strategy"],
      posted: "2h ago",
      logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 2,
      title: "AI Alchemist",
      company: "OpenAI",
      vibe: "92%",
      location: "San Francisco",
      salary: "$160k - $220k",
      type: "Full-time",
      skills: ["PyTorch", "Rust"],
      posted: "5h ago",
      logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 3,
      title: "Pixel Pusher",
      company: "Stripe",
      vibe: "85%",
      location: "Remote",
      salary: "$120k",
      type: "Contract",
      skills: ["Figma", "Shaders"],
      posted: "1d ago",
      logo: "https://images.unsplash.com/photo-1627163439134-7a8c47e08238?auto=format&fit=crop&q=80&w=100"
    }
  ];

  const handleApply = (id: number) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 bg-white tracking-tight">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 px-2">
        <div>
          <h1 className="text-3xl font-black tracking-tighter italic uppercase underline decoration-purple-500/30 underline-offset-4">Fresh Drops</h1>
          <p className="text-zinc-500 mt-3 text-sm font-bold italic">Bypass the HR wall. Verified proof = Verified hire.</p>
        </div>
        <div className="flex gap-3">
          <Button size="lg" className="h-14 px-10 rounded-full bg-black text-white font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 text-xs uppercase tracking-widest">Post a Drop</Button>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-12">
        {/* Simple Filters */}
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Environment</h3>
            <div className="space-y-4">
              {["Hypergrowth", "Stealth", "Enterprise"].map(t => (
                <div key={t} className="flex items-center gap-3 group cursor-pointer">
                  <div className="h-4 w-4 rounded border-2 border-zinc-200 group-hover:border-black transition-all flex items-center justify-center">
                    <div className="h-2 w-2 bg-black scale-0 group-hover:scale-100 transition-all rounded-[2px]" />
                  </div>
                  <span className="text-sm font-bold text-zinc-500 group-hover:text-black transition-colors italic">{t}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="creative-gradient rounded-[2.5rem] p-8 text-white shadow-lg">
            <h4 className="font-black text-lg italic mb-2">PRO MODE</h4>
            <p className="text-[10px] font-bold opacity-80 leading-relaxed mb-4">Auto-forward your Proof to 10+ founders daily.</p>
            <Button size="sm" className="w-full bg-white text-black font-black text-[9px] uppercase tracking-widest rounded-full h-8 hover:bg-zinc-100">Unlock</Button>
          </div>
        </div>

        {/* Listings */}
        <div className="md:col-span-9 space-y-6">
          <div className="relative mb-12">
            <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-300" />
            <Input className="h-14 pl-14 bg-zinc-50 border-zinc-100 text-lg font-black rounded-full focus:bg-white transition-all shadow-sm ring-1 ring-zinc-950/5 placeholder:text-zinc-300" placeholder="Search roles or vibes..." />
          </div>

          <div className="space-y-6">
            {jobs.map(job => (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-sm ring-1 ring-zinc-950/5 hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex gap-6 items-center">
                    <div className="h-16 w-16 rounded-2xl bg-zinc-50 border-white border flex items-center justify-center shadow-lg ring-1 ring-zinc-100 overflow-hidden shrink-0 group-hover:rotate-6 transition-transform">
                      <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                         <h3 className="text-2xl font-black tracking-tighter italic group-hover:text-purple-600 transition-colors uppercase">{job.title}</h3>
                         <Badge className="bg-emerald-50 text-emerald-600 border-none font-black text-[8px] px-2 py-0.5 uppercase tracking-widest rounded-full">{job.vibe} Match</Badge>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-black uppercase tracking-widest flex items-center gap-2">
                        {job.company} <span className="h-1 w-1 rounded-full bg-zinc-200" /> {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="hidden md:flex flex-col items-end text-[9px] font-black text-zinc-400 uppercase tracking-widest mr-4">
                      <span>{job.salary}</span>
                      <span className="opacity-50">{job.posted}</span>
                    </div>
                    <Button 
                      onClick={(e) => { e.stopPropagation(); handleApply(job.id); }}
                      className={`h-12 px-8 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-md ${appliedIds.includes(job.id) ? 'bg-emerald-500 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}
                    >
                      {appliedIds.includes(job.id) ? (
                        <span className="flex items-center gap-2 animate-in zoom-in duration-300">
                          <CheckCircle2 className="h-4 w-4" /> Applied
                        </span>
                      ) : "Easy Apply"}
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-[8px] font-black text-zinc-400 border border-zinc-100 px-3 py-1 rounded-full uppercase tracking-widest group-hover:border-purple-200 group-hover:text-purple-500 transition-colors">#{skill}</span>
                  ))}
                  <div className="ml-auto flex items-center gap-2 text-zinc-300 group-hover:text-orange-500 transition-all font-black text-[8px] uppercase tracking-widest">
                    <Briefcase className="h-3 w-3" /> Proof req: High
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

