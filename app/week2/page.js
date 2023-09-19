import Link from 'next/link';
import StudentInfo from "../StudentInfo";

const Page = () => {
  return (
    <section>
      <h2>My Shopping List</h2>
      <StudentInfo />
      <Link
        href="/"
        className="mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
      >
        Back
      </Link>
    </section>
  );
}

export default Page;