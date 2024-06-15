import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut(redirect("/"));
      }}
    >
      <Button className="w-full" type="submit">
        Wyloguj się
      </Button>
    </form>
  );
}
