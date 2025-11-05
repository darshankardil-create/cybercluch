'use client';
import React from 'react';

const landscapeItems = [
    { title: 'Hyper Fragmented', description: 'Across Cloud, SaaS, On-Prem environments, code repositories, CI/CD, Data Warehouses, and more' },
    { title: 'Massively Scaled', description: 'Outpacing human identities 82:1, with AI-driven workloads compounding the growth curve' },
    { title: 'Privileged by Design', description: 'Holds critical privileges and extensive access, essential for mission critical automated processes' },
    { title: 'Lacking Controls', description: 'Lacks inherent security controls such as MFA and conditional access policies' }
];

const LandscapeSection: React.FC = () => {
    return (
        <section className="overflow-hidden bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div className="flex flex-col gap-12 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:gap-16 lg:px-20 lg:py-20">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-4xl font-semibold leading-tight text-gray-900 lg:text-5xl">The Non-Human Identity Landscape is</h2>
                    </div>
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                        <div className="flex flex-col gap-6 lg:max-w-xs">
                            {landscapeItems.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 border-b border-gray-300 pb-6">
                                    <p className="text-xl font-semibold">{item.title}</p>
                                    <p className="text-base text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1">
                            <img alt="The Non-Human Identity Landscape" loading="lazy" width="576" height="534" decoding="async" src="https://www.clutch.security/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flandscape-image.f21ae2fd.png&w=1920&q=75" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandscapeSection;
