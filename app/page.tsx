import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignIn } from "@/components/auth/signin-button";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Witaj w panelu kierowcy</CardTitle>
          <CardDescription>
            Aby uzyskać dostęp do panelu kierowcy, zaloguj się za pomocą swojego
            konta Discord.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </main>
  );
}
