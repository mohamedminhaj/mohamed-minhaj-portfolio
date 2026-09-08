import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Minhaj | AI/ML Engineer",
  description:
    "AI/ML Engineer in training focused on computer vision, generative AI, object detection, NLP and intelligent automation.",
  openGraph: {
    title: "Mohamed Minhaj | AI/ML Engineer",
    description:
      "Portfolio of Mohamed Minhaj — AI/ML Engineer in training.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}