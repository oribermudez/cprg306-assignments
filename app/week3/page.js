import Link from 'next/link';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-white w-screen h-screen overflow-scroll p-5">
      <h1 className='text-cyan-500 text-3xl font-bold m-2'>My Shopping List</h1>
      <ItemList />
      <Link
        href="/"
        className="mt-7 inline-block rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-center font-medium text-white hover:bg-cyan-500"
      >
        Back
      </Link>
    </main>
  );
}

export default Page;