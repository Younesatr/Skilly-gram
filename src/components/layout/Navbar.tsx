import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, Users, Briefcase, Sparkles, LogOut, User, Bell, Search, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/80 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl creative-gradient p-0.5 shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-500">
             <div className="h-full w-full rounded-xl bg-white flex items-center justify-center font-black italic text-base tracking-tighter">S</div>
          </div>
          <span className="hidden text-xl font-black tracking-tighter sm:block italic lowercase">skilligram</span>
        </Link>

        {/* Global Nav */}
        <div className="flex items-center gap-1">
          <NavButton to="/dashboard" icon={LayoutDashboard} label="Home" />
          <NavButton to="/feed" icon={MessageSquare} label="Proof" />
          <NavButton to="/communities" icon={Users} label="Tribes" />
          <NavButton to="/jobs" icon={Briefcase} label="Drops" />
          <NavButton to="/ai-assistant" icon={Sparkles} label="Think" primary />

          <div className="mx-3 h-6 w-[1px] bg-zinc-200/50" />

          {/* User Menu */}
          {user && (
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="relative h-10 w-10 rounded-full p-0 flex items-center justify-center hover:scale-105 transition-all border-none outline-none ring-0">
                    <Avatar className="h-10 w-10 border border-white shadow-sm">
                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || ""} />
                      <AvatarFallback className="bg-zinc-50 font-bold text-xs">{user.displayName?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white/90 backdrop-blur-3xl border-zinc-100 text-zinc-950 shadow-2xl rounded-[1.5rem] p-3 mt-4" align="end">
                  <div className="px-1.5 py-4 mb-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-base font-black tracking-tighter leading-none">{user.displayName}</p>
                      <p className="text-xs font-bold text-zinc-400 tracking-wider mt-1">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-zinc-100" />
                  <DropdownMenuItem className="rounded-2xl cursor-pointer p-4 font-bold text-zinc-600 hover:text-black">
                    <Link to={`/profile/${user.uid}`} className="flex items-center w-full">
                      <User className="mr-3 h-5 w-5" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="rounded-2xl cursor-pointer p-4 font-bold text-rose-500 hover:text-rose-600 hover:bg-rose-50">
                    <LogOut className="mr-3 h-5 w-5" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavButton({ to, icon: Icon, label, primary = false }: { to: string; icon: any; label: string; primary?: boolean }) {
  return (
    <Button 
      variant="ghost" 
      asChild
      className={`flex items-center gap-2 h-10 transition-all sm:px-3 px-2 rounded-full font-bold text-[10px] uppercase tracking-[0.1em] ${primary ? "bg-black text-white hover:bg-zinc-800 shadow-lg shadow-black/10" : "text-zinc-500 hover:text-black hover:bg-zinc-100"}`}
    >
      <Link to={to}>
        <Icon className={`h-4 w-4 ${primary ? "text-white" : ""}`} />
        <span className="hidden xl:inline">{label}</span>
      </Link>
    </Button>
  );
}

