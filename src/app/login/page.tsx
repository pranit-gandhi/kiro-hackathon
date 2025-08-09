"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSubmitted(true);
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) router.push("/dashboard");
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-black text-white py-2 rounded"
          onClick={handleLogin}
        >
          Send Magic Link
        </button>
        {submitted && (
          <p className="text-green-600">Check your inbox for the login link.</p>
        )}
      </div>
    </main>
  );
}
