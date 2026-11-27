import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import campusImage from "@/assets/campus-welcome.png.asset.json";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Career Connect | Your Future Starts Here" },
      { name: "description", content: "Campus Career Connect. Your Career. Your Opportunities. Your Future." },
      { property: "og:title", content: "Campus Career Connect | Your Future Starts Here" },
      { property: "og:description", content: "Your Career. Your Opportunities. Your Future. Welcome to Campus Career Connect." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="welcome" aria-labelledby="welcome-title">
        <img className="welcome-image" src={campusImage.url} alt="An illustrative modern campus with leafy trees and a sunlit walkway" fetchPriority="high" />
        <div className="shell-width welcome-content">
          <p className="welcome-eyebrow"><Sparkles size={14} /> A new chapter begins</p>
          <h1 id="welcome-title" className="welcome-title">Campus<br />Career <span>Connect.</span></h1>
          <p className="welcome-tagline">Your Career.<br />Your Opportunities.<br />Your Future.</p>
          <div className="welcome-rule" aria-hidden="true" />
        </div>
        <span className="image-caption">Illustrative campus image</span>
      </section>
      <section className="welcome-note" aria-labelledby="note-title">
        <div className="shell-width note-inner">
          <div><p className="note-label">The journey starts with you</p><h2 id="note-title" className="note-title">A place for your ambition.</h2></div>
          <div className="note-art" aria-hidden="true"><span className="note-line" /><span className="note-icon"><ArrowUpRight size={22} strokeWidth={1.5} /></span></div>
        </div>
      </section>
    </>
  );
}
