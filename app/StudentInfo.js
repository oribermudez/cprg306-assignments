import Link from 'next/link';

const StudentInfo = () => {
  return (
    <>
      <p className='text-gray-400'>CPRG-306 B</p>
      <p className="text-violet-500 mt-3">By Ori Bermudez</p>
      <Link
        href="https://github.com/oribermudez"
        className="mt-7 inline-block w-full rounded-md border text-center border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
        target="_blank"
      >
        GitHub Repository
      </Link>
    </>
  );
}

export default StudentInfo;