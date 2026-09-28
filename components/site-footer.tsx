import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          {'© '}
          {new Date().getFullYear()} {profile.name}. Built with passion for AI.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="animate-float-slow absolute -left-40 -top-40 size-[36rem] rounded-full bg-primary/25 blur-[120px]" />
      <div
        className="animate-float-slow absolute -right-40 top-1/3 size-[32rem] rounded-full bg-accent/20 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-float-slow absolute -bottom-40 left-1/3 size-[28rem] rounded-full bg-primary/15 blur-[120px]"
        style={{ animationDelay: '-11s' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/3%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/3%)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    </div>
  )
}
