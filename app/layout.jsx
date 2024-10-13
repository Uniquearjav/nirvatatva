import React from 'react';
import Header from '../components/header'; // Adjust the import path as necessary
import './globals.css';
import {Poppins} from 'next/font/google'
import Theme from '@/components/theme-provider';
import Footer from '@/components/footer';

// Configure the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Theme
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        <main className='py-20'>
        {children}
        </main>
          </Theme>
          <Footer />
      </body>
    </html>
  );
};

export default Layout;
