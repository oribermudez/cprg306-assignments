import Image from 'next/image';
const HeroGrid = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl flex justify-center">
      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
              <Image src="/assets/skull.jpg" alt="" width={144} height={164} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/ninja.jpg" alt="" width={144} height={164} className="h-full w-full object-cover object-center"/>
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/astronaut.jpg" alt="" width={144} height={164} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/babydragon.jpg" alt="" width={144} height={164} className="h-full w-full object-cover object-center"/>
            </div>
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/robot.jpg" alt="" width={144} height={164} className="h-full w-full object-cover object-center"/>
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/girlonfire.png" alt="" width={144} height={164} className="h-full w-full object-cover object-center" />
            </div>
            <div className="h-44 w-24 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
              <Image src="/assets/anonymous.png" alt="" width={144} height={164} className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroGrid;