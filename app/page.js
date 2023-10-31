"use client"
import Link from 'next/link';

import { useUserAuth } from "./week8/_utils/auth-context";
import StudentInfo from './StudentInfo';
import HeroGrid from './HeroGrid';

const Home = () => {
  const { user, firebaseSignOut } = useUserAuth();

  return (
    <main className="bg-white h-screen overflow-scroll lg:overflow-hidden">
      {user && (
        <div className="bg-white text-indigo-500 p-3 text-center drop-shadow md:drop-shadow-none">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <p className="font-bold lg:pl-9">Welcome, {user.displayName}</p>
              <button
                onClick={firebaseSignOut}
                className="bg-white border border-indigo-500 text-sm px-3 py-2 rounded-md hover:bg-violet-100 focus:outline-none"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Web Development 2</h1>
            <p className="mt-4 text-xl text-gray-500">On this page you will find all the assignments for Web Development class.</p>
            <StudentInfo />
            <div className="flex flex-col gap-1">
              <Link
                href="/assignments"
                className="w-full mt-7 mb-12 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
              >
                Assignments
              </Link>
            </div>
          </div>
          <HeroGrid />
        </div>
      </div>
    </main>
  )
}

export default Home;
