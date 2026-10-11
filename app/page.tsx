import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";

const interests = [
  {
    number: "01",
    title: "Artificial intelligence",
    description:
      "Exploring how intelligent systems can make everyday tools more useful, intuitive, and human.",
    tag: "CURIOUS ABOUT",
  },
  {
    number: "02",
    title: "Software engineering",
    description:
      "Learning to turn thoughtful ideas into reliable, well-crafted experiences—one detail at a time.",
    tag: "BUILDING TOWARD",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="about-section page-shell" id="about">
          <div className="section-index"><span>01</span><span>THE PERSON BEHIND THE CODE</span></div>
          <div className="about-copy">
            <p className="eyebrow">A little about me</p>
            <h2>
              Drawn to the space where <em>curiosity</em> meets craft.
            </h2>
            <p className="body-copy">
              I’m Felicia, a Computer Science student interested in the ideas
              and engineering behind thoughtful digital products. I’m at the
              beginning of my journey, learning by asking questions, making
              things, and paying attention to how technology feels to use.
            </p>
            <p className="body-copy">
              Right now, I’m especially curious about artificial intelligence
              and the small decisions that make software feel clear, useful,
              and human.
            </p>
          </div>
          <div className="about-note">
            <span className="note-mark">“</span>
            <p>Thoughtful work starts with thoughtful questions.</p>
            <span className="note-caption">A PRINCIPLE I’M LEARNING BY</span>
          </div>
        </section>

        <section className="explore-section" id="interests">
          <div className="page-shell">
            <div className="section-index"><span>02</span><span>WHAT I&apos;M LEANING INTO</span></div>
            <div className="explore-heading">
              <div>
                <p className="eyebrow">Areas of curiosity</p>
                <h2>Still learning.<br /><em>Always exploring.</em></h2>
              </div>
              <p className="explore-intro">A few directions I’m excited to grow in. This list will evolve as I do.</p>
            </div>
            <div className="interest-grid">
              {interests.map((interest) => (
                <article className="interest-card" key={interest.number}>
                  <div className="interest-topline">
                    <span>{interest.number}</span>
                    <span className="interest-tag">{interest.tag}</span>
                  </div>
                  <div className={`interest-art interest-art-${interest.number}`} aria-hidden="true">
                    {interest.number === "01" ? (
                      <><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-core">a<span>i</span></span><span className="orbit-dot" /></>
                    ) : (
                      <><span className="code-window"><i /><i /><i /><b>&lt; / &gt;</b></span><span className="code-shadow" /></>
                    )}
                  </div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                  <span className="card-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact">
          <div className="section-index"><span>03</span><span>LEAVE A NOTE</span></div>
          <div className="contact-content">
            <p className="eyebrow">The next good thing starts somewhere</p>
            <h2>Let’s start<br /><em>a conversation.</em></h2>
            <p className="contact-copy">Always happy to connect with kind people, curious minds, and fellow builders.</p>
            <ContactForm />
          </div>
          <div className="contact-decoration" aria-hidden="true"><span>F</span><i /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
