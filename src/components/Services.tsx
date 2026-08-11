import {
  Code2,
  Database,
  Globe,
  ShoppingCart,
  Cloud,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={34} />,
    title: "Web Application",
    description:
      "Sviluppo applicazioni web moderne.",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "E-Commerce",
    description:
      "Realizzazione e personalizzazione di e-commerce con Shopify e WordPress.",
  },
  {
    icon: <Workflow size={34} />,
    title: "API Integration",
    description:
      "Integrazione con CRM, gateway di pagamento, OpenAI, Salesforce e servizi REST.",
  },
  {
    icon: <Database size={34} />,
    title: "Backend Development",
    description:
      "Architettura backend, database MySQL, autenticazione e automazioni.",
  },
  {
    icon: <Cloud size={34} />,
    title: "Cloud & DevOps",
    description: "Docker, Linux, Vercel, Cloudflare e deployment.",
  },
  {
    icon: <Globe size={34} />,
    title: "Freelance Collaboration",
    description: "Supporto tecnico continuativo per aziende e web agency.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 md:py-32 py-12 px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Services
        </span>

        <h2 className="mt-4 text-5xl font-black">Come posso aiutarti.</h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Offro supporto nello sviluppo di software, applicazioni web e
          integrazioni personalizzate, collaborando sia con aziende che con web
          agency.
        </p>

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-zinc-800 bg-black md:p-8 p-5 transition hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="text-emerald-400">{service.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
