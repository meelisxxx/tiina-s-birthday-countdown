import CountdownTimer from '@/components/CountdownTimer';
import LocationButton from '@/components/LocationButton';
import FloatingEmoji from '@/components/FloatingEmoji';
import { Calendar, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-celebration flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Floating decorative emojis */}
      <FloatingEmoji emoji="🎈" className="top-[10%] left-[5%]" delay="0s" />
      <FloatingEmoji emoji="🎉" className="top-[15%] right-[8%]" delay="0.5s" />
      <FloatingEmoji emoji="🎾" className="bottom-[20%] left-[10%]" delay="1s" />
      <FloatingEmoji emoji="🎁" className="bottom-[15%] right-[5%]" delay="1.5s" />
      <FloatingEmoji emoji="✨" className="top-[30%] left-[3%]" delay="0.3s" />
      <FloatingEmoji emoji="🎊" className="top-[25%] right-[3%]" delay="0.8s" />
      <FloatingEmoji emoji="🥳" className="bottom-[30%] right-[12%]" delay="1.2s" />
      
      {/* Main content card */}
      <div className="w-full max-w-2xl bg-card rounded-3xl p-6 md:p-10 card-glow relative z-10">
        
        {/* --- UUS LISATUD PILT --- */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/Tiina_pilt.png" 
            alt="Tiina sünnipäev" 
            className="rounded-2xl shadow-lg w-full max-h-[350px] object-cover border-4 border-white/50"
          />
        </div>
        {/* ------------------------ */}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mb-3 animate-bounce-subtle">
            Tiina sünnipäev! 🎂
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Loeme aega peoni Padel+ Klickis:
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="mb-10">
          <CountdownTimer />
        </div>
        
        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8 text-foreground/80">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">31.01.2026 kell 16:00</span>
          </div>
          <span className="hidden md:inline text-muted-foreground">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Padel+ Klick, Suur-Paala 19</span>
          </div>
        </div>
        
        {/* Location Button */}
        <div className="flex justify-center">
          <LocationButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
