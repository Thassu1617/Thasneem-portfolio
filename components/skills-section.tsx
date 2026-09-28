import { Brain, Code, Database, GitBranch } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

const icons = {
  brain: Brain,
  database: Database,
  code: Code,
  git: GitBranch,
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical skills"
          title="My toolkit"
          description="The languages, technologies, and tools I use to design, build, and ship AI-driven applications."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-primary/40">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-5">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div
                          className="h-2 overflow-hidden rounded-full bg-white/5"
                          role="progressbar"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="h-full rounded-full bg-brand-gradient"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10">
          <ul className="flex flex-wrap justify-center gap-3" aria-label="All skills">
            {skillGroups
              .flatMap((g): readonly { name: string }[] => g.skills)
              .map((skill) => (
                <li
                  key={skill.name}
                  className="glass rounded-full px-4 py-2 text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  {skill.name}
                </li>
              ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
