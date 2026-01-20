import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date('2026-01-31T16:00:00');
  
  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return null;
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (timeLeft === null) {
    return (
      <div className="text-center py-8 animate-bounce-subtle">
        <div className="text-5xl md:text-7xl mb-4">🎾🎉</div>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient">
          Pidu on alanud!
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Laske padel-pallid lendama! 🎈
        </p>
      </div>
    );
  }
  
  const timeBlocks = [
    { value: timeLeft.days, label: 'PÄEVA' },
    { value: timeLeft.hours, label: 'TUNDI' },
    { value: timeLeft.minutes, label: 'MINUTIT' },
    { value: timeLeft.seconds, label: 'SEKUNDIT' },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-countdown countdown-box-shadow animate-pulse-glow"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-countdown-number tabular-nums">
            {String(block.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm font-semibold text-muted-foreground tracking-wider mt-2">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
