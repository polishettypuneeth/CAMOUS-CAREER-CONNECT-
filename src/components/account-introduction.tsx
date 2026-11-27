import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export function AccountIntroduction({ compact = false }: { compact?: boolean }) {
  return <Dialog>
    <DialogTrigger asChild><Button size={compact ? "sm" : "lg"} variant={compact ? "default" : "outline"}><UserPlus />Create an account</Button></DialogTrigger>
    <DialogContent><DialogTitle>Student registration is coming next</DialogTitle><DialogDescription>Account creation is not available yet. You can explore the public pages now; secure registration will be added in the authentication phase. No personal information is being collected.</DialogDescription><DialogClose asChild><Button>Got it</Button></DialogClose></DialogContent>
  </Dialog>;
}