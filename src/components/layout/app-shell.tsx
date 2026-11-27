import { Link } from "@tanstack/react-router";
import { GraduationCap, Menu, Moon, Sun, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";

export function AppShell({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const themeLabel = theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="shell-header">
        <div className="shell-width header-inner">
          <Link to="/" className="brand-link" aria-label="Campus Career Connect home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark"><GraduationCap size={26} strokeWidth={1.7} /></span>
            <span className="brand-name">Campus Career<span>Connect<span className="sr-only"> home</span></span></span>
          </Link>
          <div className="header-actions">
            <nav className="desktop-nav" aria-label="Main navigation"><Link to="/" className="home-link" aria-current="page">Home</Link></nav>
            <Button variant="outline" size="icon" className="theme-button" aria-label={themeLabel} title={themeLabel} onClick={toggleTheme}>
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>
            <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><Link to="/" aria-current="page" onClick={() => setMenuOpen(false)}>Home</Link></nav>}
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="shell-footer">
        <div className="shell-width footer-inner">
          <div className="footer-brand"><GraduationCap size={18} strokeWidth={1.7} />Campus Career Connect</div>
          <p>Your Career. Your Opportunities. Your Future.</p>
        </div>
      </footer>
    </div>
  );
}