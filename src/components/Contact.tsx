import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Errore durante l'invio");
      }

      setStatus("success");

      setForm({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-12 text-white md:py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-96 md:max-w-6xl">
        <div className="rounded-[40px] border border-zinc-800 bg-black/70 p-6 backdrop-blur md:p-12">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </span>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <h2 className="mt-4 text-5xl font-black leading-tight">
                Hai un progetto in mente?
                <br />
                Parliamone.
              </h2>

              <p className="mt-8 text-lg leading-8 text-zinc-400">
                Sono disponibile per collaborazioni freelance, sviluppo
                software, supporto a web agency e realizzazione di
                applicazioni web personalizzate.
              </p>

              <div className="mt-14 flex flex-wrap gap-5">
                <a
                  href="https://github.com/forklein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/giuseppe-pisani93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:giuseppepisani2@gmail.com"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Email
                </a>

                <a
                  href="https://www.instagram.com/peppe_pisani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Mario"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="surname"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Cognome
                  </label>

                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    required
                    value={form.surname}
                    onChange={handleChange}
                    placeholder="Rossi"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="mario@email.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Messaggio
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Raccontami qualcosa del tuo progetto..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={19} />

                {status === "loading"
                  ? "Invio in corso..."
                  : "Invia messaggio"}
              </button>

              {status === "success" && (
                <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-400">
                  Messaggio inviato correttamente. Ti risponderò il prima
                  possibile.
                </p>
              )}

              {status === "error" && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  Si è verificato un errore durante l'invio. Riprova tra poco.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}