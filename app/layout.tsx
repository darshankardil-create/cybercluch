// app/layout.tsx

import type { Metadata } from 'next';
import './globals.css'; // This is where Tailwind styles are imported

// The metadata from your index.html and metadata.json goes here
export const metadata: Metadata = {
  title: 'NHI Security with Clutch: Secure All Non-Human Identities',
  description: 'Secure all Non-Human Identities with Clutch’s NHI security platform. Gain full visibility, control, and protection across your entire ecosystem.',
  keywords: 'Clutch, security, non-human identity, non-human identity security, protection',
  openGraph: {
    title: 'NHI Security with Clutch: Secure All Non-Human Identities',
    description: 'Secure all Non-Human Identities with Clutch’s NHI security platform. Gain full visibility, control, and protection across your entire ecosy…',
    url: 'https://www.clutch.security/',
    type: 'website',
    images: [
      {
        url: 'https://cdn.sanity.io/images/9digumky/production/ab991b7b20e459fc835acc3844187491849afb8d-1208x635.png',
        width: 1200,
        height: 630,
        alt: 'Clutch Security',
      },
    ],
    locale: 'us_EN',
    siteName: 'Clutch Security',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NHI Security with Clutch: Secure All Non-Human Identities',
    description: 'Secure all Non-Human Identities with Clutch’s NHI security platform. Gain full visibility, control, and protection across your entire ecosy…',
    images: ['https://cdn.sanity.io/images/9digumky/production/ab991b7b20e459fc835acc3844187491849afb8d-1208x635.png'],
  },
  // You can add other tags like icons and manifest here if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}