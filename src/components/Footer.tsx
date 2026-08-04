import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-10 text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <p>
          © {new Date().getFullYear()} Giuseppe Pisani.
          All rights reserved.
        </p>

        <p className="flex items-center gap-2">
          Built with
          <Heart size={16} className="text-emerald-400" />
          React • TypeScript • Tailwind CSS
        </p>

      </div>
    </footer>
  );
}