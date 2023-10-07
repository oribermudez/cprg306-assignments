import Image from 'next/image';
import Link from 'next/link';

const Card = ({ url, image, name }) => {
  return (
    <div className='relative text-gray-600 flex flex-col justify-center drop-shadow-lg w-48 bg-white rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <Link href={url} className='text-gray-600 flex flex-col justify-center w-48'>
        <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-lg' />
        <div className='w-48 overflow-hidden'>
          <Image src={image} width={240} height={144} alt={name} />
        </div>
        <h4 className='py-2 text-center'>{name}</h4>
      </Link>
    </div>
  );
}

export default Card;
