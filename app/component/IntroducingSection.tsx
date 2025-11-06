'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const tabs = [
  {
    name: 'Visibility & Context',
    title: 'Get the Full Picture',
    description:
      'Automatically and continuously discover and correlate all NHIs across the entire ecosystem with a contextualized inventory, including API keys, tokens, secrets, service accounts, and certificates.',
    link: '#',
    image: 'plain1.png',
  },
  {
    name: 'Lifecycle Management',
    title: 'Effortlessly Manage',
    description:
      'Effortlessly manage the NHI lifecycle from creation to expiration, and address IGA and governance gaps around NHIs at scale.',
    link: '#',
    image: 'plain2.mp4',
  },
  {
    name: 'Posture & Risk Management',
    title: 'Continuously Assess',
    description:
      'Continuously assess the security posture of your NHIs, identify misconfigurations, vulnerabilities, and excessive permissions, and prioritize risks with context-rich insights.',
    link: '#',
    image: 'plain3.mp4',
  },
  {
    name: 'Detection & Response',
    title: 'React in Real-Time',
    description:
      'Immediately detect suspicious NHI behavior, active threats, and policy violations and accelerate investigation and response with automated workflows.',
    link: '#',
    image: 'plain4.png',
  },
  {
    name: 'Zero Trust Protection',
    title: 'Enforce Policies',
    description:
      'Proactively shield your organization by enforcing Zero Trust policies and access controls for all NHIs, and ensure that every NHI is authenticated, authorized, and validated before granting access.',
    link: '#',
    image: 'plain5.mp4',
  },
];

const IntroducingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="overflow-hidden bg-white">
      <div className="container-wide mx-auto max-w-7xl">
        {/* Top Header Section */}
        <div className="flex flex-col items-start gap-6 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest">
              Introducing
              <img
                alt="Clutch"
                loading="lazy"
                width="96"
                height="28"
                decoding="async"
                src="https://www.clutch.security/_next/static/media/logo-full-black.f177f8fc.svg"
              />
            </div>
            <h3 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl max-w-3xl">
              Industry-First Universal Non-Human Identity Security Platform
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 rounded bg-gray-100 px-3 py-2 text-xs font-medium uppercase tracking-widest">
            Built for the Enterprise
          </div>
        </div>

        {/* Tabs Section */}
        <div className="relative overflow-hidden">
          {/* Tab Buttons */}
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-x-[0.5px] border-t-[0.5px] border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`relative flex cursor-pointer items-center justify-center border-r-[0.5px] border-gray-300 px-2 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-colors ${
                  activeTab === index
                    ? 'text-black'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.name}
                {activeTab === index && (
                  <span className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-10 h-0.5 bg-black"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative border-x-[0.5px] border-t-[0.5px] border-gray-300 min-h-[500px] lg:min-h-[600px]">
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === index
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Responsive layout: stacked on mobile, side-by-side on large screens */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center p-6 sm:p-10 lg:p-20">
                  
                  {/* Text Section */}
                  <div className="flex flex-col items-start gap-4 lg:w-1/3">
                    <p className="text-2xl sm:text-3xl font-semibold">
                      {tab.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {tab.description}
                    </p>
                    <Link
                      href={tab.link}
                      className="group text-sm font-medium uppercase tracking-wider text-black"
                    >
                      Learn more{' '}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </Link>
                  </div>

                  {/* Image/Video Section */}
                  <div className="w-full lg:w-[800px] h-[240px] sm:h-[320px] lg:h-[460px] mx-auto">
                    {tab.image.endsWith('.mp4') ? (
                      <video
                        src={tab.image}
                        className="object-cover w-full h-full rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="object-cover w-full h-full rounded-lg"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
