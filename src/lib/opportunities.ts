export const opportunityTypes = ["Full-time jobs", "Internships", "Campus placements", "Off-campus placements", "Workshops", "Hackathons", "Career events", "Training programs"] as const;

export type Opportunity = {
  id: string; title: string; company: string; type: string; location: string;
  eligibility: string; deadline: string; description: string; skills: string[];
  verified: boolean; demonstration: boolean; logo?: string;
};

// Educational examples only. These are not published, verified, or open for applications.
export const demonstrationOpportunities: Opportunity[] = [
  { id: "demo-software-internship", title: "Software Development Intern", company: "Demonstration company", type: "Internships", location: "Remote", eligibility: "Illustrative: students with programming fundamentals", deadline: "Not applicable — demonstration", description: "An educational example of a software internship listing. A real listing would describe the role, responsibilities, eligibility, and official application process here.", skills: ["Programming fundamentals", "Problem solving"], verified: false, demonstration: true },
  { id: "demo-graduate-role", title: "Graduate Software Engineer", company: "Demonstration company", type: "Full-time jobs", location: "Location not specified", eligibility: "Illustrative: graduating students", deadline: "Not applicable — demonstration", description: "An educational example of a graduate role. No employer, salary, selection process, or application link is being represented as real.", skills: ["Programming", "Communication"], verified: false, demonstration: true },
  { id: "demo-career-workshop", title: "Resume & Interview Workshop", company: "Demonstration organizer", type: "Workshops", location: "Online", eligibility: "Illustrative: open to students", deadline: "Not applicable — demonstration", description: "An educational example of a career workshop listing, not a scheduled event. Verified organizers and event details will be supplied before any real event is published.", skills: ["Resume preparation", "Interview preparation"], verified: false, demonstration: true },
];

export type OpportunitySearch = { q?: string; type?: string; location?: string };
export function validateOpportunitySearch(input: Record<string, unknown>): OpportunitySearch {
  const output: OpportunitySearch = {};
  if (typeof input['q'] === "string") output.q = input['q'].slice(0, 200);
  if (typeof input['type'] === "string" && opportunityTypes.some(type => type === input['type'])) output.type = input['type'];
  if (typeof input['location'] === "string") output.location = input['location'].slice(0, 100);
  return output;
}

export function filterOpportunities(items: Opportunity[], search: OpportunitySearch) {
  const query = search.q?.trim().toLowerCase() ?? "";
  const location = search.location?.trim().toLowerCase() ?? "";
  return items.filter(item => (!search.type || item.type === search.type)
    && (!location || item.location.toLowerCase().includes(location))
    && (!query || [item.title, item.company, item.type, item.eligibility, ...item.skills].join(" ").toLowerCase().includes(query)));
}