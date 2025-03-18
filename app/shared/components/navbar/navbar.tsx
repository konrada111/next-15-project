import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

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
    <header className="bg-neutral-100 px-5 py-3">
      <nav className="flex justify-between">
        <Link className="text-violet-600" href="/public">
          <span className="font-bold text-black">Untitled UI</span>
        </Link>
        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link className="link" href={`user/${session?.user?.id}`}>
                {session?.user?.name}
              </Link>
              <form action={handleSignOutGithub}>
                <button
                  className="cursor-pointer rounded-sm border-none bg-black px-3 py-1 text-sm text-white outline-none"
                  type="submit"
                >
                  Log Out
                </button>
              </form>
            </>
          ) : (
            <form action={handleSignInGithub}>
              <button className="link" type="submit">
                Log In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
