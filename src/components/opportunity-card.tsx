import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, CalendarDays, MapPin, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Opportunity } from "@/lib/opportunities";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return <article className="opportunity-card">
    <div className="flex items-center justify-between gap-3"><span className="company-symbol">{opportunity.logo ? <img src={opportunity.logo} alt={`${opportunity.company} logo`} /> : <Building2 size={23} />}</span><span className="demo-badge">Demonstration</span></div>
    <p className="company-caption">{opportunity.company}</p>
    <h3 className="opportunity-title"><Link to="/opportunities/$id" params={{ id: opportunity.id }}>{opportunity.title}</Link></h3>
    <span className="type-badge">{opportunity.type}</span>
    <div className="opportunity-facts"><p><MapPin />{opportunity.location}</p><p><GraduationCap />{opportunity.eligibility}</p><p><CalendarDays />{opportunity.deadline}</p></div>
    <div className="card-bottom"><span className="verification-label">{opportunity.verified ? <><ShieldCheck size={14} />Verified</> : "Not verified · sample only"}</span><Button variant="ghost" size="icon" asChild><Link to="/opportunities/$id" params={{ id: opportunity.id }} aria-label={`View ${opportunity.title}`} title="View details"><ArrowUpRight /></Link></Button></div>
  </article>;
}