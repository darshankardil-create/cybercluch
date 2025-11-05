'use client';
import React, { useState } from 'react';

const testimonials= [
    {
        company: 'Solaris',
        logo: 'https://www.clutch.security/_next/static/media/solaris.c86762db.svg',
        quote: "In today's threat landscape, having a holistic NHI security solution is essential. Clutch's platform offers a holistic coverage across all organizational environments and landscapes. The integrated context it provides allows teams, to fully understand the extent of NHIs across the organization and take a risk based context approach to manage NHIs, while minimizing friction between teams.",
        author: 'Nuno Teodoro',
        title: 'VP, Group Cybersecurity',
        avatar: 'https://www.clutch.security/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnuno-teodoro.c0cc5cea.png&w=256&q=75'
    },
    {
        company: 'Bank United',
        logo: 'https://www.clutch.security/_next/static/media/bank-united.e0d7661f.svg',
        quote: "Clutch Security has become an integral part of our security program. Their platform provides us with the necessary visibility and control to manage our Non-Human Identities effectively, ensuring we stay ahead of potential threats and maintain a strong security posture.",
        author: 'Kyle Stover',
        title: 'SVP, CISO',
        avatar: 'https://www.clutch.security/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkyle-stover.876b539c.png&w=256&q=75'
    },
    {
        company: 'Dexcom',
        logo: 'https://www.clutch.security/_next/static/media/dexcom.6a35fb82.svg',
        quote: "Clutch Security has been an indispensable partner in our journey to secure Non-Human Identities. Their platform's ability to provide a unified view of all NHIs, coupled with its powerful automation capabilities, has significantly improved our security operations and reduced our risk exposure.",
        author: 'Adam N.',
        title: 'Sr. Director of Cybersecurity',
        avatar: 'https://www.clutch.security/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadam-n.492576b5.png&w=256&q=75'
    }
];

const TestimonialsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTestimonial = testimonials[activeTab];

    return (// 
        <div className="overflow-hidden bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div>
                    <div className="grid w-full grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.company}
                                onClick={() => setActiveTab(index)}
                                className="group relative flex h-16 cursor-pointer items-center justify-center border-l-[0.5px] border-t-[0.5px] border-gray-300 last:border-r-[0.5px] lg:h-22"
                            >
                                <div className="relative w-full max-w-[60%] sm:max-w-[50%]">
                                    <img
                                        alt={testimonial.company}
                                      
                                        
                                        loading="lazy"
                                        decoding="async"
                                        src={testimonial.logo}
                                        className={`w-full select-none object-contain transition-opacity ${activeTab === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-75'}`}
                                    />
                                </div>
                                {activeTab === index && <span className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-10 h-0.5 bg-black"></span>}
                            </button>
                        ))}
                    </div>
                    <div className="relative min-h-[360px] overflow-hidden border-x-[0.5px] border-t-[0.5px] border-gray-300 transition-height duration-500 ease-in-out sm:min-h-[280px] lg:min-h-[296px]">
                         <div className="flex flex-col-reverse gap-6 px-6 py-8 lg:flex-row lg:items-start lg:p-16">
                            <div className="flex items-center gap-4 lg:shrink-0 lg:basis-56 lg:flex-col lg:items-start">
                                <img
                                    alt={activeTestimonial.author}
                                    loading="lazy"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    src={activeTestimonial.avatar}
                                    className="h-10 w-10 shrink-0 rounded-full object-cover lg:h-9 lg:w-9"
                                />
                                <div>
                                    <p className="font-semibold">{activeTestimonial.author}</p>
                                    <p className="text-sm text-gray-600">{activeTestimonial.title}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-lg font-medium leading-relaxed lg:text-xl">{activeTestimonial.quote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
