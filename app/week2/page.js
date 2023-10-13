import Link from 'next/link';
import StudentInfo from "../StudentInfo";

const Page = () => {
  return (
    <main className="bg-black w-screen h-screen">
      <h2>My Shopping List</h2>
      <StudentInfo />
      <Link
        href="/assignments"
        className="w-full lg:w-48 mt-7 inline-block rounded-lg border border-transparent bg-gray-400 py-3 px-5 text-center font-medium text-white hover:bg-gray-500"
      >
        Back
      </Link>
    </main>
  );
}

export default Page;