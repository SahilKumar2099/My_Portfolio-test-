import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const degrees = [
  { title: "Master In Computer Applications", institution: "Anna University", year: 2027 },
  { title: "Bachelor In Computer Applications", institution: "IGNOU", year: 2024 },
  { title: "Higher Secondary School (12th)", institution: "CBSE", year: 2021 }
];

// Rotating paragraphs focusing on AI-ML & Aspirations
const aiParagraphs = [
  "Driven by the potential of Artificial Intelligence, I focus on building intelligent systems that bridge complex data structures with scalable neural networks. My goal is to craft predictive models that optimize real-world software performance.",
  "Fascinated by Machine Learning architectures, I treat code as a canvas for algorithmic intelligence. I aspire to engineer lightweight, production-ready deep learning pipelines that make automated decision-making faster and more accessible.",
  "As an aspiring AI developer, I am bridging the gap between standard web engineering and cognitive computation. I'm exploring NLP and computer vision workflows to integrate native smart capabilities directly into microservice ecosystems."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

function About() {
  const [paraIndex, setParaIndex] = useState(0);

  // Interval hook to loop through paragraphs over time
  useEffect(() => {
    const textRotator = setInterval(() => {
      setParaIndex((prevIndex) => (prevIndex + 1) % aiParagraphs.length);
    }, 6000); // Swaps paragraphs every 6 seconds
    return () => clearInterval(textRotator);
  }, []);

  return (
    <section className="about">
      <div className="about-grid">
        
        {/* Left Side: Education Layout */}
        <motion.div 
          className="education-column"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Education</h2>
          {degrees.map((d, i) => (
            <motion.div 
              key={i} 
              className="degree-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 10 }}
            >
              <h3>{d.title}</h3>
              <p>{d.institution} — {d.year}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side: Dynamic AI/ML About Me Paragraph */}
        <div className="about-me-column">
          <h2>About Me</h2>
          <div className="terminal-text-box">
            <span className="terminal-header">// AI-ML Core Aspirations</span>
            <div className="paragraph-container">
              <AnimatePresence mode="wait">
                <motion.p
                  key={paraIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="rotating-paragraph"
                >
                  {aiParagraphs[paraIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="terminal-footer">
              <span className="pulse-dot"></span> Status: Compiling thoughts...
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;