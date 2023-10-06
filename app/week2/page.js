import Link from 'next/link';
import StudentInfo from "../StudentInfo";

const Page = () => {
  return (
    <main className="bg-black w-screen h-screen">
      <h2>My Shopping List</h2>
      <StudentInfo />
      <Link
        href="/assignments"
        className="mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
      >
        Back
      </Link>
    </main>
  );
}

export default Page;