'use client';

import React, { useState, useEffect } from 'react';

const platformLinks = [
    { title: 'Platform Overview', description: 'Universal Non-Human Identity Security Platform - discover, govern, and secure every NHI across your environment', href: '#', icon: 'https://www.clutch.security/_next/static/media/visibility2.325ddc7b.svg' },
    { title: 'Visibility & Context', description: 'Automatically discover and correlate all NHIs with a contextualized inventory', href: '#', icon: 'https://www.clutch.security/_next/static/media/visibility.f85e1890.svg' },
    { title: 'Lifecycle Management', description: 'Effortlessly manage the NHI lifecycle and address governance gaps', href: '#', icon: 'https://www.clutch.security/_next/static/media/lifecycle.a1451aca.svg' },
    { title: 'Posture & Risk Management', description: 'Immediately detect suspicious NHI behavior and respond to breaches', href: '#', icon: 'https://www.clutch.security/_next/static/media/risk.f49a54f3.svg' },
    { title: 'Detection & Response', description: 'Immediately detect suspicious NHI behavior and respond to breaches', href: '#', icon: 'https://www.clutch.security/_next/static/media/detection.79617bc3.svg' },
    { title: 'Zero Trust Enforcement', description: 'Proactively shield your organization', href: '#', icon: 'https://www.clutch.security/_next/static/media/protection.2e82b5f7.svg' },
    { title: 'Agentic AI Governance', description: 'Discover and control how AI agents use and share Non-Human Identities', href: '#', icon: 'https://www.clutch.security/_next/static/media/ai.62fae600.svg' },
    { title: 'Contextual Secret Scanning', description: 'Catch leaked secrets with full blast radius analysis and immediate remediation paths', href: '#', icon: 'https://www.clutch.security/_next/static/media/threat-detection.a166e1fb.svg' }
];

const useCasesLinks = [
    { title: 'Workforce Attribution', description: 'Reveal every human-NHI relationship - creator, owner, user, or value exposer', href: '#', icon: 'https://www.clutch.security/_next/static/media/federator.3b190d69.svg' },
    { title: 'Behavioral Threat Detection', description: 'Spot suspicious NHI behavior and access misuse in real time', href: '#', icon: 'https://www.clutch.security/_next/static/media/threat-detection.a166e1fb.svg' },
    { title: 'Vault Augmentation', description: 'Detect vault bypasses and ensure secrets are only stored where they should be', href: '#', icon: 'https://www.clutch.security/_next/static/media/vault.5847bdd2.svg' },
    { title: 'Zero Trust Verification', description: 'Continuously verify NHI access based on context, trust, and risk', href: '#', icon: 'https://www.clutch.security/_next/static/media/trust.ac8999ea.svg' },
    { title: 'Identity Hygiene Automation', description: 'Automatically clean up stale, unused, and orphaned NHIs to reduce risk', href: '#', icon: 'https://www.clutch.security/_next/static/media/hygiene-automation.b2de887a.svg' },
    { title: 'Least Privilege Enforcement', description: 'Identify and remove unnecessary NHI permissions to minimize blast radius', href: '#', icon: 'https://www.clutch.security/_next/static/media/privilege.1bdc3c0b.svg' },
    { title: 'Segregation of Duties', description: 'Prevent NHIs from spanning environments or accumulating overlapping privileges', href: '#', icon: 'https://www.clutch.security/_next/static/media/segregation.1c7102b7.svg' },
    { title: 'Shadow AI Discovery', description: 'Gain comprehensive visibility into unmanaged AI agents and their credential usage', href: '#', icon: 'https://www.clutch.security/_next/static/media/server.cf9586a5.svg' },
];

const resourcesLinks = [
    { title: 'Blog', description: 'Expert insights on NHI security', href: '#', icon: 'https://www.clutch.security/_next/static/media/blog.c12538d2.svg' },
    { title: 'NHI Masterclass', description: 'Master NHI security with expert-led sessions', href: '#', icon: 'https://www.clutch.security/_next/static/media/masterclass.858e0acf.svg' },
    { title: 'Debunking Rotation', description: 'Research demonstrating how quickly leaked NHIs are exploited', href: '#', icon: 'https://www.clutch.security/_next/static/media/rotation.09a32c97.svg' },
    { title: 'NHI Risk Library', description: 'Understand NHI risks and how to mitigate them', href: '#', icon: 'https://www.clutch.security/_next/static/media/learn.a3035034.svg' },
    { title: 'Principles', description: 'Clutch’s approach to addressing NHI challengers', href: '#', icon: 'https://www.clutch.security/_next/static/media/principles.9d13cb1e.svg' },
    { title: 'NHI Scope Calculator', description: 'Quickly assess your organization’s NHI footprint', href: '#', icon: 'https://www.clutch.security/_next/static/media/calculator.505a8675.svg' },
];

const communityLinks = [
    { title: 'NHI Index', description: 'Comprehensive industry mapping of NHIs', href: '#', icon: 'https://www.clutch.security/_next/static/media/mapping.702a7f81.svg' },
    { title: 'Federator', description: 'Open-source tool for automating cloud federation setup', href: '#', icon: 'https://www.clutch.security/_next/static/media/federator.3b190d69.svg' },
    { title: 'AWS Key Lockdown', description: 'Open-source tool for instantly revoke exposed AWS access keys', href: '#', icon: 'https://www.clutch.security/_next/static/media/key.6043994e.svg' },
    { title: 'VSCode extension', description: 'A VSCode extension that scans the workspace for secrets using Gitleaks', href: '#', icon: 'https://www.clutch.security/_next/static/media/scan.b0bd1bf3.svg' },
];

