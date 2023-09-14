import Link from 'next/link';
import StudentInfo from "../StudentInfo";

const Page = () => {
  return (
    <section>
      <h2>My Shopping List</h2>
      <StudentInfo />
      <Link href="/">Back</Link>
    </section>
  );
}

export default Page;