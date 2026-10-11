import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Certificates — Felicia Natania Rahardjo",
  description:
    "Certificates and learning milestones from Felicia Natania Rahardjo's journey in computer science, programming, and technology.",
};

const certificates = [
  {
    number: "01",
    title: "UI/UX Competition Participant",
    issuer: "FIND IT! 2026 · KMTETI, Faculty of Engineering, Universitas Gadjah Mada",
    date: "16 May 2026",
    image: "/certificates/previews/find-it-ux-competition-2026.jpg",
    file: "/certificates/find-it-ux-competition-2026.pdf",
  },
  {
    number: "02",
    title: "Business IT Case — Finalist",
    issuer: "COMPFEST 18 · Business IT Case Competition",
    date: "26–27 September 2026",
    image: "/certificates/previews/compfest18-business-it-case-finalist.jpg",
    file: "/certificates/compfest18-business-it-case-finalist.pdf",
  },
  {
    number: "03",
    title: "Business IT Case — Participant",
    issuer: "COMPFEST 18 · Business IT Case Competition",
    date: "August–September 2026",
    image: "/certificates/previews/compfest18-business-it-case-participant.jpg",
    file: "/certificates/compfest18-business-it-case-participant.pdf",
  },
  {
    number: "04",
    title: "Company Visit to GDP LAB",
    issuer: "UREEKA · Documentation Staff",
    date: "11 September 2026",
    image: "/certificates/previews/ureeeka-documentation-staff.jpg",
    file: "/certificates/ureeeka-documentation-staff.pdf",
  },
  {
    number: "05",
    title: "CS50’s Introduction to Programming with Python",
    issuer: "CS50 · Harvard University",
    date: "2026",
    image: "/certificates/previews/cs50-introduction-to-programming-python.jpg",
    file: "/certificates/cs50-introduction-to-programming-python.pdf",
  },
  {
    number: "06",
    title: "Innovative VibeCode",
    issuer: "BITSMIKRO · Certificate of Appreciation",
    image: "/certificates/previews/bitsmikro-innovative-vibecode.jpg",
    file: "/certificates/bitsmikro-innovative-vibecode.pdf",
  },
  {
    number: "07",
    title: "AI for Accounting and Finance Professionals",
    issuer: "BINUS University · National Seminar",
    date: "9 October 2025",
    image: "/certificates/previews/ai-for-accounting-finance-professionals.jpg",
    file: "/certificates/ai-for-accounting-finance-professionals.pdf",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <Navbar homePage={false} />
      <main className="certificates-page page-shell" id="top">
        <div className="section-index"><span>04</span><span>LEARNING, IN PRACTICE</span></div>
        <section className="certificates-intro" aria-labelledby="certificates-title">
          <p className="eyebrow">Certificates & milestones</p>
          <h1 id="certificates-title">A few things<br /><em>I’ve learned along the way.</em></h1>
          <p className="certificates-lede">
            A growing collection of courses, competitions, and experiences that have shaped how I think and build.
          </p>
          <Link className="back-link" href="/#top">← Back to portfolio</Link>
        </section>

        <section className="certificate-grid" aria-label="Certificates">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <a
                className="certificate-preview"
                href={certificate.file}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${certificate.title} certificate PDF`}
              >
                <Image
                  src={certificate.image}
                  alt={`Preview of ${certificate.title} certificate`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className="certificate-open">VIEW PDF ↗</span>
              </a>
              <div className="certificate-info">
                <span className="certificate-number">{certificate.number}</span>
                <div>
                  <h2>{certificate.title}</h2>
                  <p>{certificate.issuer}</p>
                  {certificate.date && <span className="certificate-date">{certificate.date}</span>}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter backToTopHref="/#top" />
    </>
  );
}
