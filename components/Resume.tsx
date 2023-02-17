import { Briefcase, FileArrowDown } from '../icons/light.tsx'
import { Button, ButtonLink } from './Button.tsx'

type ResumeTimeLabel = {
  label: string
  dateTime: string
}

type ResumeType = {
  company: string
  title: string
  logo: string
  start: string | ResumeTimeLabel
  end: string | ResumeTimeLabel
}

export type IconProps = {
  className?: string
}

const resume: ResumeType[] = [
  {
    company: 'Ninja Van',
    title: 'Senior Software Engineer',
    logo: '/ninjavan.png',
    start: '2018',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Bukalapak',
    title: 'Software Engineer',
    logo: '/bukalapak.png',
    start: '2017',
    end: '2018',
  },
  {
    company: 'Xtremax',
    title: 'Software Development Manager',
    logo: '/xtremax.jpg',
    start: '2015',
    end: '2017',
  },
  {
    company: 'Qiwary Usaha Nusantara',
    title: 'Programmer',
    logo: '/logo.svg',
    start: '2014',
    end: '2014',
  },
]

export function Resume() {
  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <Briefcase className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className='flex gap-4'>
            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
              <image src={role.logo} alt='' className='h-7 w-7' />
            </div>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{role.company}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role.title}</dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                aria-label={`${typeof role.start === 'string' ? role.start : role.start.label} until ${
                  typeof role.end === 'string' ? role.end : role.end.label
                }`}
              >
                <time dateTime={typeof role.start === 'string' ? role.start : role.start.dateTime}>
                  {typeof role.start === 'string' ? role.start : role.start.label}
                </time>{' '}
                <span aria-hidden='true'>—</span>{' '}
                <time dateTime={typeof role.end === 'string' ? role.end : role.end.dateTime}>
                  {typeof role.end === 'string' ? role.end : role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <ButtonLink
        href='/zain-fathoni-cv.pdf'
        download='Zain Fathoni CV.pdf'
        variant='secondary'
        className='group mt-6 w-full'
      >
        Download CV
        <FileArrowDown className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </ButtonLink>
    </div>
  )
}
