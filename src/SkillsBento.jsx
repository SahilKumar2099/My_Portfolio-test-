import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaDatabase, FaServer, FaTerminal, FaGitAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

function SkillsBento() {
  return (
    <section className="skills-section">
      <h2>&lt; Core Tech Grid /&gt;</h2>
      
      <motion.div 
        className="bento-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Box 1: Large Core Frameworks (Dominant Box) */}
        <motion.div className="bento-card bento-large" variants={cardVariants} whileHover={{ y: -5 }}>
          <div className="bento-icon-header">
            <FaCode className="neon-icon" />
            <span className="bento-tag">Primary Stack</span>
          </div>
          <h3>Frontend Architecture</h3>
          <p>Building scalable, state-driven interfaces with React, TypeScript, and optimized ecosystem tooling.</p>
          <div className="mini-tags">
            <span>React</span><span>TypeScript</span><span>JavaScript</span><span>Next.js</span>
          </div>
        </motion.div>

        {/* Box 2: Medium AI-ML Focus */}
        <motion.div className="bento-card bento-medium accent-glow" variants={cardVariants} whileHover={{ y: -5 }}>
          <div className="bento-icon-header">
            <FaBrain className="blue-icon" />
            <span className="bento-tag tag-blue">Aspirations</span>
          </div>
          <h3>AI & Machine Learning</h3>
          <p>Training neural pipelines, tracking epochs, and optimizing algorithmic decision structures.</p>
          <div className="mini-tags">
            <span>TensorFlow</span><span>Python</span><span>Data Structures</span>
          </div>
        </motion.div>

        {/* Box 3: Small Backend Block */}
        <motion.div className="bento-card bento-small" variants={cardVariants} whileHover={{ y: -5 }}>
          <div className="bento-icon-header"><FaServer className="neon-icon" /></div>
          <h3>Backend & APIs</h3>
          <div className="mini-tags">
            <span>Node.js</span><span>Express</span><span>REST APIs</span>
          </div>
        </motion.div>

        {/* Box 4: Small Database Block */}
        <motion.div className="bento-card bento-small" variants={cardVariants} whileHover={{ y: -5 }}>
          <div className="bento-icon-header"><FaDatabase className="blue-icon" /></div>
          <h3>Databases</h3>
          <div className="mini-tags">
            <span>MongoDB</span><span>SQL</span>
          </div>
        </motion.div>

        {/* Box 5: Long Horizontal Developer Workflows */}
        <motion.div className="bento-card bento-wide" variants={cardVariants} whileHover={{ y: -5 }}>
          <div className="wide-content-split">
            <div>
              <h3>Environment & Version Control</h3>
              <p>Maintaining clean versioning trees and collaborative deployment pipelines.</p>
            </div>
            <div className="mini-tags alignment-right">
              <span><FaGitAlt /> Git</span>
              <span><FaTerminal /> Terminal</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default SkillsBento;