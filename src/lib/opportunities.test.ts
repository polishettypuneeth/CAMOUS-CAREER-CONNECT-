import { describe, expect, it } from "vitest";
import { demonstrationOpportunities, filterOpportunities, opportunityTypes, validateOpportunitySearch } from "./opportunities";

describe("Public opportunities", () => {
  it("keeps every sample labeled as demonstration rather than verified information", () => {
    expect(demonstrationOpportunities.length).toBeGreaterThan(0);
    expect(demonstrationOpportunities.every(item => item.demonstration && !item.verified)).toBe(true);
  });
  it("supports all eight specified opportunity categories", () => {
    expect([...opportunityTypes]).toEqual(["Full-time jobs", "Internships", "Campus placements", "Off-campus placements", "Workshops", "Hackathons", "Career events", "Training programs"]);
  });
  it("searches roles and skills case-insensitively", () => {
    expect(filterOpportunities(demonstrationOpportunities, { q: "  SOFTWARE  " }).map(item => item.id)).toEqual(["demo-software-internship", "demo-graduate-role"]);
    expect(filterOpportunities(demonstrationOpportunities, { q: "communication" }).map(item => item.id)).toEqual(["demo-graduate-role"]);
  });
  it("combines location, category, and keyword criteria", () => {
    expect(filterOpportunities(demonstrationOpportunities, { q: "software", location: "remote", type: "Internships" }).map(item => item.id)).toEqual(["demo-software-internship"]);
    expect(filterOpportunities(demonstrationOpportunities, { q: "software", type: "Workshops" })).toEqual([]);
  });
  it("ignores invalid category values and non-string search input", () => {
    expect(validateOpportunitySearch({ q: 42, location: {}, type: "unknown" })).toEqual({});
  });
});