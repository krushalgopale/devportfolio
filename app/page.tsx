import { About, Contact } from '@/components/about-contact'
import { Intro } from '@/components/intro'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[46rem] flex-col justify-center gap-6 px-5 py-10 sm:gap-5 sm:px-6 sm:py-6">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="pt-1 text-center text-[11px] text-muted-foreground/70">© 2026 Krushal Gopale</footer>
    </main>
  )
}
