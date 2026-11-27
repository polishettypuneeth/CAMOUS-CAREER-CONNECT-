import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, MapPin, CalendarDays, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { demonstrationOpportunities } from "@/lib/opportunities";
import { publicHead } from "@/lib/public-metadata";
export const Route = createFileRoute("/opportunities/$id")({
  head: ({ params }) => { const item = demonstrationOpportunities.find(item => item.id === params.id); return publicHead(item ? `${item.title} — Demonstration` : "Opportunity unavailable", item ? `Educational sample of ${item.title}. Not a real vacancy; no applications are accepted.` : "This opportunity is not available on Campus Career Connect."); }, component: OpportunityDetails,
});
function OpportunityDetails() {
  const { id } = Route.useParams();
  const opportunity = demonstrationOpportunities.find(item => item.id === id);
  if (!opportunity) return <div className="shell-width page-content"><div className="empty-state"><Building2 size={36} /><h1>Opportunity unavailable</h1><p>This listing could not be found.</p><Button asChild><Link to="/opportunities" search={{}}>Explore opportunities</Link></Button></div></div>;
  return <div className="shell-width page-content">
    <Button variant="link" asChild><Link to="/opportunities" search={{}}><ArrowLeft />All opportunities</Link></Button>
    <div className="detail-heading"><span className="company-symbol"><Building2 size={28} /></span><div><p className="company-caption">{opportunity.company}</p><h1>{opportunity.title}</h1><span className="type-badge">{opportunity.type}</span></div></div>
    <div className="demo-notice"><span className="demo-badge">Demonstration</span><p>This is an educational example, not a verified vacancy. No employer partnership or open application is implied.</p></div>
    <div className="detail-grid"><div className="detail-body"><h2>About this opportunity</h2><p>{opportunity.description}</p><h2>Skills in this example</h2><div className="flex flex-wrap gap-2">{opportunity.skills.map(skill => <span key={skill} className="type-badge">{skill}</span>)}</div><h2>Application information</h2><p>Applications are not available for demonstration listings. Real opportunities will include an administrator-verified official application link and deadline.</p></div><aside className="detail-summary"><h2>At a glance</h2><dl><dt><MapPin />Location</dt><dd>{opportunity.location}</dd><dt><GraduationCap />Eligibility</dt><dd>{opportunity.eligibility}</dd><dt><CalendarDays />Application deadline</dt><dd>{opportunity.deadline}</dd><dt>Verification</dt><dd>Not verified — sample only</dd></dl></aside></div>
  </div>;
}
