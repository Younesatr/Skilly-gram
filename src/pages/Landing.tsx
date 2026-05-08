import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Sparkles, Users, Zap, Briefcase, Twitter, Github, ChevronRight } from 'lucide-react';

export default function Landing() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-hidden tracking-tight text-zinc-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] creative-gradient rounded-full blur-[120px] opacity-10 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-100 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="flex-1 relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-8 mx-auto max-w-7xl relative z-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-[1rem] creative-gradient flex items-center justify-center text-white shadow-2xl shadow-purple-500/20 group cursor-pointer hover:rotate-12 transition-transform">
               <Zap className="h-6 w-6 fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic uppercase">SKILLIGRAM</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hidden text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors md:block">MANIFESTO</a>
            <a href="#" className="hidden text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors md:block">CIRCLES</a>
            <Button onClick={handleLogin} className="rounded-full bg-black text-white px-10 h-14 font-black shadow-2xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-sm">
              SIGN IN
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-8 py-20 lg:py-40 flex flex-col lg:flex-row items-center gap-20 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50/50 backdrop-blur-md px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 mb-10 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-ping" />
              BUILDER REVOLUTION 2026
            </div>
            <h1 className="mb-8 text-5xl font-black leading-[0.9] tracking-tighter italic sm:text-6xl lg:text-7xl uppercase">
              Show <span className="creative-gradient bg-clip-text text-transparent">Proof.</span><br/>
              <span className="text-zinc-300">Kill the CV.</span>
            </h1>
            <p className="mb-12 max-w-xl text-lg text-zinc-500 sm:text-xl font-bold leading-tight italic">
              The social layer for technical output. Curate your visual portfolio, join expert tribes, and find your next vibe.
            </p>
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <Button onClick={handleLogin} size="lg" className="h-16 rounded-[1.5rem] px-10 text-xl bg-black text-white hover:scale-105 active:scale-95 transition-all font-black shadow-xl shadow-purple-500/30">
                START BUILDING <ChevronRight className="ml-3 h-6 w-6" />
              </Button>
              <Button onClick={handleLogin} size="lg" variant="ghost" className="h-16 rounded-[1.5rem] px-8 text-base text-zinc-400 hover:text-black transition-all font-black uppercase tracking-widest">
                Explore Feed
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
            className="flex-1 relative w-full aspect-square max-w-2xl mt-12 lg:mt-0"
          >
            <div className="absolute inset-x-[-20%] inset-y-[-20%] creative-gradient rounded-full opacity-10 blur-[100px] animate-pulse" />
            <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl ring-1 ring-zinc-100 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
                alt="Creative Display"
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12 p-10 glass-card rounded-[3rem] border-white/50 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-3xl creative-gradient flex items-center justify-center font-black text-white text-2xl shadow-xl italic">AI</div>
                  <div>
                    <p className="font-black text-2xl tracking-tighter uppercase italic leading-none mb-1">PROMPT ALCHEMY</p>
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Visual Proof • Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-8 py-20 max-w-7xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase mb-4">THE PROOF LAYER</h2>
             <p className="text-zinc-400 font-bold text-lg">Curated output from the top 1% of creators.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { t: 'GENERATIVE UI', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400' },
               { t: 'CRYPTO VIZ', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400' },
               { t: 'RUST SYSTEMS', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
               { t: 'MOTION SYSTEMS', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400' }
             ].map((proof, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-zinc-100 shadow-xl shadow-zinc-950/5"
               >
                 <img src={proof.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent p-8 flex flex-col justify-end">
                    <p className="text-white font-black tracking-tighter italic uppercase text-lg group-hover:translate-x-2 transition-transform">{proof.t}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </section>

        {/* Features / Bento Grid */}
        <section className="container mx-auto px-8 py-32 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <BentoCard 
              className="md:col-span-2 bg-zinc-50 border-none shadow-none"
              title="VISUAL BRAIN" 
              description="Our AI agents map your output and build your talent graph automatically."
              icon={Zap}
            />
            <BentoCard 
              className="md:col-span-1 creative-gradient text-white border-none shadow-2xl shadow-purple-500/20"
              title="TRIBE MODE" 
              description="Join circles that match your vibe and scale together."
              icon={Users}
              dark
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-50 bg-white py-20 px-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-12 md:flex-row max-w-7xl">
          <div className="flex flex-col gap-6 md:items-start items-center">
            <div className="flex items-center gap-3">
               <div className="h-8 w-8 rounded-xl bg-black flex items-center justify-center"><Zap className="h-4 w-4 text-white fill-white" /></div>
               <p className="text-2xl font-black italic uppercase tracking-tighter">Skilligram</p>
            </div>
            <p className="text-sm font-bold text-zinc-400 text-center md:text-left">Building the internet of technical proof.<br/>San Francisco, CA 2026.</p>
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
               <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">PRODUCT</p>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">Manifesto</a>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">Vibe Feed</a>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">Tribe Hub</a>
            </div>
            <div className="flex flex-col gap-4">
               <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">SOCIAL</p>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">X (Twitter)</a>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">Discord</a>
               <a href="#" className="font-bold hover:text-purple-600 transition-colors">Readcv</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-10 border-t border-zinc-50 flex justify-between items-center max-w-7xl">
           <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">© 2026 Skilligram Inc.</p>
           <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-zinc-50 flex items-center justify-center cursor-pointer hover:bg-zinc-100 transition-colors"><Twitter className="h-4 w-4" /></div>
              <div className="h-8 w-8 rounded-full bg-zinc-50 flex items-center justify-center cursor-pointer hover:bg-zinc-100 transition-colors"><Github className="h-4 w-4" /></div>
           </div>
        </div>
      </footer>
    </div>
  );
}

function BentoCard({ title, description, icon: Icon, className = "", dark = false }: { title: string; description: string; icon: any; className?: string; dark?: boolean }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-[3.5rem] p-12 transition-all ${className}`}
    >
      <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[1.5rem] shadow-xl ${dark ? "bg-white/10" : "bg-white"}`}>
        <Icon className={`h-8 w-8 ${dark ? "text-white" : "text-black"}`} />
      </div>
      <h3 className={`mb-4 text-2xl font-black tracking-tighter italic uppercase ${dark ? "text-white" : "text-black"}`}>{title}</h3>
      <p className={`text-lg font-bold leading-relaxed italic ${dark ? "text-white/70" : "text-zinc-500"}`}>{description}</p>
    </motion.div>
  );
}

