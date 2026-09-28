import { Lightbulb, Rocket, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  {
    icon: Lightbulb,
    title: 'Curious problem solver',
    text: 'I enjoy breaking down real-world problems and finding where AI can make a genuine difference.',
  },
  {
    icon: Rocket,
    title: 'Hands-on builder',
    text: 'From resume generators to face recognition, I learn best by shipping complete projects end to end.',
  },
  {
    icon: Target,
    title: 'Growth focused',
    text: 'Continuously sharpening my skills in ML, LLM applications, and clean, maintainable code.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title="Turning data and ideas into intelligent products" />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-3xl p-8 md:p-10">
              <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                {"I'm Palagiri Thasneem, a BTech Computer Science and Engineering student specializing in "}
                <span className="font-semibold text-gradient">Artificial Intelligence and Machine Learning</span>.
              </p>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {
                  "My work sits at the intersection of machine learning and software development. I've built AI tools that help students prepare for interviews, craft professional resumes, verify certificates, and get instant answers through a retrieval-augmented college chatbot."
                }
              </p>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {
                  "I'm comfortable across the stack, with Python and ML on the backend, SQL for data, and HTML, CSS, and JavaScript on the web. I'm actively looking for internships and collaborative opportunities where I can learn from experienced engineers and contribute to meaningful AI products."
                }
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="glass group flex gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient">
                    <item.icon className="size-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
