import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: 'Palagiri Thasneem', href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: '@palagirithasneem', href: profile.github, icon: GithubIcon, external: true },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
            <div
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
                <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
                  {"Let's build something "}
                  <span className="text-gradient">intelligent</span> together
                </h2>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {
                    "Whether it's an internship, a project collaboration, or just a conversation about AI, my inbox is always open."
                  }
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  {profile.location}
                </p>
                <div className="mt-8">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Say hello
                  </a>
                </div>
              </div>

              <ul className="flex flex-col gap-4">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground">
                        <channel.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-muted-foreground">{channel.label}</span>
                        <span className="block truncate font-medium">{channel.value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
