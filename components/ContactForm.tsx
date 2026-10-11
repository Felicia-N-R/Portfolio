"use client";

import { FormEvent, useState } from "react";

type FormState = { kind: "idle" | "success" | "error"; message: string };

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setState({ kind: "idle", message: "" });

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      setState({ kind: "success", message: "Thank you — your note is on its way." });
    } catch (error) {
      setState({
        kind: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Your note
        <textarea name="message" rows={3} maxLength={5000} required />
      </label>
      <label className="form-trap" aria-hidden="true" tabIndex={-1}>
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-submit-row">
        <button className="contact-link" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send your note"}<span aria-hidden="true">↗</span>
        </button>
        <p className={`form-status form-${state.kind}`} aria-live="polite">{state.message}</p>
      </div>
    </form>
  );
}
