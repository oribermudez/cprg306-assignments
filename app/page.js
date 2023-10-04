import Link from 'next/link';
import StudentInfo from './StudentInfo';
import HeroGrid from './HeroGrid';

export default function Home() {
  return (
    <main className="bg-white h-screen overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Web Development 2</h1>
            <p className="mt-4 text-xl text-gray-500">On this page you will find all the assignments for Web Development class.</p>
            <StudentInfo />
            <div className="flex flex-col gap-1">
              <Link
                href="/week2"
                className="w-2/5 mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
              >
                Week 2
              </Link>
              <Link
                href="/week3"
                className="w-2/5 mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
              >
                Week 3
              </Link>
              <Link
                href="/week4"
                className="w-2/5 mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
              >
                Week 4
              </Link>
            </div>
            <HeroGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
