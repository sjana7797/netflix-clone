import FloatingInput from "@/components/custom/floating-input";
import { Button, buttonVariants } from "@/components/ui/button";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { useUserRegistration } from "@/store";
import { toast } from "react-toastify";

type Props = {};

function Auth({}: Props) {
  const { email, setEmail } = useUserRegistration();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignUp: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    router.push("/auth/signup");
    setLoading(false);
  };

  return (
    <main className="bg-">
      <section className="relative h-full min-h-screen w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-12 py-5">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="logo" className="h-6 lg:h-10" />
          </Link>
          <Link
            href="/login"
            className={cn(
              buttonVariants({
                variant: "primary",
              }),
              "py-1 uppercase",
            )}
          >
            login
          </Link>
        </nav>
        <div className="relative z-10 mt-[10%] flex w-full flex-col items-center gap-y-3 px-4 font-medium text-slate-100">
          <h2 className="flex justify-center text-3xl font-bold lg:text-5xl">
            Laughter. Tears. Thrills. Find it all on Netflix.
          </h2>
          <h4 className="text-sm lg:text-xl">
            Endless entertainment starts at just ₹ 149. Cancel anytime.
          </h4>
          <p className="text-xs lg:text-base">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            className="flex w-full max-w-lg flex-col items-center gap-2 lg:flex-row lg:justify-center"
            onSubmit={handleSignUp}
          >
            <FloatingInput
              className="flex-grow"
              id="email"
              label="email"
              value={email}
              type="email"
              inputClassName="w-full"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Button
              variant="primary"
              className="w-fit shrink-0 px-3.5 py-2.5 text-base font-medium capitalize"
              type="submit"
            >
              get started <ChevronRight className="h-5 w-5" />
            </Button>
          </form>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </section>
    </main>
  );
}

export default Auth;
