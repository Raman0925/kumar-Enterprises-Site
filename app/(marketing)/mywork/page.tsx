import Link from "next/link";
import { MoveRight } from "lucide-react";
import Particles from "@/components/magicui/particles";
import { BorderBeam } from "@/components/magicui/border-beam";

const apps = [
    {
        title: "Ludo",
        description: "A premium business platform for modern enterprises with high-performance features.",
        href: "#",
        tech: ["Next.js", "Tailwind CSS", "Magic UI"],
    },
    {
        title: "Vibe Code",
        description: "An AI-powered development environment that learns from your coding style.",
        href: "#",
        tech: ["React", "TypeScript", "OpenAI"],
    },
    {
        title: "EcoTrack",
        description: "Sustainability monitoring tool for small businesses to track their carbon footprint.",
        href: "#",
        tech: ["Next.js", "PostgreSQL", "Prismic"],
    },
    {
        title: "Nova CRM",
        description: "A minimalist CRM designed for freelancers and small creative agencies.",
        href: "#",
        tech: ["Next.js", "Supabase", "Framer Motion"],
    },
];

const websites = [
    {
        title: "Kumar Enterprises",
        description: "The official platform for Kumar Enterprises, showcasing premium web and mobile solutions.",
        href: "/",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Magic UI"],
    },
];

export default function AppsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden pt-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                        My Work
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl text-balance">
                        A collection of high-performance websites and applications Iapos;ve developed.
                    </p>
                </div>

                {/* Websites Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 border-b pb-2">Websites</h2>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                        {websites.map((site, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 transition-all hover:shadow-lg dark:bg-black/40"
                            >
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{site.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{site.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {site.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center pt-4">
                                    <Link
                                        href={site.href}
                                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        Visit Website <MoveRight className="h-4 w-4" />
                                    </Link>
                                </div>
                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Apps Section */}
                <div className="mt-20 mb-20">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 border-b pb-2">Applications</h2>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                        {apps.map((app, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 transition-all hover:shadow-lg dark:bg-black/40"
                            >
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{app.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{app.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {app.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center pt-4">
                                    <Link
                                        href={app.href}
                                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        View Project <MoveRight className="h-4 w-4" />
                                    </Link>
                                </div>
                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Particles
                className="absolute inset-0 -z-10"
                quantity={50}
                ease={70}
                size={0.05}
                staticity={40}
                color={"#ffffff"}
            />
        </div>
    );
}
