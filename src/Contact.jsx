import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
   return (
    <section className="contact">
      <h2>&lt; Connect /&gt;</h2>
      <div className="social-links">
        <a href="https://github.com/SahilKumar2099" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
       <a href="https://www.linkedin.com/in/sahil-kumar-291079323" target="_blank" rel="noreferrer">
        <FaLinkedin /> LinkedIn
       </a>
        <a href="mailto:skinspiron15@gmail.com">
            <FaEnvelope /> Email
        </a>
      </div>
    </section>
  )
}

export default Contact