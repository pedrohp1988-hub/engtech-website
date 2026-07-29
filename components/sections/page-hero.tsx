export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
