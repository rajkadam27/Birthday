import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

/**
 * AudioToggle Component
 * Controls background music playback with animated speaker icon
 * @param {boolean} audioOn - Whether audio is playing
 * @param {Function} setAudioOn - Function to toggle audio state
 */
function AudioToggle({ audioOn, setAudioOn }) {
  const audioRef = useRef(null);

  // Base64 encoded short happy birthday tune (placeholder - very short beep)
  // TODO: Replace with actual birthday music file
  const audioData = 'data:audio/wav;base64,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';

  useEffect(() => {
    if (audioRef.current) {
      if (audioOn) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioOn]);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={audioData} type="audio/wav" />
      </audio>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setAudioOn(!audioOn)}
        className={`fab ${audioOn ? 'bg-accent' : 'bg-gray-400'} flex items-center justify-center`}
        aria-label={audioOn ? 'Mute music' : 'Play music'}
      >
        <motion.span
          className="material-icons text-xl"
          animate={{
            scale: audioOn ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: audioOn ? Infinity : 0,
          }}
        >
          {audioOn ? 'volume_up' : 'volume_off'}
        </motion.span>
      </motion.button>
    </div>
  );
}

export default AudioToggle;
