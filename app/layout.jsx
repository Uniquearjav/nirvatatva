import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "@/components/header_landing"
import {Providers} from "@/app/providers";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
export const metadata = {
  title: "Nirvatatva | Home",
  description: "Nirvatatva: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.",
  keywords: "Nirvatatva, furnitures, Enhancing homes, Sofas, Home decor, Resin plates, Artistic craftsmanship, Refined style, Horizaura home decor, Crafted elegance for homes, Stunning selection of sofas, Captivating resin plates, Artistic craftsmanship in furniture, Blend of creativity and comfort, Refined style in home furnishings, Experience elegance with Horizaura, Explore creativity in home decor, Horizaura: Where craftsmanship meets comfort",
  verification: { google: `${process.env.VERIFICAION}`},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
       <body className={cn("min-h-screen bg-gradient-to-b from-orange-200 to-cyan-200 dark:bg-black bg-background font-sans antialiased ", poppins?.className || '')}>
        <Providers>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <Header />
          <div>{children}</div>
          <Footer />
          <Analytics />
        </ThemeProvider>
        </Providers>
        <GoogleAnalytics gaId="G-YDDP48G31V" />
        </body>
    </html>
  );
}
