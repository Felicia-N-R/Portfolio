import Link from "next/link";

type NavbarProps = {
  homePage?: boolean;
};

export default function Navbar({ homePage = true }: NavbarProps) {
  const sectionHref = (section: string) => homePage ? `#${section}` : `/#${section}`;

  return (
    <header className="site-header" id="top">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Felicia Natania Rahardjo, home">
          FNR<span>.</span>
        </a>
        <div className="nav-links">
          <a href={sectionHref("about")}>About</a>
          <a href={sectionHref("interests")}>Interests</a>
          <Link href="/certificates">Certificates</Link>
          <a href={sectionHref("contact")}>Contact</a>
        </div>
        <a className="availability" href={sectionHref("contact")}><span /> Open to connecting</a>
      </nav>
    </header>
  );
}
