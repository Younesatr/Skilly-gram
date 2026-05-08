import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sparkles, Send, Bot, User, Zap, Brain, Rocket, MessageSquare, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: "Yo! I'm your Skilligram AI. What's the move today? I can help you map out your next big skill jump or critique your latest project. 🚀", time: '10:30 AM' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { 
      id: Date.now(), 
      role: 'user', 
      content: input, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages([...messages, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: "That sounds like a W. Based on current market trends, I'd say focusing on WebXR or Generative UI is the play. Want me to build a 4-week roadmap for you? 💎", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16 bg-white min-h-[calc(100vh-4rem)] tracking-tight">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Chat Sidebar / Tools */}
        <div className="lg:col-span-4 space-y-8">
          <div className="creative-gradient p-10 rounded-[3rem] text-white shadow-2xl shadow-purple-500/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h1 className="text-4xl font-black tracking-tighter mb-4 italic leading-none">AI STRATEGIST</h1>
              <p className="text-white/80 font-bold leading-relaxed mb-8">Your personal career architect. Powered by live market pulses and your visual proof.</p>
              <div className="flex gap-2">
                <Badge className="bg-white/20 border-none text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">Live v3.2</Badge>
                <Badge className="bg-white/20 border-none text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">Turbo Mode</Badge>
              </div>
            </div>
            <Zap className="absolute -bottom-10 -right-10 h-48 w-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest px-6">Direct Commands</h3>
            {[
              { label: 'Generate Roadmap', icon: MapPin, color: 'text-rose-600 bg-rose-50', desc: '4-week skill sprint' },
              { label: 'Project Critique', icon: Brain, color: 'text-purple-600 bg-purple-50', desc: 'Get visual feedback' },
              { label: 'Market Pulse', icon: Zap, color: 'text-blue-600 bg-blue-50', desc: 'Real-time trend audit' },
              { label: 'Network Strategist', icon: MessageSquare, color: 'text-emerald-600 bg-emerald-50', desc: 'Who to connect with' }
            ].map((tool, i) => (
              <Button 
                key={i} 
                variant="ghost" 
                className="w-full justify-start h-24 rounded-[2rem] group hover:bg-zinc-50 transition-all border border-transparent hover:border-zinc-100 p-6"
                onClick={() => setInput(tool.label)}
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mr-6 ${tool.color} border border-white shadow-sm ring-1 ring-black/5 shrink-0`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="font-black text-zinc-950 text-lg tracking-tighter">{tool.label}</div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{tool.desc}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-8 flex flex-col h-[750px] border border-zinc-100 rounded-[3.5rem] bg-zinc-50/20 shadow-sm ring-1 ring-zinc-950/5 relative overflow-hidden">
          {/* Chat Header */}
          <div className="p-8 border-b border-zinc-50 bg-white/70 backdrop-blur-2xl flex items-center justify-between z-10">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full creative-gradient p-0.5 shadow-xl shadow-purple-500/20">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-zinc-950">
                  <Bot className="h-7 w-7" />
                </div>
              </div>
              <div>
                <div className="font-black text-xl tracking-tighter">Skilligram Agent</div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Active & Dreaming</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-zinc-400 hover:bg-white hover:text-black shadow-sm"><Sparkles className="h-5 w-5" /></Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-zinc-400 hover:bg-white hover:text-black shadow-sm"><Rocket className="h-5 w-5" /></Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-10 space-y-8 no-scrollbar scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`h-12 w-12 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-white shadow-md ring-1 ring-black/5 ${msg.role === 'user' ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'}`}>
                      {msg.role === 'user' ? <User className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                    </div>
                    <div className="space-y-2">
                      <div className={`p-6 rounded-[2.5rem] text-lg font-bold leading-relaxed shadow-sm ring-1 ring-black/5 ${msg.role === 'user' ? 'bg-zinc-950 text-white rounded-tr-none' : 'bg-white text-zinc-800 rounded-tl-none'}`}>
                        {msg.content}
                      </div>
                      <div className={`text-[10px] font-black text-zinc-400 uppercase tracking-widest px-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                   <div className="bg-white p-6 rounded-full shadow-sm ring-1 ring-black/5 flex gap-1.5 items-center">
                      <span className="h-2 w-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" />
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-2">Dreaming...</span>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-10 bg-white/70 backdrop-blur-2xl border-t border-zinc-50 relative">
            <div className="relative group">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="What's the play? Shift your career..."
                className="h-20 pl-8 pr-24 bg-white border border-zinc-100 rounded-[2rem] text-xl shadow-2xl shadow-zinc-950/5 ring-0 focus-visible:ring-purple-500/10 font-bold transition-all placeholder:text-zinc-300"
              />
              <Button 
                onClick={handleSend}
                size="icon" 
                className="absolute right-3 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full creative-gradient text-white hover:scale-110 active:scale-95 transition-all shadow-xl shadow-purple-500/40"
              >
                <Send className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flex justify-center gap-8">
               {['Resume Hack', 'Portfolio Audit', 'Skill Gap', 'Salary Reveal'].map(tag => (
                 <button 
                  key={tag}
                  onClick={() => setInput(`I want a ${tag.toLowerCase()}...`)}
                  className="text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-purple-600 transition-colors"
                 >
                   {tag}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
