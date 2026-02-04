import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Romantic piano music - royalty free
  const musicUrl = "https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3?filename=please-calm-my-mind-125566.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      }).catch(console.error);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={musicUrl} 
        preload="auto"
        onCanPlayThrough={() => setIsLoaded(true)}
      />

      {/* Initial Play Prompt */}
      <AnimatePresence>
        {showPrompt && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-b from-cream to-cream-dark rounded-2xl p-10 md:p-14 text-center max-w-lg mx-4 shadow-elegant relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dustyRose via-gold to-dustyRose" />
              
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="mb-6"
              >
                <span className="text-6xl">💕</span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl md:text-4xl text-charcoal mb-3"
              >
                Idin & Nurull
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-lg text-dustyRose italic mb-2"
              >
                mengundangmu melihat kisah cinta kami
              </motion.p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-24 h-px mx-auto my-6"
                style={{ background: "linear-gradient(90deg, transparent, hsl(38 45% 70%), transparent)" }}
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-sans text-charcoal-light text-sm mb-8"
              >
                Scroll untuk melihat perjalanan kami ✨
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlay}
                className="w-full px-10 py-4 bg-gradient-to-r from-dustyRose to-dustyRose-light text-cream font-serif text-lg tracking-wide rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Music className="w-5 h-5" />
                Mulai Perjalanan
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setShowPrompt(false)}
                className="mt-4 text-charcoal-light/60 font-sans text-xs hover:text-charcoal transition-colors"
              >
                atau lanjut tanpa musik →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Toggle Button */}
      {!showPrompt && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-cream shadow-elegant flex items-center justify-center hover:scale-110 transition-transform border border-dustyRose/20"
          aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: isPlaying ? Infinity : 0, duration: 3, ease: "linear" }}
          >
            {isPlaying ? (
              <Volume2 className="w-6 h-6 text-dustyRose" />
            ) : (
              <VolumeX className="w-6 h-6 text-charcoal-light" />
            )}
          </motion.div>
          
          {/* Sound wave animation */}
          {isPlaying && (
            <div className="absolute -inset-1">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dustyRose/30"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
              />
            </div>
          )}
        </motion.button>
      )}
    </>
  );
};

export default MusicPlayer;
