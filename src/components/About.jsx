import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="about-label fade-in">
        <span>About</span>
      </div>
      <div className="about-body">
        <h2 className="about-intro fade-in fade-in-delay-1">
          Developer who cares about<br/><em>craft</em>, not just code.
        </h2>
        <p className="about-text fade-in fade-in-delay-2">
          I'm Pranay, a full-stack developer based in Nagpur, India. I graduated with a B.Tech in Computer Science from G H Raisoni College of Engineering & Management in 2026. I completed a government internship at MRSAC where I built geospatial tools for climate analysis using Python and Streamlit.
          <br/><br/>
          I care about making software that feels right — fast, intuitive, and purposeful. When I'm not building, I'm exploring new tools and looking for the next interesting problem to solve.
        </p>
        <div className="skills-grid fade-in fade-in-delay-3">
          {['React + Vite','FastAPI','Node.js','PostgreSQL','MongoDB','Tailwind CSS','Python','Framer Motion','Vercel / Render'].map(s => (
            <div className="skill-item" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}