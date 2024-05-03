'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoveRight } from 'lucide-react';

const jobPositions = [
  {
    timeline: 'Oct 2023 — Jan 2024',
    currentPosition: 'Android Developer',
    place: 'Medicify',
    previousPositions: [''],
    description:
      'Over 4 months, I developed and added 4 new features to an Android app. Upon publishing it on the Google Play Store, the app received over 100 downloads and a perfect 5-star rating. I also played a key role in identifying and fixing technical issues, ensuring optimal performance and quality.',
    skills: [
      'Kotlin',
      'Android SDK',
      'Firebase ',
      'Koin',
      'Jetpack Compose',
      'Rest Api',
    ],
  },
  {
    timeline: 'Feb 2023 — Jul 2023',
    currentPosition: 'Android Developer',
    place: 'Bangkit Academy',
    previousPositions: ['Kampus Merdeka'],
    description:
      'I achieved a Distinction Graduate status, ranking among the top 10% of graduates, with an average score of 91.9 out of 100. Over a span of 6 months, I invested 914 hours into learning both Android development and soft skills. Throughout this period, I successfully completed courses in Android development, covering beginner to advanced levels, with an average rating of 4 out of 5 stars for final projects.',
    skills: [
      'Kotlin',
      'Android SDK',
      'Firebase',
      'UI/UX',
      'CI/CD',
      'Room',
      'Dagger Hilt',
      'Rest Api',
    ],
  },
  {
    timeline: 'Aug 2022 - Dec 2022',
    currentPosition: 'Multiplatform & BackEnd',
    place: 'Dicoding Indonesia',
    previousPositions: ['Kampus Merdeka'],
    description:
      'I completed my studies with an average score of 88.9 out of 100. Over a span of 5 months, I dedicated 918 hours to mastering Flutter development and refining soft skills. Throughout this period, I successfully finished Flutter courses ranging from basic to advanced levels, achieving an average rating of 4 out of 5 stars for final projects.',
    skills: [
      'Flutter',
      'Dart',
      'Javascript',
      'Node.js',
      'UI/UX',
      'CI/CD',
      'Firebase',
      'SQLite',
      'Express.js',
      'Figma',
      'Rest Api',
    ],
  },
];

export default function ExpCard() {
  return (
    <section id='experience' className='scroll-mt-16 lg:mt-16'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest lg:sr-only'>
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className='lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200'
          >
            <CardHeader className='h-full w-full p-0'>
              <CardTitle className='text-base text-slate-400 whitespace-nowrap'>
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col p-0'>
              <p className='text-primary font-bold '>
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className='text-slate-400 text-sm font-bold'>
                  {position}
                </p>
              ))}
              <CardDescription className='py-3 text-muted-foreground'>
                {job.description}
              </CardDescription>
              <CardFooter className='p-0 flex flex-wrap gap-2'>
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className='lg:px-12 mt-12'>
        <a
          className='inline-flex items-center font-medium leading-tight text-foreground group'
          href='/cv_maorid_manarul_hidayat.pdf'
        >
          <span className='border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none'>
            View Full Resume
          </span>
          <MoveRight className='ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
        </a>
      </div>
    </section>
  );
}
