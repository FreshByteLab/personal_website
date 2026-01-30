"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { contactSection } from "@/content/contact";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
      if (errors[key]) {
        setErrors((prev) => ({ ...prev, [key]: undefined }));
      }
      if (submitted) {
        setSubmitted(false);
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = contactSection.form.fields.name.error;
    }

    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = contactSection.form.fields.email.error;
    }

    if (!form.message.trim()) {
      nextErrors.message = contactSection.form.fields.message.error;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {contactSection.subtitle}
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            {contactSection.title}
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {contactSection.links.map((link) => (
              <Card key={link.label} className="p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  className="mt-2 block text-lg font-semibold text-white transition hover:text-accent"
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  {link.detail}
                </a>
              </Card>
            ))}
            <Card className="p-5 text-xs text-white/60">
              <p>
                Domain: <span className="text-white">{contactSection.domainDetails.domain}</span>
              </p>
              <p>
                Registrar: <span className="text-white">{contactSection.domainDetails.registrar}</span>
              </p>
              <p>
                Security: <span className="text-white">{contactSection.domainDetails.dnssec}</span>
              </p>
            </Card>
          </div>
          <Card className="p-6">
            {submitted ? (
              <div className="mb-6 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-white">
                <p className="text-base font-semibold">
                  {contactSection.form.successTitle}
                </p>
                <p className="mt-1 text-white/70">
                  {contactSection.form.successBody}
                </p>
              </div>
            ) : null}
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {contactSection.form.fields.name.label}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder={contactSection.form.fields.name.placeholder}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-rose-200">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {contactSection.form.fields.email.label}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder={contactSection.form.fields.email.placeholder}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-rose-200">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {contactSection.form.fields.message.label}
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder={contactSection.form.fields.message.placeholder}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-rose-200">{errors.message}</p>
                ) : null}
              </div>
              <Button
                label={contactSection.form.submitLabel}
                type="submit"
                variant="primary"
                className="w-full"
              />
            </form>
          </Card>
        </div>
      </div>
    </Container>
  );
}
