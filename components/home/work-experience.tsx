import Image from 'next/image'
import Link from 'next/link'
import { allExperiences, Experience } from '@/.contentlayer/generated'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight, IconFileText } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'

import { Button } from '../ui/button'

export function WorkExperience() {
  const sortedExperiences = allExperiences.sort((a: Experience, b: Experience) => {
    const dateA = a.startDate === 'present' ? new Date() : new Date(a.startDate)
    const dateB = b.startDate === 'present' ? new Date() : new Date(b.startDate)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section id='work-experience' className='my-32 flex flex-col'>
      <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
        <div className='flex-auto'>
          <h2 className='text-balance text-3xl font-bold'>
            My <strong className='underline decoration-sky-400 underline-offset-4'>Work Experience</strong>
          </h2>
          <p className='mt-2 text-balance text-muted-foreground'>
            A timeline of my professional journey and the roles I've taken on
          </p>
        </div>

        <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
          <Link
            href={UtmUrl(Routes.Resume, {
              medium: UtmMediums.Homepage,
              content: 'work_experience',
            })}>
            <IconFileText className='mr-2 inline-block size-5' />
            View Resume
            <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>

      <div className='mt-8'>
        <ol className='relative ml-2 border-l border-neutral-200 dark:border-neutral-700'>
          {sortedExperiences.map((experience) => (
            <li className='mb-8 ml-6' key={experience._id}>
              <div className='absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-sky-400' />
              <h3 className='mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>{experience.title}</h3>
              <p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>{experience.company}</p>
              <p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>{experience.location}</p>
              <p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>
                {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} -{' '}
                {experience.endDate === 'present'
                  ? 'Present'
                  : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <p className='mt-2 text-base font-normal text-neutral-500 dark:text-neutral-400'>
                {experience.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
