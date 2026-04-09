"use client";

import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    teamName: "",
    school: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative overflow-hidden bg-zinc-900/70 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 select-none font-sans text-[18vw] font-black leading-none tracking-[-0.04em] text-white/2"
      >
        CTFADA
      </div>

      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-sans text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
            JOIN <span className="text-red-600">NEXZERO</span>
          </h2>
        </div>

        <div className="mx-auto max-w-155 rounded-xl border border-white/10 bg-white/5 px-5 py-8 sm:px-10">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mb-4 text-4xl">✅</div>
              <p className="text-lg font-bold text-emerald-500">Registration Submitted!</p>
              <p className="mt-1 text-sm text-zinc-500">We&apos;ll reach out to you soon. Good luck!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-wrap gap-4">
                <Field
                  label="FULL NAME"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                />
              </div>

              <Field
                label="E-mail"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
              />

              <div className="flex flex-wrap gap-4">
                <Field
                  label="TEAM name"
                  name="teamName"
                  value={form.teamName}
                  onChange={handleChange}
                />
                <Field
                  label="School/University"
                  name="school"
                  value={form.school}
                  onChange={handleChange}
                />
              </div>

              <p className="text-right text-[0.7rem] uppercase tracking-widest text-red-500">
                PLEASE PUT THE RIGHT INFORMATION !
              </p>

              <button
                type="submit"
                className="rounded bg-red-600 px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-500"
              >
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", fullWidth }) {
  return (
    <div className={`flex min-w-0 flex-col gap-1.5 ${fullWidth ? "basis-full" : "flex-1"}`}>
      <label htmlFor={name} className="text-[0.72rem] uppercase tracking-widest text-zinc-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="rounded border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-red-500"
      />
    </div>
  );
}