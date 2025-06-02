import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { UserIcon } from 'lucide-react'

import { UtmMediums } from '@/types/links'
import { testimonials } from '@/config/testimonials'
import { cn } from '@/lib/utils'

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  const isPlaceholder = testimonial.name.length === 0

  if (isPlaceholder) {
    return (
      <li className='text-sm leading-6'>
        <figure className='relative flex flex-col rounded-lg border bg-muted p-6'>
          <figcaption className='flex items-center space-x-4'>
            <div className='size-[60px] flex-none rounded-xl bg-secondary object-cover' />
            <div className='flex flex-col gap-2'>
              <div className='h-6 w-24 rounded-md bg-secondary' />
              <div className='h-4 w-36 rounded-md bg-secondary' />
            </div>
          </figcaption>
          <div className='mt-6 h-16 w-full rounded-md bg-secondary' />
        </figure>
      </li>
    )
  } else {
    return (
      <li className='text-sm leading-6'>
        <figure className='relative flex flex-col rounded-lg border bg-muted p-6'>
          <figcaption className='flex items-center space-x-4'>
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={60}
                height={60}
                className='size-14 flex-none rounded-xl object-cover'
                loading='lazy'
                decoding='async'
              />
            ) : (
              <div className='flex size-12 flex-none items-center justify-center rounded-xl bg-border'>
                <UserIcon className='size-6 text-muted-foreground' />
              </div>
            )}
            <div className='flex-auto'>
              <div className='text-base font-semibold'>
                <span className='absolute inset-0' />
                {testimonial.name}
              </div>
              <div className='mt-0.5 leading-tight dark:text-muted-foreground'>{testimonial.title}</div>
            </div>
          </figcaption>
          <blockquote className='mt-6 text-muted-foreground'>
            <p>"{testimonial.testimonial}"</p>
          </blockquote>
        </figure>
      </li>
    )
  }
}

type Props = {
  className?: string
}

export function Testimonials({ className }: Props) {
  return (
    <section id='testimonials' className={cn('my-32', className)}>
      {/* Testimonial expanded */}
      <div className='relative isolate overflow-hidden px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <Link
            href={UtmUrl('https://drive2learn.co.uk', {
              medium: UtmMediums.Homepage,
              content: 'hero',
            })}>
            <Image
              className='mx-auto'
              src='/images/testimonials/drive2learn.svg'
              alt='Drive 2 Learn logo'
              width={200}
              height={40}
            />
          </Link>
          <figure className='mt-10'>
            <blockquote className='text-accent-7 text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9'>
              <p>
                "Drive 2 Learn was a mere info page from Google Sites. We started expanding but our web page remained
                the same for years, until{' '}
                <strong className='underline decoration-sky-400 underline-offset-4'>Lewis turned up</strong>. He
                transformed our website to be{' '}
                <strong className='underline decoration-sky-400 underline-offset-4'>
                  professional, well-designed and functional
                </strong>
                . Lewis implemented{' '}
                <strong className='underline decoration-sky-400 underline-offset-4'>
                  his own ideas and forward-thinking content.
                </strong>{' '}
                {/* that we could never have thought of. */}
                {/* Additionally, made our brand image{' '}
                <strong className='underline decoration-sky-400 underline-offset-4'>explode on the internet</strong> and
                in our first week of launching our new website, we had{' '}
                <strong className='underline decoration-sky-400 underline-offset-4'>way too many enquiries</strong> that
                we could handle.{' '} */}
                Thank you very much Lewis for working with us and taking us to the next level ."
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              {/* <Image */}
              {/*     className='mx-auto size-10 rounded-full' */}
              {/*     src='/images/testimonials/alex-psyllos.webp' */}
              {/*     width={40} */}
              {/*     height={40} */}
              {/*     alt='Alex Psyllos' */}
              {/* /> */}
              <div className='mt-4 flex flex-col items-center justify-center text-base md:flex-row md:gap-3'>
                <div className='font-semibold'>Alex Psyllos</div>
                <svg
                  viewBox='0 0 2 2'
                  width={3}
                  height={3}
                  aria-hidden='true'
                  className='hidden fill-gray-300 md:block'>
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className='text-secondary-foreground/50'>Founder @ Drive 2 Learn</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Testimonial card */}
      <div className='grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-3'>
        <ul className='space-y-4'>
          {testimonials.slice(0, 2).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
        <ul className='space-y-4'>
          {testimonials.slice(2, 4).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
        <ul className='space-y-4'>
          {testimonials.slice(4, 6).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
      </div>
    </section>
  )
}
