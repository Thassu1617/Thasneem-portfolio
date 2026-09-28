import { BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications } from '@/lib/portfolio-data'

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Courses and certifications that strengthened my foundation in AI, data, and development."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <li key={cert.title}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <div className="glass group flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <BadgeCheck className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {cert.issuer} <span aria-hidden="true">·</span> {cert.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