const companyLinks = [
    { title: 'About Us', description: 'Who we are and why we built Clutch', href: '#', icon: 'https://www.clutch.security/_next/static/media/company.0d3220a2.svg' },
    { title: 'Join the Team', description: 'Explore career opportunities', href: '#', icon: 'https://www.clutch.security/_next/static/media/join.00e38a49.svg' },
    { title: 'Press', description: 'Stay informed about everything that\'s happening', href: '#', icon: 'https://www.clutch.security/_next/static/media/glob.95d682a3.svg' },
    { title: 'Trust Center', description: 'Customer security is our top priority', href: '#', icon: 'https://www.clutch.security/_next/static/media/trust.ac8999ea.svg' },
    { title: 'Contact Us', description: 'Let us know how we can help', href: '#', icon: 'https://www.clutch.security/_next/static/media/connect.81aff116.svg' },
];

const navigation = [
    { name: 'Why Clutch', href: '#' },
    { name: 'Platform', dropdown: platformLinks },
    { name: 'Integrations', href: '#' },
    { name: 'Use Cases', dropdown: useCasesLinks },
    { name: 'Resources', dropdown: resourcesLinks },
    { name: 'Community', dropdown: communityLinks },
    { name: 'Company', dropdown: companyLinks },
];

const Logo = () => (
    <img alt="Logo" fetchPriority="high" loading="eager" width="124" height="36" decoding="async" src="https://www.clutch.security/_next/static/media/logo-full-black.f177f8fc.svg" />
);

const ArrowDownIcon = ({ className = '' }) => (
    <span className={`block h-[14px] w-[14px] bg-black bg-contain transition-all ${className}`} style={{ mask: 'url(https://www.clutch.security/_next/static/media/arrow-down.26d2cf96.svg) no-repeat 50% 50%', WebkitMask: 'url(https://www.clutch.security/_next/static/media/arrow-down.26d2cf96.svg) no-repeat 50% 50%', WebkitMaskSize: 'cover', maskSize: 'cover' }}></span>
);

const Dropdown = ({ items }) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-white rounded-lg border border-gray-200 shadow-xl w-max">
            {items.map((item) => (
                <a key={item.title} href={item.href} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0">
                    <span className="mt-1 flex-shrink-0 h-6 w-6 bg-black" style={{ mask: `url(${item.icon}) no-repeat 50% 50%`, WebkitMask: `url(${item.icon}) no-repeat 50% 50%` }}></span>
                    <div>
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <p className="text-xs text-gray-500 max-w-xs">{item.description}</p>
                    </div>
                </a>
            ))}
        </div>
    </div>
);

const MobileAccordion = ({ item, openAccordion, setOpenAccordion }) => {
    const isOpen = openAccordion === item.name;
    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setOpenAccordion(isOpen ? null : item.name)} className="flex justify-between items-center w-full py-4 text-left">
                <span className="text-xl font-bold text-gray-800">{item.name}</span>
                <svg className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="pl-4 pb-4 flex flex-col items-start gap-y-3">
                    {item.dropdown.map(subItem => (
                         <a key={subItem.title} href={subItem.href} className="text-lg text-gray-600 hover:text-blue-600">{subItem.title}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header fixed inset-x-0 top-0 z-50 flex items-center py-3 transition-all duration-200 lg:py-4 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
            <div className="container-wide mx-auto w-full max-w-7xl px-4">
                <div className="header__navbar flex w-full items-center justify-between">
                    <div className="header__logo z-50 inline-flex items-center">
                        <a href="#" className="relative inline-flex select-none items-center"><Logo /></a>
                    </div>
                    <nav aria-label="Main" className="header__menu z-40 hidden lg:block">
                        <ul className="flex items-center gap-x-8 text-sm font-medium text-gray-700">
                            {navigation.map(item => (
                                <li key={item.name} className="group relative">
                                    {item.href ? (
                                        <a href={item.href} className="hover:text-blue-600 transition-colors">{item.name}</a>
                                    ) : (
                                        <>
                                            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                                <span>{item.name}</span>
                                                <ArrowDownIcon className="group-hover:rotate-180" />
                                            </button>
                                            {item.dropdown && <Dropdown items={item.dropdown} />}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="relative z-50 flex items-center gap-4">
                        <a href="#" className="group hidden sm:inline-block bg-black text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-blue-600">Book a demo</a>
                        <div className="header__burger-bg z-50 flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-black bg-black transition-all duration-300 lg:hidden">
                            <button type="button" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="header__burger relative z-50 block h-5 w-6 cursor-pointer transition-all lg:hidden">
                                <span className={`absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? 'scale-x-0' : 'scale-x-100'}`}></span>
                                <span className={`absolute left-1/2 top-1 h-[1.5px] w-3 -translate-x-1/2 rounded-full bg-white duration-300 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 w-4' : ''}`}></span>
                                <span className={`absolute left-1/2 bottom-1 h-[1.5px] w-3 -translate-x-1/2 rounded-full bg-white duration-300 ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 w-4' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu fixed inset-0 h-full w-full select-none bg-white transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} overflow-y-auto`}>
                <div className="container mx-auto mt-20 flex h-full w-full flex-col px-8 pt-8">
                     {navigation.map(item => item.dropdown ? (
                         <MobileAccordion key={item.name} item={item} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} />
                     ) : (
                         <a key={item.name} href={item.href} className="py-4 text-xl font-bold text-gray-800 border-b border-gray-200">{item.name}</a>
                     ))}
                    <a href="#" className="mt-8 inline-block bg-black text-white text-lg font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-blue-600 self-start">Book a demo</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
