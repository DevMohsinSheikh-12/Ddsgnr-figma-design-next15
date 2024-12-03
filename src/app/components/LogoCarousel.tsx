import React from 'react';
import Image from 'next/image';

const LogoCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden lg:flex md:flex-row md:items-center  py-10 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6 md:hidden px-8 ">Trusted by the world&apos;s best companies &quot;social proof to build credibility&quot;</h2>
      <h2 className=" invisible md:visible md:px-16 text-2xl font-bold mb-6 ">Trusted by 2000+ companies worldwide.</h2>

      <div className="w-full overflow-hidden">
        <div className="flex w-[200%] animate-scroll xl:animate-none">
          {/* Duplicate logos for seamless loop */}
          <div className="flex space-x-8 sm:space-x-12 xl:hidden">
            <Image src="/images/logo1.svg" alt="Logo 1" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo2.svg" alt="Logo 2" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo3.svg" alt="Logo 3" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo4.svg" alt="Logo 4" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo5.svg" alt="Logo 5" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo6.svg" alt="Logo 6" width={100} height={100} className="h-12 sm:h-16" />
          </div>

          {/* Second set of logos for infinite scrolling */}
          <div className="flex space-x-8 sm:space-x-12">
            <Image src="/images/logo1.svg" alt="Logo 1" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo2.svg" alt="Logo 2" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo3.svg" alt="Logo 3" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo4.svg" alt="Logo 4" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo5.svg" alt="Logo 5" width={100} height={100} className="h-12 sm:h-16" />
            <Image src="/images/logo6.svg" alt="Logo 6" width={100} height={100} className="h-12 sm:h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
