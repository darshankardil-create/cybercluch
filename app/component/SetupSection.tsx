'use client';
import React from 'react';

const cards = [
    { title: "One-Click Deployment", description: "Connect to all your terrains and environments: integrate any CSP, app, and pipeline with a single click and zero friction. No agents required." },
    { title: "Zero-Time to Value", description: "Immediate Time-to-Value onboarding and mapping of all your NHIs and their associated risks. Get actionable insights and recommendations at your fingertips in minutes." },
    { title: "Your NHI Realm Secured", description: "Our Zero Knowledge Architecture keeps your data within your network, while robust processes and recommendations ensure agility and peak performance." }
];

const SetupSection: React.FC = () => {
    return (
        <section className="overflow-hidden bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div className="relative overflow-hidden border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:flex lg:min-h-[550px] lg:items-end lg:px-20 lg:pb-20 lg:pt-0">
                    <div className="relative z-10 flex  flex-col gap-6">



                    
    <video src="finalimg.mp4"
                        muted
                        autoPlay
                      className="w-[1500px] h-[600px] "
                         
                        />


 
                      

                     
                        <div>
                            <a href="#" className="group inline-block bg-black text-white text-base font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-blue-600">
                                See Clutch in Action <span className="inline-block tracking-normal transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                            </a>
                        </div>
                    </div>
                    {/* Placeholder for complex wheel animation */}



                  
                     <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
                        <p className="font-semibold">Jenkins</p>
                        <p className="font-semibold">Kubernetes</p>
                        <p className="font-semibold">Okta</p>
                        <p className="font-semibold">GitHub</p>
                        <p className="font-semibold">Salesforce</p>
                        <p className="font-semibold">AWS</p>
                        <p className="font-semibold">Azure</p>
                        <p className="font-semibold">Slack</p>
                    </div>
                </div>
                <div className="relative z-10 grid grid-cols-1 gap-6 border-x-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:grid-cols-3 lg:px-20 lg:pb-20">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="text-xl font-semibold">{card.title}</p>
                            <p className="text-base text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SetupSection;
