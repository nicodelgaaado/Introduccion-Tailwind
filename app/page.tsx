import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <article className="flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl md:flex-row">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Pine forest and mountain landscape"
          width={1000}
          height={700}
          className="h-72 w-full object-cover md:h-auto md:w-1/2"
          priority
        />

        <div className="flex flex-1 flex-col justify-between gap-8 p-8 md:p-10">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Nature Card
            </span>
            <h1 className="text-3xl font-bold text-slate-900">
              Mesmerizing Mountain Views
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              A calm pine forest scene with layered mountain silhouettes. This
              card is built using Tailwind flex utilities for vertical and
              horizontal alignment.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Explore
            </button>
            <button className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Save for Later
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
