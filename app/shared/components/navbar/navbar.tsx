import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Button from "@/app/shared/components/button/button";

const Navbar = async () => {
  const session = await auth();

  const handleSignInGithub = async () => {
    "use server";
    await signIn("github");
  };

  const handleSignOutGithub = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="bg-white px-20 py-5">
      <nav className="flex items-center justify-between">
        <Link className="text-violet-600" href="/">
          <Image src="/logo.png" alt="logo" width="110" height="20" />
        </Link>
        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link className="link" href={`user/${session?.user?.id}`}>
                Create
              </Link>
              <Link className="link" href={`user/${session?.user?.id}`}>
                {session?.user?.name}
              </Link>
              <form action={handleSignOutGithub}>
                <Button type="submit">Log Out</Button>
              </form>
            </>
          ) : (
            <form action={handleSignInGithub}>
              <Button type="submit">Log In</Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
