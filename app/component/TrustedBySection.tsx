'use client';
import React from 'react';
import Image from 'next/image'

const logos = [
    { name: 'NTT Data', src: 'https://www.clutch.security/_next/static/media/ntt-data.81a1e120.svg', width: 152, height: 40 },
    { name: 'Fluidra', src: 'https://www.clutch.security/_next/static/media/fluidra.bbb45455.svg', width: 200, height: 40 },
    { name: 'OpenWeb', src: 'https://www.clutch.security/_next/static/media/openweb.281ad83f.svg', width: 157, height: 40 },
    { name: 'Cedar', src: 'https://www.clutch.security/_next/static/media/cedar.ee7626ab.svg', width: 140, height: 40 }
];

const TrustedBySection: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div className="relative flex flex-col gap-12 overflow-hidden border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:gap-10 lg:px-20 lg:pb-16 lg:pt-14">
                    <div className="mx-auto flex max-w-lg flex-col gap-4 text-center">
                        <p className="text-lg font-medium text-gray-700">Trusted by world-recognized brands</p>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-items-center gap-16 lg:flex lg:flex-wrap lg:justify-between">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex h-10 justify-center lg:h-12">
                                <Image
                                    alt={logo.name}
                                    loading="lazy"
                                    width={logo.width}
                                    height={logo.height}
                                    decoding="async"
                                    className="h-full object-contain"
                                    src={logo.src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBySection;
