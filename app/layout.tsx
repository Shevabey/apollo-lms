import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import Navigation from '@/components/layout/Navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Apollo LMS - Learning Management System',
  description: 'Comprehensive learning management system for IT professionals',
  keywords: 'LMS, Learning Management System, IT Education, Programming Courses',
  authors: [{ name: 'Apollo Team' }],
  creator: 'Apollo LMS',
  publisher: 'Apollo LMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navigation />
            <main className="pt-16">{children}</main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
