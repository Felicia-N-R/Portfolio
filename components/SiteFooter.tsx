import Link from "next/link";

type SiteFooterProps = {
  backToTopHref?: string;
};

export default function SiteFooter({ backToTopHref = "#top" }: SiteFooterProps) {
  return (
    <footer className="site-footer page-shell">
      <Link className="footer-brand" href="/">FNR<span>.</span></Link>
      <span>Made with care, by Felicia.</span>
      <div className="footer-links">
        <a href="https://github.com/Felicia-N-R" target="_blank" rel="noreferrer noopener">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/felicia-rahardjo-833657356" target="_blank" rel="noreferrer noopener">LinkedIn ↗</a>
        <a href={backToTopHref}>{backToTopHref === "#top" ? "Back to top ↑" : "Home ↑"}</a>
      </div>
    </footer>
  );
}
