import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
    >
      <main className="flex flex-col">
        <section className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: 'url(/hero1.png)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full py-32 flex flex-col  justify-end">
            <div className="text-left text-white flex flex-col justify-start items-start max-w-200">
              <h1 className="text-2xl md:text-5xl text-left font-bold text-white mb-6 italic uppercase" style={{fontFamily: 'Nippo'}}>
              Your Car's Best Clean
              — Professional, Affordable, Sustainable.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-left">
                Professional mobile auto detailing services at your location
              </p>
              <button className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
