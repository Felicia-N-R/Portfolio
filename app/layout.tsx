import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felicia Natania Rahardjo — Aspiring AI & Software Engineer",
  description:
    "Felicia Natania Rahardjo is a Computer Science student aspiring to work in AI and software engineering, and passionate about building thoughtful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
