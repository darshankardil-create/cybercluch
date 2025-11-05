"use client";
import React, { useState } from 'react';

const SocialIcon: React.FC<{ href: string, title: string, path: string }> = ({ href, title, path }) => (
    <a href={href} target="_blank" rel="nofollow noreferrer" title={title} aria-label={title}>
        <span className="block h-6 w-6 bg-black transition-all hover:bg-blue-600" style={{ mask: `url(${path}) no-repeat 50% 50%`, WebkitMask: `url(${path}) no-repeat 50% 50%`, WebkitMaskSize: 'cover', maskSize: 'cover' }}></span>
    </a>
);

const FooterList: React.FC<{ title: string, links: { text: string, href: string, external?: boolean }[] }> = ({ title, links }) => (
    <div className="flex basis-[45%] flex-col items-start gap-4 lg:basis-auto">
        <p className="text-base font-semibold">{title}</p>
        <div className="flex flex-col gap-2">
            {links.map(link => (
                <a key={link.text} href={link.href} target={link.external ? '_blank' : '_self'} rel={link.external ? 'nofollow noreferrer' : ''} className="text-sm text-gray-600 transition-colors hover:text-black">
                    {link.text}
                </a>
            ))}
        </div>
    </div>
);

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    
    const platformLinks = [
        { text: 'Platform Overview', href: '#' },
        { text: 'Visibility', href: '#' },
        { text: 'Lifecycle Management', href: '#' },
        { text: 'Posture & Risk Management', href: '#' },
        { text: 'Detection & Response', href: '#' },
        { text: 'Zero Trust Enforcement', href: '#' },
        { text: 'Agentic AI Governance', href: '#' },
        { text: 'Contextual Secret Scanning', href: '#' },
        { text: 'Integrations', href: '#' },
    ];
    const resourcesLinks = [
        { text: 'Blog', href: '#' },
        { text: 'NHI Masterclass', href: '#' },
        { text: 'Debunking Rotation', href: '#' },
        { text: 'NHI Risk Library', href: '#' },
        { text: 'Principles', href: '#' },
        { text: 'NHI Scope Calculator', href: '#' },
    ];
    const topContentLinks = [
        { text: 'Non-Human Identity', href: '#' },
        { text: 'Identity-First Security', href: '#' },
        { text: 'Debunking Rotation', href: '#' },
    ];
    const communityLinks = [
        { text: 'NHI Index', href: '#', external: true },
        { text: 'Federator', href: '#', external: true },
        { text: 'AWS Key Lockdown', href: '#', external: true },
        { text: 'VSCode extension', href: '#', external: true },
    ];
    const companyLinks = [
        { text: 'About Us', href: '#' },
        { text: 'Join the Team', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Trust Center', href: '#' },
        { text: 'Contact Us', href: '#' },
    ];

    const canSubmit = email && consent;

    return (
        <footer className="relative z-5 mt-[-0.5px] bg-white">
            <div className="container-wide mx-auto max-w-7xl">
                <div className="flex flex-col gap-16 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:flex-row lg:justify-between lg:gap-16 lg:px-20 lg:py-16">
                    <div className="flex flex-col gap-8">
                        <a href="#">
                            <img alt="Clutch" loading="lazy" width="131" height="38" decoding="async" src="https://www.clutch.security/_next/static/media/logo-full-black.f177f8fc.svg" />
                        </a>
                        <div className="flex flex-wrap items-center gap-8">
                            <p className="text-base text-gray-800">Securing the Backbone<br/>of the Modern Enterprise</p>
                            <a href="#" className="group inline-block border border-black text-black text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:bg-black hover:text-white">
                                Book a Demo <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <SocialIcon href="https://www.linkedin.com/company/clutch-security/" title="LinkedIn" path="https://www.clutch.security/_next/static/media/linkedin.d032ecc7.svg" />
                            <SocialIcon href="https://www.instagram.com/inside.clutch/#" title="Instagram" path="https://www.clutch.security/_next/static/media/instagram.a27cfceb.svg" />
                            <SocialIcon href="https://github.com/clutchsecurity" title="GitHub" path="https://www.clutch.security/_next/static/media/github.5b5547b0.svg" />
                            <SocialIcon href="https://www.youtube.com/@clutchsecurity" title="YouTube" path="https://www.clutch.security/_next/static/media/youtube.2ab999c6.svg" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 lg:max-w-md">
                        <p className="text-xl font-semibold">Sign up for updates</p>
                        <form className="w-full">
                            <div className="relative">
                                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-black bg-transparent pb-4 pr-24 pt-3 text-black outline-none placeholder:text-gray-500" />
                                <button type="submit" disabled={!canSubmit} className={`group absolute right-0 top-3 text-base font-medium transition-colors ${canSubmit ? 'text-black hover:text-blue-600' : 'text-gray-400 cursor-not-allowed'}`}>
                                    Sign up <span className="inline-block transition-all group-hover:translate-x-1">-&gt;</span>
                                </button>
                            </div>
                            <div className="relative mt-4 flex flex-col gap-2">
                               <div className="flex items-start gap-2">
                                   <input type="checkbox" id="privacyConsent" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-black" />
                                   <label htmlFor="privacyConsent" className="text-xs text-gray-500">
                                        I confirm that I have read the <a target="_blank" href="#" className="underline hover:text-black">privacy policy</a> and that my name and email address will be collected and used by Clutch for the purposes of sending marketing communication, promotions and updates. You can withdraw your consent at any time by unsubscribing or contacting us via <a href="mailto:privacy@clutch.security" className="underline hover:text-black">privacy@clutch.security</a>.
                                   </label>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-10 border-x-[0.5px] border-t-[0.5px] border-gray-300 px-6 py-16 sm:px-12 lg:flex-nowrap lg:justify-between lg:px-20">
                    <FooterList title="Platform" links={platformLinks} />
                    <FooterList title="Resources" links={resourcesLinks} />
                    <FooterList title="Top content" links={topContentLinks} />
                    <FooterList title="Community" links={communityLinks} />
                    <FooterList title="Company" links={companyLinks} />
                </div>
                <div className="flex flex-col gap-6 border-[0.5px] border-gray-300 px-6 py-6 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                        <a href="#" className="underline hover:text-black">Terms of Use</a>
                        <a href="#" className="underline hover:text-black">Privacy Policy</a>
                        <a href="#" className="underline hover:text-black">Cookie Notice</a>
                    </div>
                    <p className="text-sm text-gray-600">© 2025 Clutch Security</p>
                </div>
            </div>
  




<div className="hidden lg:flex h-[200px] items-center justify-center overflow-hidden mt-[20px]">
  <div className="relative w-[900px] h-[260px] opacity-30 hover:opacity-100 transition-all duration-700 ease-in-out transform hover:scale-105">
    <span
      className="block w-full h-full"
      style={{
        background:
          'linear-gradient(0deg, rgba(255,255,255,0) 40%, #000000 100%)',
        maskImage:
          'url(https://www.clutch.security/_next/static/media/wordmark-black.01b93354.svg)',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskImage:
          'url(https://www.clutch.security/_next/static/media/wordmark-black.01b93354.svg)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
      }}
    ></span>
  </div>
</div>



    


        </footer>
    );
};

export default Footer;
