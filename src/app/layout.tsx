import React from 'react';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from 'src/lib/utils';
import { Navigation } from 'src/containers/Navigation';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={cn('min-h-screen bg-background font-sans antialiased p-6', fontSans.variable)}>
      <Navigation />
      {/* Layout UI */}
      <div className="p-10">{children}</div>
    </main>
  );
};
