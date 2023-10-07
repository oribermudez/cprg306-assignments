import Image from 'next/image';
import Link from 'next/link';

const Card = ({ url, image, name }) => {
  return (
    <div className='relative text-gray-600 flex flex-col justify-center drop-shadow-lg w-72 bg-white rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <Link href={url} className='text-gray-600 flex flex-col justify-center w-72'>
        <div className='w-80 lg:w-96 h-36 overflow-hidden'>
          <Image src={image} width={288} height={144} alt={name} />
        </div>
        <h4 className='py-2 text-center'>{name}</h4>
      </Link>
      <div className='absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity rounded-lg'></div>
    </div>
  );
}

export default Card;
