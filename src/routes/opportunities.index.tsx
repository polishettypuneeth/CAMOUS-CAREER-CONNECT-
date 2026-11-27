import { createFileRoute, Link } from "@tanstack/react-router";
import { SearchX, SlidersHorizontal } from "lucide-react";
import { OpportunitySearch } from "@/components/opportunity-search";
import { OpportunityCard } from "@/components/opportunity-card";
import { Button } from "@/components/ui/button";
import { demonstrationOpportunities, filterOpportunities, opportunityTypes, validateOpportunitySearch } from "@/lib/opportunities";
import { publicHead } from "@/lib/public-metadata";
export const Route = createFileRoute("/opportunities/")({ validateSearch: validateOpportunitySearch, head: () => publicHead("Explore Opportunities", "Explore student career opportunities by role, skills, type, and location. Current listings are clearly labeled educational demonstrations."), component: Opportunities });
function Opportunities() {
  const search = Route.useSearch();
  const results = filterOpportunities(demonstrationOpportunities, search);
  return <div className="shell-width page-content">
    <div className="page-heading"><p className="section-eyebrow">Your next step</p><h1>Explore opportunities</h1><p>Find a direction that fits your skills and ambitions.</p></div>
    <OpportunitySearch key={`${search.q ?? ""}-${search.location ?? ""}`} initial={search} />
    <div className="filter-row"><span className="filter-label"><SlidersHorizontal size={16} />Opportunity type</span><div className="filter-options"><Button size="sm" variant={!search.type ? "default" : "outline"} asChild><Link to="/opportunities" search={{ ...search, type: undefined }}>All types</Link></Button>{opportunityTypes.map(type => <Button key={type} size="sm" variant={search.type === type ? "default" : "outline"} asChild><Link to="/opportunities" search={{ ...search, type }}>{type}</Link></Button>)}</div></div>
    <div className="demo-notice"><span className="demo-badge">Demonstration</span><p>These educational samples are not real vacancies and do not accept applications. Verified opportunities have not been published yet.</p></div>
    <div className="results-header"><p aria-live="polite">{results.length} demonstration {results.length === 1 ? "opportunity" : "opportunities"}</p>{(search.q || search.type || search.location) && <Button variant="link" asChild><Link to="/opportunities" search={{}}>Clear filters</Link></Button>}</div>
    {results.length ? <div className="opportunity-grid">{results.map(item => <OpportunityCard key={item.id} opportunity={item} />)}</div> : <div className="empty-state"><SearchX size={32} /><h2>No matching opportunities</h2><p>Try a different keyword, location, or opportunity type.</p><Button variant="outline" asChild><Link to="/opportunities" search={{}}>Reset search</Link></Button></div>}
  </div>;
}
