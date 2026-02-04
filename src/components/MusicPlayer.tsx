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
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-cream rounded-lg p-8 md:p-12 text-center max-w-md mx-4 shadow-elegant"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-6"
              >
                <Music className="w-16 h-16 text-dustyRose mx-auto" />
              </motion.div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                Kisah Cinta Kita
              </h3>
              
              <p className="font-sans text-charcoal-light mb-8">
                Untuk pengalaman terbaik, nikmati dengan musik romantis
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handlePlay}
                  className="px-8 py-3 bg-dustyRose text-cream font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-dustyRose/90 transition-colors"
                >
                  Putar Musik
                </button>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="px-8 py-3 bg-transparent border border-charcoal-light text-charcoal font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-charcoal/5 transition-colors"
                >
                  Tanpa Musik
                </button>
              </div>
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
