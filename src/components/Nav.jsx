import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#home">Pranay Magar</a>

      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-socials">
        <a href="https://github.com/Pranay5551" target="_blank" rel="noopener">Github</a>
        <a href="https://www.linkedin.com/in/pranay-magar" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://fiverr.com/pranaymagar555" target="_blank" rel="noopener">Fiverr</a>
        <a href="mailto:pranaymagar0@gmail.com">Email</a>
      </div>
    </nav>
  )
}