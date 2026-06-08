const degrees=[
    {title:"Master In Computer Applications", institution:"Anna University", year:2027},
    {title:"Bachelor In Computer Applications", institution:"IGNOU", year:2024},
    {title:"Higher Secondary School (12th)", institution:"CBSE", year:2021}
];
function About(){
    return(
        <section className="about">
            <h2>Education</h2>
           {degrees.map((d, i) => (
        <div key={i} className="degree-card">
          <h3>{d.title}</h3>
          <p>{d.institution} — {d.year}</p>
        </div>
      ))}
        </section>
    );
}

export default About 