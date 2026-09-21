
import Link from "next/link";
import { Blogsection } from "../data/Blog-sections";



function page() {
    return (
        <main className="min-h-[calc(100vh-81px)] bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 border-b border-emerald-900/15 pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:pb-16">
                    <div>
                        <p className="mb-5 text-sm font-bold tracking-[0.16em] text-emerald-700">BLOG ACADEMICO</p>
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                            Ingeniería en Tecnologías de la Información e Innovación Digital
                        </h1>
                    </div>
                    <p className="max-w-md border-l-2 border-cyan-500 pl-5 text-base leading-7 text-zinc-600">
                        Conocimiento, creatividad y tecnología para diseñar soluciones que mejoran la forma en que vivimos, aprendemos y trabajamos.
                    </p>
                </div>

                <section className="pt-10 lg:pt-14" aria-labelledby="explora-el-blog">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 id="explora-el-blog" className="text-xl font-semibold text-emerald-950 sm:text-2xl">Explora el blog</h2>
                        <span className="hidden text-sm font-medium text-zinc-500 sm:block">Aprende. Crea. Innova.</span>
                        <Link href="/blog/firststeps" className="text-sm font-medium text-emerald-700 hover:text-emerald-900 sm:hidden">
                            Ver todos los artículos
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {Blogsection.map((section) => (
                            <article key={section.href} className="group">
                                <Link href={section.href}>
                                    <div className="overflow-hidden rounded-lg bg-emerald-950 shadow-lg shadow-emerald-950/15 transition-all duration-300 group-hover:shadow-xl">
                                        <div className="p-6">
                                            <span className="text-4xl font-bold text-emerald-500">{section.number}</span>
                                            <h3 className="mt-4 text-xl font-bold text-white">{section.label}</h3>
                                            <p className="mt-2 text-emerald-100">{section.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default page;
