import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <h2>&lt; Connect /&gt;</h2>
      <div className="social-links">
        {[
          { href: "https://github.com/SahilKumar2099", icon: <FaGithub />, text: "GitHub" },
          { href: "https://www.linkedin.com/in/sahil-kumar-291079323", icon: <FaLinkedin />, text: "LinkedIn" },
          { href: "mailto:skinspiron15@gmail.com", icon: <FaEnvelope />, text: "Email" }
        ].map((link, i) => (
          <motion.a 
            key={i}
            href={link.href} 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.1 }}
          >
            {link.icon} {link.text}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Contact;