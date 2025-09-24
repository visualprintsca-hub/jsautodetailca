import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from '@/components/button';


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
            <div className="text-left text-white flex flex-col gap-4 justify-start items-start max-w-200">
              <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-5xl text-left font-bold text-white  italic uppercase" style={{fontFamily: 'Nippo'}}>
              Your Car's Best Clean
              — Professional, Affordable, Sustainable.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-left">
              We make your car shine inside and out, without breaking the bank or harming the planet.</p></div>
             <Button variant="primary">Book Your Detail Today</Button>
            </div>
          </div>
        </section>
        <section className="bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  py-32 flex flex-col gap-16  justify-end">
        <div className="flex flex-col gap-3 text-zinc-900 flex flex-col text-center justify-center items-center">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Detailing Packages
             <span className="block text-lg" style={{fontFamily: 'Satoshi',letterSpacing:'10px'}}>Made Simple</span>
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl text-slate-500 ">
              From a quick wash to full showroom treatment, we’ve got the right package for every car and every budget.</p>
              <Button>Book Now</Button></div>
              <div className="flex flex-col md:flex-row gap-4 md:justify-center h-fit w-full">
                <div>
                <div className="w-full md:w-64 aspect-[4/5]">
                  <img
                    src="/packages/interior.png"
                    alt="interior packages"
                    className="w-full h-full object-contain"
                  />
                  
                </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-left font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Interior Detailing<span className="block text-zinc-500">from $60</span>
              </h4>
                </div>
                <div>
                <div className="w-full md:w-64 aspect-[4/5]">
                  <img
                    src="/packages/exterior.png"
                    alt="exterior packages"
                    className="w-full h-full object-contain"
                  />
                  
                </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-left font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
                Exterior Detailing<span className="block text-zinc-500">from $30</span>
              </h4>
                </div>
                <div>
                <div className="w-full md:w-64 aspect-[4/5]">
                  <img
                    src="/packages/addons.png"
                    alt="addons"
                    className="w-full h-full object-contain"
                  />
                  
                </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-left font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              ADD ONS<span className="block text-zinc-500">from $60</span>
              </h4>
                </div>
                <div>
                <div className="w-full md:w-64 aspect-[4/5]">
                  <img
                    src="/packages/paintcorrections.png"
                    alt="paint corrections"
                    className="w-full h-full object-contain"
                  />
                  
                </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-left font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
               Paint Corrections<span className="block text-zinc-500">from $60</span>
              </h4>
                </div>
                
              </div>
        </div>
        </section>
        
      </main>

    </div>
  );
}
