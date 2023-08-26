import Link from "next/link";

type Props = {};

function Signup({}: Props) {
  return (
    <main className="min-h-screen w-full bg-slate-100 text-slate-500">
      <header className="shadow-sm">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-12 py-5">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="logo" className="h-6 lg:h-10" />
          </Link>
        </nav>
      </header>
    </main>
  );
}

export default Signup;
