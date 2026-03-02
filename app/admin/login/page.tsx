"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => ({ error: "Login failed" }));
      setError(data.error || "Login failed");
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md border-border/80 bg-card/80">
        <CardHeader>
          <div className="flex justify-end">
            <Link href="/">
              <Button variant="outline" size="sm">
                Home
              </Button>
            </Link>
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Admin username"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Admin password"
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </Button>
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
