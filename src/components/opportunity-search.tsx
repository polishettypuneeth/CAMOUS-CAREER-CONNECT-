import { useNavigate } from "@tanstack/react-router";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { OpportunitySearch as SearchState } from "@/lib/opportunities";

export function OpportunitySearch({ initial = {} }: { initial?: SearchState }) {
  const [query, setQuery] = useState(initial.q ?? "");
  const [location, setLocation] = useState(initial.location ?? "");
  const navigate = useNavigate();
  return <form className="opportunity-search" onSubmit={event => { event.preventDefault(); void navigate({ to: "/opportunities", search: { ...initial, q: query.trim(), location: location.trim() } }); }}>
    <label className="search-field"><Search size={19} /><span className="sr-only">Search roles or skills</span><Input value={query} onChange={event => setQuery(event.target.value)} placeholder="Job title, keyword, or skill" maxLength={200} /></label>
    <label className="search-field location-field"><MapPin size={19} /><span className="sr-only">Location</span><Input value={location} onChange={event => setLocation(event.target.value)} placeholder="Location or remote" maxLength={100} /></label>
    <Button type="submit" size="lg">Find opportunities<ArrowRight /></Button>
  </form>;
}