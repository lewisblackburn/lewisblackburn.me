import * as React from 'react'
import Image from 'next/image'

const personalAchievements = [
  { title: 'Expected First Class Degree in Computer Science from York St. John University', subtitle: '2025' },
  { title: 'Completed Multiple Freelance Web Development Projects', subtitle: '2024' },
  { title: 'Appointed Social Secretary at Rowing Club, Leading Club Events and Activities', subtitle: '2023' },
  { title: 'Graduated from Wakefield College', subtitle: '2020' },
  { title: 'Found a Passion for Web Development', subtitle: '2015' },
]

export function About() {
  return (
    <section id='about' className='my-32 scroll-m-20'>
      <div className='max-w-3xl'>
        <h2 className='text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl'>
          About <span className='underline decoration-yellow-400 underline-offset-4'>Me</span>.
        </h2>
      </div>

      <div className='flex flex-col justify-between lg:flex-row'>
        <p className='my-8 text-neutral-600 dark:text-neutral-400 lg:w-6/12 lg:text-lg'>
          I recently graduated from York St John University with a bachelor’s degree in computer science (first‑class
          hons, 2025). I consider myself to be an ambitious, hard‑working individual who is passionate about web
          development. I have real‑world experience building websites as a freelance web developer and have completed
          numerous work placement sessions throughout my time in education and outside education with online courses
          related to the industry. I am seeking a junior software engineering role where I can develop my personal
          skills, be surrounded by those who love development as much as I do, and to grow alongside senior developers
        </p>
        <div className='mt-8 h-full lg:w-5/12'>
          <div className='grid grid-flow-row grid-cols-2 gap-6 lg:gap-8'>
            <Image
              src='/images/home/york-walls.webp'
              alt=''
              loading='lazy'
              width={184}
              height={184}
              className='m-auto hidden size-[184px] -rotate-3 rounded-xl object-cover drop-shadow-2xl transition-all duration-200 hover:rotate-0 lg:block'
            />

            <Image
              src='/images/home/vinyl-wall.webp'
              alt=''
              loading='lazy'
              width={184}
              height={184}
              className='m-auto size-full rotate-90 rounded-lg object-cover drop-shadow-2xl lg:size-[184px]'
            />
            <Image
              src='/images/home/animated.gif'
              alt=''
              loading='lazy'
              unoptimized
              width={184}
              height={184}
              className='m-auto size-full rounded-lg object-cover drop-shadow-2xl lg:size-[184px]'
            />

            <Image
              src='/images/home/hike-2.webp'
              alt=''
              loading='lazy'
              width={500}
              height={500}
              className='m-auto size-full rounded-lg object-cover drop-shadow-2xl lg:size-[184px]'
            />

            <Image
              src='/images/home/frat-night-2.webp'
              alt=''
              loading='lazy'
              width={500}
              height={500}
              className='m-auto size-full rounded-lg object-cover drop-shadow-2xl lg:hidden lg:size-[184px]'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between lg:flex-row'>
        <div className='relative mr-auto h-full lg:w-5/12'>
          <div className='my-8 flex flex-col gap-8 lg:grid lg:grid-cols-2'>
            <Image
              src='/images/home/frat-night-2.webp'
              alt=''
              loading='lazy'
              width={500}
              height={500}
              className='m-auto hidden size-[184px] rounded-lg object-cover drop-shadow-2xl lg:block'
            />

            <Image
              src='/images/home/frat-night.webp'
              alt=''
              loading='lazy'
              width={500}
              height={500}
              className='m-auto hidden size-[184px] rounded-lg object-cover drop-shadow-2xl lg:block'
            />
            <Image
              src='/images/home/rowing.webp'
              alt=''
              loading='lazy'
              width={1000}
              height={500}
              className='col-span-2 m-auto size-full rounded-lg object-cover drop-shadow-2xl transition-all duration-200 hover:rotate-0 lg:h-[212px] lg:w-[414px]'
            />
          </div>
        </div>
        <div className='mt-8 lg:w-6/12'>
          <ol className='relative ml-2 border-l border-neutral-200 dark:border-neutral-700'>
            {personalAchievements.map((achievement) => (
              <li className='mb-8 ml-6' key={achievement.title}>
                <div className='absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-yellow-500' />
                <h3 className='mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>{achievement.title}</h3>
                <p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>{achievement.subtitle}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
