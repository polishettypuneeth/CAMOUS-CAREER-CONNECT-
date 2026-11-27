import { Link, useLocation } from "@tanstack/react-router";
import { GraduationCap, Menu, Moon, Sun, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { AccountIntroduction } from "@/components/account-introduction";
const navigation = [{ to: "/", label: "Home" }, { to: "/opportunities", label: "Opportunities" }, { to: "/companies", label: "Companies" }, { to: "/about", label: "About us" }, { to: "/contact", label: "Contact us" }] as const;
export function AppShell({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation({ select: location => location.pathname });
  const themeLabel = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  return <div className="app-shell">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="shell-header"><div className="shell-width header-inner">
      <Link to="/" className="brand-link" aria-label="Campus Career Connect home" onClick={() => setMenuOpen(false)}><span className="brand-mark"><GraduationCap size={26} strokeWidth={1.7} /></span><span className="brand-name">Campus Career<span>Connect</span></span></Link>
      <div className="header-actions">
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} search={{}} className="nav-link" data-active={item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)} aria-current={pathname === item.to ? "page" : undefined}>{item.label}</Link>)}</nav>
        <div className="header-account"><AccountIntroduction compact /></div>
        <Button variant="outline" size="icon" className="theme-button" aria-label={themeLabel} title={themeLabel} onClick={toggleTheme}>{theme === "light" ? <Moon /> : <Sun />}</Button>
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} search={{}} aria-current={pathname === item.to ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<AccountIntroduction compact /></nav>}</header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="shell-footer"><div className="shell-width footer-inner"><div className="footer-brand"><GraduationCap size={18} strokeWidth={1.7} />Campus Career Connect</div><nav className="footer-links" aria-label="Footer navigation"><Link to="/about">About us</Link><Link to="/contact">Contact us</Link><Link to="/opportunities" search={{}}>Explore opportunities</Link></nav></div><div className="shell-width footer-bottom"><p>Your Career. Your Opportunities. Your Future.</p><p>For students. For what comes next.</p></div></footer>
  </div>;
}
