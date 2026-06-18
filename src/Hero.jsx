import React from 'react';
import { motion } from 'framer-motion';
import TerminalMonitor from './TerminalMonitor';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="pre-title">&lt; Welcome to My Portfolio /&gt;</p>
        
        <h1 className="glitch-text">Sahil Kumar</h1>
        
        {/* Real-time Code Streaming Monitor Panel */}
        <TerminalMonitor />
        
       <p className="tagline glowing-tagline">
  <span>Software Developer | Open Source Enthusiast</span>
  <span className="cursor">|</span>
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;