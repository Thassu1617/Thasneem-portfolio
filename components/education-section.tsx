import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Education" title="Academic journey" />

        <ol className="relative flex flex-col gap-8 border-l border-border pl-8 md:pl-10">
          {education.map((item, i) => (
            <li key={item.degree} className="relative">
              <span
                className="absolute -left-[calc(2rem+1.125rem+0.5px)] top-6 flex size-9 items-center justify-center rounded-full bg-brand-gradient ring-8 ring-background md:-left-[calc(2.5rem+1.125rem+0.5px)]"
                aria-hidden="true"
              >
                <GraduationCap className="size-4 text-primary-foreground" />
              </span>
              <Reveal delay={i * 120}>
                <div className="glass rounded-2xl p-6 md:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold leading-snug">{item.degree}</h3>
                    <span className="w-fit shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/80">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
