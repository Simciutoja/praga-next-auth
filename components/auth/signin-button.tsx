import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord", { redirectTo: "/dashboard" });
      }}
    >
      <Button className="w-full" type="submit">
        Zaloguj się za pomocą konta Discord
      </Button>
    </form>
  );
}
