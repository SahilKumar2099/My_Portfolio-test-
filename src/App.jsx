import Hero from "./Hero"
import About from "./About"
import Contact from "./Contact"
import CodeBackground from "./CodeBackground"
import SkillsBento from "./SkillsBento"
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <SkillsBento/>
      <Contact />
      <CodeBackground/>
    </div>
  )
}

export default App