"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { contactLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mkovlnab";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!endpoint) {
      setStatus("error");
      setStatusMessage(
        "Contact endpoint is not configured yet. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT in environment variables."
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "New message from portfolio contact form"
        })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully. I will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send message right now. Please try again shortly.");
    }
  };

  return (
    <section id="contact" className="section-shell">
      <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                placeholder="Your name"
                aria-label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                aria-label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Textarea
                placeholder="Your message"
                aria-label="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              <Button type="submit" className="w-full sm:w-auto" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>

              {statusMessage ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-primary" : "text-rose-400"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}