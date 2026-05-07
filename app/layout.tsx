import type {Metadata} from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'FIT ZQUAD | Best Gym Near Me | Elite Fitness Center',
  description: 'Join FIT ZQUAD, the premium fitness center for strength training, personal training, and weight loss. Train hard, stay strong, and start your successful fitness transformation with our expert trainers.',
  keywords: 'best gym near me, fitness center, personal training, weight loss gym, strength training gym, gym membership, fitness transformation',
};

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased text-white bg-[#050505] font-sans ${bebasNeue.variable} ${poppins.variable} selection:bg-[#c9ff00] selection:text-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
