import { ArrowUpRight, Award, Bot, FileText, Mic, ScanFace } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile, projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const icons = {
  file: FileText,
  mic: Mic,
  award: Award,
  bot: Bot,
  scan: ScanFace,
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of AI and full-stack projects exploring language models, retrieval, and computer vision."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => {
            const Icon = icons[project.icon]
            return (
              <Reveal
                key={project.name}
                delay={(i % 3) * 100}
                className={cn(project.featured ? 'lg:col-span-3' : 'lg:col-span-2')}
              >
                <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient shadow-lg shadow-primary/20">
                      <Icon className="size-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative mt-6 flex-1">
                    <p className="text-sm text-primary">{project.tagline}</p>
                    <h3 className="mt-1 text-xl font-bold md:text-2xl">{project.name}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>

                  <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/80">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                  >
                    <GithubIcon className="size-4" />
                    View on GitHub
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{`(${project.name})`}</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
