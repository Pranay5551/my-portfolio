import './Work.css'

const projects = [
  {
    num: '01',
    name: 'FreelanceKit',
    desc: 'Full-stack SaaS for freelancers. Invoicing, contracts, client management, PDF generation, and earnings tracking.',
    tags: ['FastAPI', 'React', 'PostgreSQL'],
    url: 'https://freelancer-tool.vercel.app'
  },
  {
    num: '02',
    name: 'Task Manager',
    desc: 'Full-stack task management app with JWT authentication and MongoDB persistence.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    url: 'https://task-manager-frontend-sigma-sooty.vercel.app'
  },
  {
    num: '03',
    name: 'Python Compiler',
    desc: 'Browser-based Python IDE with Monaco Editor and real-time execution via Piston API.',
    tags: ['React', 'FastAPI', 'Monaco'],
    url: 'https://python-compiler-frontend-sable.vercel.app'
  },
  {
    num: '04',
    name: 'RainGuard',
    desc: 'Geospatial rainfall anomaly tracking dashboard built during MRSAC internship using Python and Streamlit.',
    tags: ['Python', 'Streamlit', 'GeoPandas'],
    url: '#'
  }
]

export default function Work() {
  return (
    <section id="work">
      <div className="section-eyebrow fade-in">Portfolio</div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <a
            key={p.name}
            className={'project-row fade-in fade-in-delay-' + (i + 1)}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-left">
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <div className="project-right">
              <div className="project-tags">
                {p.tags.map(t => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-arrow">up</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
