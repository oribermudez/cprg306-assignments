import Image from 'next/image';
import Link from 'next/link';

const Card = ({url, image, name}) => {
  return (
    <div className='text-gray-600 flex flex-col justify-center drop-shadow-lg w-72 bg-white rounded-lg overflow-hidden'>
      <Link  href={url} className='text-gray-600 flex flex-col justify-center w-72'>
        <div className='w-80 lg:w-96 h-36 overflow-hidden'>
          <Image src={image} width={288} height={144} alt={name}/>
        </div>
        <h4 className='py-2 text-center'>{name}</h4>
      </Link>
    </div>
  );
}

export default Card;