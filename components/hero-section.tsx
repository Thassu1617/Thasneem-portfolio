import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-svh items-center px-4 pb-20 pt-32 md:pt-36">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
            {profile.degree}
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {"Hi, I'm "}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 font-heading text-xl font-medium text-foreground/90 md:text-2xl">
            {profile.title} <span className="text-muted-foreground">·</span>{' '}
            <span className="text-muted-foreground">Building intelligent software</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-accent/30"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-colors hover:bg-white/10"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <span className="ml-2 h-px w-12 bg-border" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">Open to internships</span>
          </div>
        </div>

        <HeroCodeCard />
      </div>
    </section>
  )
}

function HeroCodeCard() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div className="glass animate-float-card relative overflow-hidden rounded-3xl">
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <span className="size-3 rounded-full bg-[oklch(0.68_0.2_25)]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[oklch(0.82_0.16_85)]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[oklch(0.75_0.17_150)]" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">thasneem.py</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-sm leading-7">
          <code>
            <span className="text-accent">class</span> <span className="text-primary">Developer</span>:{'\n'}
            {'  '}name = <span className="text-[oklch(0.8_0.14_160)]">{'"Palagiri Thasneem"'}</span>
            {'\n'}
            {'  '}focus = [<span className="text-[oklch(0.8_0.14_160)]">{'"AI"'}</span>,{' '}
            <span className="text-[oklch(0.8_0.14_160)]">{'"ML"'}</span>,{' '}
            <span className="text-[oklch(0.8_0.14_160)]">{'"RAG"'}</span>]{'\n'}
            {'  '}stack = [<span className="text-[oklch(0.8_0.14_160)]">{'"Python"'}</span>,{' '}
            <span className="text-[oklch(0.8_0.14_160)]">{'"SQL"'}</span>,{' '}
            <span className="text-[oklch(0.8_0.14_160)]">{'"JS"'}</span>]{'\n\n'}
            {'  '}
            <span className="text-accent">def</span> <span className="text-primary">build</span>(self, idea):{'\n'}
            {'    '}
            <span className="text-accent">return</span> ai_solution(idea)
            <span className="animate-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" aria-hidden="true" />
          </code>
        </pre>
        <div className="grid grid-cols-3 border-t border-border">
          {[
            { value: '5+', label: 'Projects' },
            { value: '9', label: 'Core skills' },
            { value: '6', label: 'Certificates' },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-4 text-center [&:not(:last-child)]:border-r [&:not(:last-child)]:border-border">
              <p className="font-heading text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
