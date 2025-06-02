import { About } from '@/components/home/about'
import { BlogPosts } from '@/components/home/blog-posts'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import { Services } from '@/components/home/services'
import { Skills } from '@/components/home/skills'
import { Testimonials } from '@/components/home/testimonials'
import { WorkExperience } from '@/components/home/work-experience'

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <WorkExperience />

      <Skills />

      <Testimonials />

      <Projects />

      <Services />

      <BlogPosts />
    </>
  )
}
