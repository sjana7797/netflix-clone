import FloatingInput from "@/components/custom/floating-input";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-">
      <section className="relative h-full min-h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-12 py-5">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="logo" className="h-6 lg:h-10" />
          </Link>
        </nav>
        <div className="relative z-10 flex w-full flex-col items-center gap-y-3 px-4 font-medium text-slate-100">
          <form className="flex justify-center">
            <div className="mt-2 w-full self-center rounded-md bg-black/70 p-8 lg:max-w-md">
              <h2 className="mb-8 text-4xl font-semibold capitalize text-slate-100">
                sign in
              </h2>
              <div className="flex flex-col gap-4">
                <FloatingInput
                  id="email"
                  label="email"
                  value={email}
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <FloatingInput
                  id="password"
                  label="password"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button variant={"primary"} className="capitalize">
                  login
                </Button>
                <p className="text-gray-500">
                  New to Netflix?
                  <Link
                    href="/"
                    className="hover:underline-offset-3 ml-1 cursor-pointer font-medium text-gray-200 hover:underline"
                  >
                    Sign up now.
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </section>
    </main>
  );
};

export default Home;
