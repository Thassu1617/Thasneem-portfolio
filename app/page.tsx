import { AboutSection } from '@/components/about-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ContactSection } from '@/components/contact-section'
import { EducationSection } from '@/components/education-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteHeader } from '@/components/site-header'
import { BackgroundGlow, SiteFooter } from '@/components/site-footer'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <>
      <BackgroundGlow />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
