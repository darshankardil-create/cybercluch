'use client';
import React from 'react';

const ZeroTrustSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container-wide mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:gap-16 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-gray-900 lg:text-5xl">
              Extending Zero Trust to NHIs
            </h2>
          </div>

          <div className="relative mx-auto flex h-[330px] w-[800px] items-center justify-center z-10 bg-black">
            <video
              src="coin.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-16 grid grid-cols-1 border-t-[0.5px] border-gray-300 lg:grid-cols-3">
            <div className="flex flex-col gap-2 border-b-[0.5px] border-gray-300 py-8 text-center lg:border-b-0 lg:border-r-[0.5px] lg:px-4 lg:py-10">
              <p className="text-xl font-semibold">Discovery and Inventory</p>
              <p className="text-base text-gray-600 max-w-xs mx-auto">
                Identify, catalog, and manage NHIs with full oversight. Achieve unified visibility across all environments
              </p>
            </div>
            <div className="flex flex-col gap-2 border-b-[0.5px] border-gray-300 py-8 text-center lg:border-b-0 lg:border-r-[0.5px] lg:px-4 lg:py-10">
              <p className="text-xl font-semibold">Real-Time Monitoring</p>
              <p className="text-base text-gray-600 max-w-xs mx-auto">
                Continuously analyze NHI usage in real-time. Establish a trust baseline based on organizational context
              </p>
            </div>
            <div className="flex flex-col gap-2 py-8 text-center lg:px-4 lg:py-10">
              <p className="text-xl font-semibold">Enforcement</p>
              <p className="text-base text-gray-600 max-w-xs mx-auto">
                Constrain NHIs to approved scopes and operational boundaries. Enforce fine grained, Least Privilege policies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroTrustSection;
