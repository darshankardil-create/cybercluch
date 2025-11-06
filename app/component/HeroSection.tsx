'use client';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
     
        <section className="relative -mx-sm overflow-hidden bg-white lg:h-179 border-x-[1.5px] pt-24 lg:pt-32">
            <div className="absolute inset-0 z-10 h-full w-full bg-[url('https://www.clutch.security/_next/static/media/noise.614619f5.png')] opacity-20"></div>
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-[6] h-full w-full -translate-x-1/2">
              
            </div>                                                                                                      
            <div>
                {/*relative overflow-hidden bg-white pb-6 pt-12 lg:pt-16 */}<div className="relative w-full aspect-[1320/500] ">    {/*imp   h/w */}
       
                    <div className="absolute inset-0 z-0">
                 <video
  src="circle.mp4" 
  autoPlay
  muted
  loop
  className="lg:h-full lg:w-full object-cover  "
>
  Your browser does not support the video tag.
</video>

   
                    </div>

               

                    <div className="section-hero-illustration pointer-events-none relative mt-8 select-none">
                         <div className="section-hero-illustration__space mx-auto flex aspect-[1126/456] w-full max-w-4xl select-none justify-center"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
