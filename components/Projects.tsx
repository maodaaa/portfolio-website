'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoveUpRight } from 'lucide-react';

const jobProjects = [
  {
    imagePath: '/medicify.png',
    title: 'Medicify',
    description:
      "Medicify is a healthcare application specifically designed to improve access to medical information for visually impaired individuals in Indonesia. Its standout feature 'Scan Medicine' allows users to scan medication and automatically receive detailed information. The app also supports the TalkBack feature on Android to facilitate interaction for users with visual impairments.",
    skills: [
      'Android',
      'Firebase Authentication',
      'Firebase Crashlytics',
      'Firebase Analytics',
      'Firebase Cloud Messengig',
      'Room Database',
      'Kotlin',
      'Koin',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.medicify.app&hl=id',
  },
  {
    imagePath: '/anime_verse.png',
    title: 'Anime Verse',
    description:
      'Anime Verse is an Indonesian-language anime streaming application that provides easy and quick access to find the latest updates on currently airing or completed anime. With search features based on title and genre, users can easily discover their favorite anime. Additionally, users can save anime to their list of favorites for easier access in the future.',
    skills: ['Flutter', 'Dart', 'Bloc', 'Get.it', 'SQLite', 'Rest Api'],
    link: '',
  },
  {
    imagePath: '/github_user.png',
    title: 'Github User',
    description:
      'Github User is an Android application leveraging the Github API, enabling users to explore Github profiles, mark them as favorites, and store relevant data locally using Room. This project was developed as part of the Belajar Fundamental Aplikasi Android course at Dicoding Indonesia, focusing on integrating APIs and databases into Android applications. I crafted this project from the ground up and achieved a perfect 5-star rating for its submission.',
    skills: ['Android', 'Kotlin', 'Room Database', 'Rest Api'],
    link: '',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-16 lg:mt-16'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest lg:sr-only'>
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:cursor-pointer'
          >
            <Card className='group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200'>
              <CardHeader className='h-full w-full lg:w-1/3 mb-4 p-0'>
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className='bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]'
                />
              </CardHeader>
              <CardContent className='flex flex-col p-0 w-full lg:w-2/3'>
                <p className='text-primary font-bold'>
                  {project.title}{' '}
                  <MoveUpRight className='ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none' />
                </p>
                <CardDescription className='py-3 text-muted-foreground'>
                  {project.description}
                </CardDescription>
                <CardFooter className='p-0 flex flex-wrap gap-2'>
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
