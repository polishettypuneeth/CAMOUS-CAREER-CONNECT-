import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/opportunities")({ component: OpportunityLayout });
function OpportunityLayout() { return <Outlet />; }
