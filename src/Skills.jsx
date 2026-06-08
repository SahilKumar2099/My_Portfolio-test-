import {useEffect,useRef,useState} from "react";

const skills = [
  { name: "Python", level: 80 },
  { name: "React.js", level: 65 },
  { name: "Java", level: 75 },
  { name: "Sql", level: 80 },
];

function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" ref={ref}>
      <h2>&lt; Skills /&gt;</h2>
      {skills.map((skill, i) => (
        <div key={i} className="skill-item">
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: animate ? `${skill.level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </section>
  )
}
export default Skills