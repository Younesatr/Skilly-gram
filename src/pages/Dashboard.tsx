import { motion } from 'motion/react';
import { useProfile } from '@/hooks/useProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, Users, Target, CheckCircle2, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Dashboard() {
  const { profile, loading } = useProfile();

  if (loading) return (
    <div className="flex items-center justify-center p-20 min-h-screen">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    </div>
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 bg-white tracking-tight">
      {/* Header section with refined density */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-2">
        <div>
          <h1 className="text-2xl font-black tracking-tighter italic uppercase">GM, {profile.displayName?.split(' ')[0]}! 🤘</h1>
          <p className="text-zinc-500 mt-1 text-sm font-bold italic">Vibe check passed. Your profile is in the top 3% this week.</p>
        </div>
        <div className="flex gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-50 border border-zinc-100 rounded-[2rem] px-6 py-4 shadow-sm cursor-pointer group hover:bg-black transition-colors"
          >
            <div className="text-[10px] text-zinc-400 group-hover:text-zinc-500 uppercase font-black tracking-widest mb-1">STREAK</div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-orange-500 fill-orange-500" />
              <span className="text-xl font-black italic group-hover:text-white">5 DAYS</span>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-50 border border-zinc-100 rounded-[2rem] px-6 py-4 shadow-sm cursor-pointer group hover:bg-black transition-colors"
          >
            <div className="text-[10px] text-zinc-400 group-hover:text-zinc-500 uppercase font-black tracking-widest mb-1">XP LEVEL</div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-xl font-black italic group-hover:text-white">LVL {profile.level || 1}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-12">
        {/* Left Column: Vibe Meter & Stats */}
        <div className="md:col-span-8 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { label: 'VIEWS', value: '4.2k', color: 'bg-rose-50 text-rose-600', icon: Target },
               { label: 'HYPE', value: '890', color: 'bg-purple-50 text-purple-600', icon: Sparkles },
               { label: 'REACH', value: '15.4k', color: 'bg-blue-50 text-blue-600', icon: TrendingUp },
               { label: 'VIBE MATCH', value: '98%', color: 'bg-emerald-50 text-emerald-600', icon: Zap }
             ].map((s, i) => (
               <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[2rem] p-6 ${s.color} border border-white shadow-sm ring-1 ring-black/5 group cursor-pointer hover:scale-105 transition-all`}
               >
                 <div className="flex justify-between items-start mb-3">
                   <div className="text-[9px] uppercase font-black tracking-widest opacity-60 leading-none">{s.label}</div>
                   <s.icon className="h-3 w-3 opacity-60" />
                 </div>
                 <div className="text-xl font-black tracking-tighter leading-none">{s.value}</div>
               </motion.div>
             ))}
          </div>

          {/* Vibe Meter / Talent Graph Section */}
          <div className="bg-zinc-50 border border-zinc-100 rounded-[3rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 creative-gradient opacity-5 blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 relative z-10">
              <div>
                <h2 className="text-2xl font-black tracking-tighter italic uppercase mb-1">Talent Graph</h2>
                <p className="text-zinc-500 font-bold text-sm italic">You're currently outperforming 97% of designers in "Spatial Interaction".</p>
              </div>
              <Button size="sm" className="rounded-full bg-black text-white px-6 font-black text-[10px] uppercase tracking-widest h-10 shadow-lg shadow-black/10">Build Proof →</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">Technical Vibe</h4>
                <div className="space-y-6">
                  {[{ n: "Gen UI", v: 92, c: 'bg-purple-500' }, { n: "Three.js", v: 75, c: 'bg-blue-500' }, { n: "React", v: 88, c: 'bg-emerald-500' }].map(skill => (
                    <div key={skill.n}>
                      <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-tight italic">
                        <span>{skill.n}</span>
                        <span className="text-zinc-400">{skill.v}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-200/30 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${skill.v}%` }} transition={{ duration: 1, delay: 0.5 }} className={`h-full ${skill.c} rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="h-44 w-44 rounded-full border-[10px] border-zinc-100 flex items-center justify-center relative group-hover:rotate-12 transition-transform duration-700">
                   <div className="h-full w-full rounded-full border-[10px] border-purple-500 border-t-transparent animate-spin-slow absolute top-[-10px] right-[-10px] left-[-10px] bottom-[-10px]" />
                   <div className="text-center">
                     <div className="text-2xl font-black italic mb-1">98</div>
                     <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">MATCH</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Trending & Quick Fix */}
        <div className="md:col-span-4 space-y-10">
           {/* Drop Card */}
           <div className="creative-gradient p-10 rounded-[3rem] text-white shadow-2xl shadow-purple-500/20 relative overflow-hidden group cursor-pointer hover:shadow-purple-500/30 transition-all">
              <div className="relative z-10">
                <h2 className="text-2xl font-black tracking-tighter mb-4 italic leading-none uppercase">Chief Vibe Officer</h2>
                <p className="text-white/80 font-bold mb-8 leading-relaxed text-sm">Linear is hunting for a designer who understands "The Vibe". Skip the HR line.</p>
                <Button className="w-full bg-white text-black hover:bg-zinc-100 h-14 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">Apply with Proof</Button>
              </div>
              <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Users className="h-40 w-40" />
              </div>
           </div>

           {/* Tribes Card */}
           <div className="bg-zinc-950 p-10 rounded-[3rem] text-white shadow-2xl shadow-black/10">
              <h3 className="text-xl font-black tracking-tighter mb-8 italic flex items-center gap-3"><TrendingUp className="h-4 w-4 text-emerald-400" /> HOT TRIBES</h3>
              <div className="space-y-6">
                {['Creative Devs', 'AI Alchemists', 'Rust Ninjas'].map((tribe, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black italic transition-all group-hover:rotate-6 group-hover:scale-110">
                        {tribe.charAt(0)}
                      </div>
                      <span className="font-bold text-sm text-zinc-400 group-hover:text-white transition-colors">{tribe}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
