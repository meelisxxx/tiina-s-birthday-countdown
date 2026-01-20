import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationButton = () => {
  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/search/Kiili+Padel,+Estonia',
      '_blank',
      'noopener,noreferrer'
    );
  };
  
  return (
    <Button
      onClick={handleClick}
      className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-6 text-base md:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <MapPin className="w-5 h-5 mr-2 inline-block" />
      Ava asukoht Google Mapsis
    </Button>
  );
};

export default LocationButton;
