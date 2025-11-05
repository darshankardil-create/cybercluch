'use client';
import React from 'react';

const cards = [
    { title: "Seamlessly manage and secure Non-Human Identities with Clutch's Workflows engine", description: "Clutch's Workflows automate security tasks, ensuring swift responses to NHIs. Custom triggers handle scenarios like secret expirations, NHI detection, and employee offboarding, boosting efficiency.", link: "#" },
    { title: "Understanding the full context of any Non-Human Identity with Clutch’s Identity Lineage™", description: "Clutch's Non-Human Identity Lineage™ enables you to comprehend the full extent of usage, interactions, and access of all your NHIs - intuitively, simply, and with ease - through simple visualization.", link: "#" },
    { title: "Proactively shield your organization with Zero Trust Protection", description: "Zero Trust protection engine enables you to fortify your defenses by proactively applying best practice policies, all without the need for endless rotations and being dependent on IT and Engineering teams.", link: "#" }
];

const ApproachSection: React.FC = () => {
    return (
        <section className="overflow-hidden bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div className="flex flex-col gap-16 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="text-4xl font-semibold leading-tight text-gray-900 lg:text-5xl">The Clutch Approach</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                        {cards.map((card, index) => (
                            <div key={index} className="group/card flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <p className="text-xl font-semibold">
                                        <a href={card.link} className="hover:text-blue-600 transition-colors">{card.title}</a>
                                    </p>
                                    <p className="text-base text-gray-600">{card.description}</p>
                                </div>
                                <div>
                                    <a href={card.link} className="group flex items-center justify-center h-11 w-11 rounded-full border border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white lg:group-hover/card:w-12 lg:group-hover/card:h-12">
                                        <span className="inline-block text-2xl transition-transform duration-300 group-hover:translate-x-0.5">-&gt;</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
