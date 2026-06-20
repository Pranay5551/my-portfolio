import './Hero.css'

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-eyebrow fade-in">Full-Stack Developer · Nagpur, India</div>
      <h1 className="hero-headline fade-in fade-in-delay-1">
        I build things<br/>people <em>love</em><br/>to use.
      </h1>
      <p className="hero-sub fade-in fade-in-delay-2">
        Recent CSE graduate crafting full-stack web applications — from pixel-perfect interfaces to robust APIs.
      </p>
      <a href="#work" className="hero-cta fade-in fade-in-delay-3">See my work</a>
      <div className="hero-tag">Scroll to explore</div>
    </section>
  )
}