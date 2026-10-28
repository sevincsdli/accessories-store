import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "../components/ui/Button";

type AuthMode = "login" | "register";

interface AuthPageProps {
  mode?: AuthMode;
}

export const AuthPage = ({ mode = "login" }: AuthPageProps) => {
  const [activeMode, setActiveMode] = useState<AuthMode>(mode);

  const isLogin = activeMode === "login";

  const benefits = useMemo(
    () => [
      "Private access to member-only drops",
      "Tailored styling recommendations",
      "Fast checkout and saved favorites",
    ],
    [],
  );

  const inputClassName =
    "w-full rounded-2xl border border-brand-beige bg-brand-light px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20";

  return (
    <main className="flex-1 bg-brand-light/60 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[30px] border border-brand-beige bg-white shadow-[0_24px_80px_rgba(26,26,26,0.08)] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative overflow-hidden bg-brand-dark px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,143,120,0.35),transparent_42%)]" />
            <div className="relative space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-brand-beige">
                <Sparkles className="h-3.5 w-3.5" />
                Member Access
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-brand-beige/80">
                  Accessories Studio
                </p>
                <h1 className="max-w-md text-3xl font-light uppercase tracking-[0.2em] sm:text-4xl">
                  {isLogin ? "Welcome back" : "Create your account"}
                </h1>
                <p className="max-w-md text-sm leading-7 text-white/75">
                  {isLogin
                    ? "Sign in to track your order, save favorites, and enjoy a more personal shopping experience."
                    : "Join our private circle for early access to limited collections and elevated wardrobe styling suggestions."}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-brand-beige/70">
                      Secure & Private
                    </p>
                    <p className="text-sm text-white/80">
                      Protected checkout and personal details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="flex items-center justify-between gap-3 rounded-full border border-brand-beige bg-brand-light p-1.5">
              <button
                type="button"
                onClick={() => setActiveMode("login")}
                className={`flex-1 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all ${
                  isLogin
                    ? "bg-brand-dark text-white shadow-sm"
                    : "text-brand-dark/70 hover:text-brand-dark"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveMode("register")}
                className={`flex-1 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all ${
                  !isLogin
                    ? "bg-brand-dark text-white shadow-sm"
                    : "text-brand-dark/70 hover:text-brand-dark"
                }`}
              >
                Register
              </button>
            </div>

            <form className="mt-8 space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                    <input
                      type="text"
                      placeholder="Your full name"
                      className={`${inputClassName} pl-11`}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                  <input
                    type="email"
                    placeholder="hello@accessoriesstudio.com"
                    className={`${inputClassName} pl-11`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                  Password
                </label>
                <input
                  type="password"
                  placeholder={
                    isLogin ? "Enter your password" : "Create a strong password"
                  }
                  className={inputClassName}
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className={inputClassName}
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 accent-brand-accent"
                    />
                    Keep me logged in
                  </label>
                  <Link
                    to="/"
                    className="text-brand-dark underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full mt-2">
                {isLogin ? "Login to my account" : "Create account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-7 border-t border-brand-beige pt-5 text-center text-xs text-brand-muted">
              {isLogin ? "New to the studio?" : "Already a member?"}{" "}
              <button
                type="button"
                onClick={() => setActiveMode(isLogin ? "register" : "login")}
                className="font-medium uppercase tracking-[0.18em] text-brand-dark underline-offset-4 hover:underline"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
