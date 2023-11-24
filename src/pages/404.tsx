import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Custom404() {
  const session = useSession();

  const link = session ? "/dashboard" : "/";
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <Image src="/name_logo.png" width={400} height={400} alt="GoalTac Logo" />
      <p className="text-xl font-semibold">404 - Page Not Found</p>

      <Link href={link}>
        <Button variant={"outline"}>Return to home</Button>
      </Link>
    </div>
  );
}
