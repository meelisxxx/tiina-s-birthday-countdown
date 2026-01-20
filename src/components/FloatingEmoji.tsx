interface FloatingEmojiProps {
  emoji: string;
  className?: string;
  delay?: string;
}

const FloatingEmoji = ({ emoji, className = '', delay = '0s' }: FloatingEmojiProps) => {
  return (
    <span 
      className={`absolute text-2xl md:text-4xl animate-confetti select-none pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
    >
      {emoji}
    </span>
  );
};

export default FloatingEmoji;
