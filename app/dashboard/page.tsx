import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SignOut } from "@/components/auth/signout-button";

export default async function Dashboard() {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src={
                      session.user.image ||
                      "https://cms.mscode.pl/uploads/default_avatar_304e70e74e.png"
                    }
                  />
                </Avatar>
                Witaj {session.user.name},
              </CardTitle>
            </CardHeader>
            <CardContent>
              Twoja aktualna rola to: {session.user.role}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Twoje konto</CardTitle>
            </CardHeader>
            <CardContent>
              Adres e-mail: {session.user.email}
              <br />
              <span className="text-sm text-gray-400">
                Identyfikator konta: {session.user.id}
              </span>
            </CardContent>
          </Card>
        </div>
        <SignOut />
      </div>
    </main>
  );
}
