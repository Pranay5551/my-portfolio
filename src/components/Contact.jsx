import './Contact.css'

const links = [
  { label: 'Email', value: 'pranaymagar0@gmail.com', url: 'mailto:pranaymagar0@gmail.com' },
  { label: 'GitHub', value: 'github.com/Pranay5551', url: 'https://github.com/Pranay5551' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pranay-magar', url: 'https://www.linkedin.com/in/pranay-magar' },
  { label: 'Fiverr', value: 'fiverr.com/pranaymagar555', url: 'https://fiverr.com/pranaymagar555' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-label fade-in"><span>Contact</span></div>
      <div className="contact-body">
        <h2 className="contact-headline fade-in fade-in-delay-1">
          Let's build<br/>something <em>great</em><br/>together.
        </h2>
        <p className="contact-text fade-in fade-in-delay-2">
          I'm open to internships, freelance projects, and full-time opportunities. Whether you have a project in mind or just want to say hello — my inbox is always open.
        </p>
        <div className="contact-links fade-in fade-in-delay-3">
          {links.map(l => (
            <a key={l.label} className="contact-link-row" href={l.url} target="_blank" rel="noopener noreferrer">
              <span className="contact-link-label">{l.label}</span>
              <span className="contact-link-value">{l.value}</span>
              <span className="contact-link-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}