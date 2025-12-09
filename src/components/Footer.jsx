import { motion } from 'framer-motion';

/**
 * Footer Component
 * Contains credits, share button, print button, and audio toggle
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const handleShare = () => {
    const tweetText = encodeURIComponent(
      "🎉 Happy Birthday Shweta! Wishing you an amazing day filled with joy and love! 🎂✨"
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank', 'width=550,height=420');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 mt-16 no-print">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-coral-400 to-pink-400 mx-auto mb-8 rounded-full"></div>

        {/* Share Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="glass-effect px-6 py-3 rounded-full font-inter font-semibold text-coral-600 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            aria-label="Share on Twitter"
          >
            <span>🐦</span>
            <span>Share on Twitter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="glass-effect px-6 py-3 rounded-full font-inter font-semibold text-coral-600 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            aria-label="Print greeting card"
          >
            <span>🖨️</span>
            <span>Print Card</span>
          </motion.button>
        </div>

        {/* Credits */}
        <div className="space-y-2 text-gray-700 font-inter">
          <p className="text-lg">
            Made with 💕 for <span className="font-poppins font-bold gradient-text">Shweta</span>
          </p>
          <p className="text-sm">
            Birthday: December 9 🎂
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} • A Special Birthday Celebration
          </p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-8 text-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🌸 ✨ 🌸
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
