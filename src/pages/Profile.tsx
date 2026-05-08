import { useProfile } from '@/hooks/useProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Link as LinkIcon, Github, Linkedin, Briefcase, Award, FolderKanban, Plus, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading || !profile) return (
    <div className="flex items-center justify-center min-h-screen">
       <div className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white tracking-tight pt-2 pb-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Profile Header - Instagram Style */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 px-4">
          <div className="relative shrink-0">
            <div className="h-28 w-28 md:h-36 md:w-36 rounded-full creative-gradient p-1 shadow-xl relative z-10 group cursor-pointer lg:hover:rotate-3 transition-transform duration-700">
               <Avatar className="h-full w-full border-4 border-white ring-1 ring-zinc-50 grayscale hover:grayscale-0 transition-all">
                 <AvatarImage src={profile.photoURL} className="object-cover" />
                 <AvatarFallback className="text-2xl bg-zinc-50 font-black italic">{profile.displayName?.charAt(0)}</AvatarFallback>
               </Avatar>
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-lg bg-white shadow-lg flex items-center justify-center z-20 border border-zinc-50 rotate-12">
               <Zap className="h-3 w-3 text-orange-500 fill-orange-500" />
            </div>
          </div>
          
          <div className="flex-1 space-y-3 text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-center gap-2 mx-auto md:mx-0">
                <h1 className="text-2xl font-black tracking-tighter italic uppercase lowercase">{profile.username || "builder_mode"}</h1>
                <Sparkles className="h-3 w-3 text-purple-500 fill-purple-500" />
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Button className="rounded-full bg-black text-white px-4 h-7 font-black text-[8px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Edit Vibe</Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full border border-zinc-50 text-zinc-400 hover:text-black"><Plus className="h-3 w-3" /></Button>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <div className="flex items-baseline gap-1"><span className="text-base font-black italic">45</span><span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">RECEIPTS</span></div>
              <div className="flex items-baseline gap-1"><span className="text-base font-black italic">1.2k</span><span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">HYPE</span></div>
              <div className="flex items-baseline gap-1"><span className="text-base font-black italic">890</span><span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">CIRCLE</span></div>
            </div>

            <div className="space-y-0.5">
              <p className="font-black text-sm text-black tracking-tighter uppercase italic">{profile.displayName}</p>
              <p className="text-zinc-500 font-bold max-w-sm leading-tight text-[11px] italic">
                {profile.bio || "Optimizing for pixel-perfect vibes. ⚡️ Building the future of social creative layers."}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="text-[9px] font-black text-purple-600 hover:underline uppercase tracking-tight">proof.folio/{profile.username}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Story Highlights - The "Vibe Reels" */}
        <div className="flex gap-4 overflow-x-auto pb-10 no-scrollbar mb-6 px-4 justify-center md:justify-start">
           {[ 
             {l: 'LABS', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200'}, 
             {l: 'PROCESS', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=200'}, 
             {l: 'SETUP', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200'}, 
             {l: 'WINS', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=200'}
           ].map((h, i) => (
             <motion.div 
               key={i} 
               whileHover={{ scale: 1.05 }}
               className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
             >
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full p-[1px] bg-zinc-50 border border-zinc-100 group-hover:border-purple-500 transition-all duration-500">
                  <div className="h-full w-full rounded-full bg-white overflow-hidden border-2 border-white">
                    <img src={h.img} alt={h.l} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                </div>
                <span className="text-[6px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-black">{h.l}</span>
             </motion.div>
           ))}
        </div>

        <Tabs defaultValue="proof" className="w-full">
          <TabsList className="w-full justify-center bg-transparent border-t border-zinc-100 rounded-none h-12 p-0 gap-10">
            <TabsTrigger value="proof" className="bg-transparent rounded-none border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-0 h-full font-black text-[8px] uppercase tracking-[0.2em] text-zinc-400 data-[state=active]:text-black transition-all gap-1">
              <FolderKanban className="h-2.5 w-2.5" /> PROOF
            </TabsTrigger>
            <TabsTrigger value="journey" className="bg-transparent rounded-none border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-0 h-full font-black text-[8px] uppercase tracking-[0.2em] text-zinc-400 data-[state=active]:text-black transition-all gap-1">
              <Award className="h-2.5 w-2.5" /> JOURNEY
            </TabsTrigger>
            <TabsTrigger value="skills" className="bg-transparent rounded-none border-t-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent px-0 h-full font-black text-[8px] uppercase tracking-[0.2em] text-zinc-400 data-[state=active]:text-black transition-all gap-1">
              <Zap className="h-2.5 w-2.5" /> STACK
            </TabsTrigger>
          </TabsList>

          <TabsContent value="proof" className="mt-1">
            <div className="grid grid-cols-3 gap-0.5 md:gap-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 0.95 }}
                className="aspect-square relative overflow-hidden bg-zinc-950 cursor-pointer group rounded-sm md:rounded-lg"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Zap className="h-8 w-8 text-orange-400 mb-2 animate-pulse" />
                  <p className="text-[10px] md:text-sm font-black text-white italic uppercase tracking-tighter leading-tight">
                    NEZ GAIND <br/> <span className="text-zinc-500 text-[8px] md:text-[10px]">Just leveled up. I'm literally the best at this, don't even @ me. Just purely vibes and skill, nez gaind fr. 🤘</span>
                  </p>
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white font-black text-[8px] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                   <Sparkles className="h-2 w-2" /> NEW
                </div>
              </motion.div>

              {[
                'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1642733906316-09556108170c?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600'
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ opacity: 0.9 }}
                  className="aspect-square relative overflow-hidden bg-zinc-50 cursor-pointer group"
                >
                  <img src={img} alt="Proof" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="flex gap-4 text-white font-black text-[10px]">
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3 fill-white" /> {124 + i}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="journey" className="mt-12 max-w-xl mx-auto space-y-12">
            {[
              { title: 'AI Architect', company: 'Linear', date: '2024 - Now', desc: 'Optimizing for vibes and pixels.' },
              { title: 'Motion Designer', company: 'Stripe', date: '2022 - 2023', desc: 'Shaders that move the world.' }
            ].map((exp, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="h-10 w-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Briefcase className="h-4 w-4 text-zinc-400 group-hover:text-black" />
                </div>
                <div className="pb-8 border-b border-zinc-50 w-full">
                  <h4 className="text-lg font-black italic uppercase italic">{exp.title}</h4>
                  <div className="text-zinc-500 font-bold text-[10px] mb-2 uppercase tracking-widest">{exp.company} • {exp.date}</div>
                  <p className="text-zinc-400 text-[11px] font-bold leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="mt-12 max-w-xl mx-auto">
             <div className="grid grid-cols-2 gap-4">
                {['Shader Art', 'React', 'Three.js', 'PyTorch', 'Rust', 'Figma'].map((skill, i) => (
                  <div key={i} className="p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 flex flex-col justify-between h-32 group cursor-pointer hover:bg-black transition-colors">
                    <div className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] group-hover:text-zinc-500">Mastery</div>
                    <div className="flex justify-between items-end">
                      <div className="text-xl font-black italic uppercase group-hover:text-white transition-colors">{skill}</div>
                      <Zap className="h-4 w-4 text-orange-400 group-hover:animate-bounce" />
                    </div>
                  </div>
                ))}
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
