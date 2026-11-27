import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publicHead } from "@/lib/public-metadata";
export const Route = createFileRoute("/companies")({ head: () => publicHead("Companies", "Verified company information on Campus Career Connect. No company partnerships are claimed without verification."), component: Companies });
function Companies() { return <div className="shell-width page-content"><div className="page-heading"><p className="section-eyebrow">Discover your possibilities</p><h1>Companies</h1><p>Get to know the organizations behind your next opportunity.</p></div><div className="empty-state"><Building2 size={40} /><h2>No verified companies yet</h2><p>Company profiles will appear here once their information has been reviewed. No partnerships are currently claimed.</p><Button asChild><Link to="/opportunities" search={{}}>Explore opportunities<ArrowRight /></Link></Button></div><div className="trust-note"><ShieldCheck size={20} /><p>Verified information. Clear sources. No unsubstantiated placement claims.</p></div></div>; }
