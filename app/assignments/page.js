import Link from 'next/link';
import Card from './card';
import assignments from './assignments.json';

const Page = () => {
  return (
    <main className="bg-gray-100 w-screen h-screen overflow-scroll p-5">
      <h1 className='text-cyan-500 text-3xl font-bold m-2'>Assignments</h1>
      <div className='flex gap-6 flex-wrap justify-center mt-16'>
        {assignments.map((assignment => {
          return(
            <Card key={assignment.id} url={assignment.url} image={assignment.image} name={assignment.name}/>
          );
        }))}
      </div>
      <Link
        href="/"
        className="w-full lg:w-48 mt-7 inline-block rounded-lg border border-transparent bg-gray-400 py-3 px-5 text-center font-medium text-white hover:bg-gray-500"
      >
        Back
      </Link>
    </main>
  );
}

export default Page;