import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker"><span className="kicker-line" /> PORTFOLIO <span className="kicker-year">2026</span></p>
        <h1 id="hero-title">Felicia<br /><em>Natania</em><br />Rahardjo<span className="hero-period">.</span></h1>
        <div className="hero-bottom">
          <p className="hero-subtitle">Aspiring AI and Software Engineer, Computer Science student passionate about building thoughtful digital products.</p>
          <a className="scroll-cue" href="#about"><span className="scroll-icon">↓</span> GET TO KNOW ME</a>
        </div>
      </div>
      <div className="hero-visual">
        <Image
          className="hero-photo"
          src="/felicia-portrait.jpeg"
          alt="Felicia Natania Rahardjo"
          fill
          priority
          sizes="(max-width: 620px) 100vw, 50vw"
        />
        <div className="visual-grain" />
        <div className="visual-top"><span>COMPUTER SCIENCE</span><span>LEARNING IN PUBLIC</span></div>
        <div className="visual-caption"><span>CURIOUS BY NATURE</span><span>01 / 01</span></div>
        <span className="visual-side-note">A MIND IN PROGRESS</span>
      </div>
    </section>
  );
}
