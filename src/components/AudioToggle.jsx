import { motion } from 'framer-motion';
import { useRef } from 'react';

function AudioToggle({ audioOn, setAudioOn }) {
  const audioRef = useRef(null);

  return (
    <div>
      {audioOn && (
        <iframe
          ref={audioRef}
          width="0"
          height="0"
          src="https://www.youtube.com/embed/LV_wiOhO40Q?autoplay=1&loop=1&playlist=LV_wiOhO40Q&controls=0"
          allow="autoplay"
          style={{ display: 'none' }}
        />
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setAudioOn(!audioOn)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-2xl ${
          audioOn ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'bg-white text-gray-700'
        }`}
      >
        <span className="text-2xl">
          {audioOn ? '🔊' : '🔇'}
        </span>
      </motion.button>
    </div>
  );
}

export default AudioToggle;