import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from '@/components/button';
import PackageCard from '@/components/PackageCard';


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
        <section className=" bg-cover bg-center bg-no-repeat flex items-center justify-start" style={{backgroundImage: 'url(/interiorpackagebg.png)'}}>
        <div className="container mx-auto px-4 sm:px-6 text-white lg:px-8 max-w-7xl h-full py-32 flex flex-col  justify-start">
        <div className="flex flex-col gap-3  flex flex-col text-left justify-start items-left">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Interior Packages
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl  ">
              Choose the level of clean that fits your needs, from quick refresh to showroom perfection.              </p>
              </div>
              <div >
          <div className="container  px-8 md:px-0  max-w-xl py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <PackageCard
              iconSrc="/interrioricon.svg"
              title="Basic Interior"
              subtitle="Vacuum, wipe down, windows"
              startingLabel="Starting From"
              price="$60"
              dialogContent={
                <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-black/20 text-left text-sm md:text-base text-black">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-black/20 px-4 py-2 font-semibold">Package</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Small Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Mid-size Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Large (Work) Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="border border-black/20 px-4 py-3 font-semibold text-fuchsia-700">Basic</td>
        <td className="border border-black/20 px-4 py-3">$75.00</td>
        <td className="border border-black/20 px-4 py-3">$105.00</td>
        <td className="border border-black/20 px-4 py-3">$135.00</td>
        <td className="border border-black/20 px-4 py-3 text-sm italic">
          This is just a basic vacuum and wipe down all surfaces including windows. If wanting a
          deeper clean or to get rid of smells from animals or other contaminants, please see other
          packages.
        </td>
      </tr>
     
    </tbody>
  </table>
</div>

              
                }
             />
            <PackageCard
              iconSrc="/interrioricon.svg"
              title="Deep Interior"
              subtitle="Carpets, mats, vents, interior surfaces"
              startingLabel="Starting From"
              price="$100"
               glow
               dialogContent={
                <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-black/20 text-left text-sm md:text-base text-black">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-black/20 px-4 py-2 font-semibold">Package</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Small Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Mid-size Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Large (Work) Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
     
      <tr className="hover:bg-gray-50">
        <td className="border border-black/20 px-4 py-3 font-semibold text-fuchsia-700">Deep</td>
        <td className="border border-black/20 px-4 py-3">$120.00</td>
        <td className="border border-black/20 px-4 py-3">$150.00</td>
        <td className="border border-black/20 px-4 py-3">$180.00</td>
        <td className="border border-black/20 px-4 py-3 text-sm italic">
          This includes all surfaces dusted, vacuumed, and cleaned. Carpets and seats shampooed. All
          dirt and grime will be pulled from the carpets.
        </td>
      </tr>
    </tbody>
  </table>
</div>

              
                }
/>
            <PackageCard
              iconSrc="/interrioricon.svg"
              title="Showroom Interior"
              subtitle="Full restoration, shampooing, deep detail"
              startingLabel="Starting From"
              price="$160"
              dialogContent={<div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-black/20 text-left text-sm md:text-base text-black">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-black/20 px-4 py-2 font-semibold">#</th>
                      <th className="border border-black/20 px-4 py-2 font-semibold">Add-on</th>
                      <th className="border border-black/20 px-4 py-2 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-black/20 px-4 py-3 font-medium">1</td>
                      <td className="border border-black/20 px-4 py-3">Protectant and shine</td>
                      <td className="border border-black/20 px-4 py-3">
                        <span className="line-through text-gray-500 mr-2">$40.00</span>
                        <span className="font-semibold">$30.00</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-black/20 px-4 py-3 font-medium">2</td>
                      <td className="border border-black/20 px-4 py-3">Pet hair removal</td>
                      <td className="border border-black/20 px-4 py-3">
                        <span className="line-through text-gray-500 mr-2">$50.00</span>
                        <span className="font-semibold">$40.00</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-black/20 px-4 py-3 font-medium">3</td>
                      <td className="border border-black/20 px-4 py-3">
                        <span className="text-red-600 font-semibold">Coming soon:</span>{" "}
                        Ceramic coatings and waxes for door jams
                      </td>
                      <td className="border border-black/20 px-4 py-3 italic text-gray-500">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              }

             />
          </div>
        </div>
        </div>
        </section>
        <section className="relative  bg-cover bg-center bg-no-repeat flex items-center justify-start" style={{backgroundImage: 'url(/exteriorpackagebg.png)'}}>
        <img  src={"./thunder.gif"} style={{mixBlendMode:'lighten'}} className="absolute -left-16 -top-30 md:-top-36 rotate-150 md:scale-180"/>
        <div className="container mx-auto px-4 sm:px-6 text-white lg:px-8 max-w-7xl h-full py-32 flex flex-col  justify-start">
        <div className="flex flex-col gap-3  flex flex-col text-left justify-start items-left">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Exterior Packages
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl  ">
              From a simple wash to deep cleaning, we’ll bring back the shine.</p>
              </div>
              <div className="container  px-8 md:px-0  max-w-xl py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <PackageCard
              iconSrc="/exterioricon.svg"
              title="Basic Wash"
              subtitle="Hand wash & dry"
              startingLabel="Starting From"
              price="$30"
              dialogContent={
                <div className="overflow-x-auto mt-6">
  <table className="w-full border-collapse border border-black/20 text-left text-sm md:text-base text-black">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-black/20 px-4 py-2 font-semibold">Package</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Small Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Mid-size Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Large (Work) Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="border border-black/20 px-4 py-3 font-semibold text-fuchsia-700">Basic</td>
        <td className="border border-black/20 px-4 py-3">$45.00</td>
        <td className="border border-black/20 px-4 py-3">$65.00</td>
        <td className="border border-black/20 px-4 py-3">$85.00</td>
        <td className="border border-black/20 px-4 py-3 text-sm italic">
          Basic exterior wash includes pressure wash, spray wash, and shampoo from top to bottom.
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
}
             />
            <PackageCard
              iconSrc="/tireicon.svg"
              title="Tire Deep Clean"
              subtitle="Restore that fresh tire look"
              startingLabel="Starting From"
              price="$15"
              dialogContent={
                <div className="overflow-x-auto mt-6">
  <table className="w-full border-collapse border border-black/20 text-left text-sm md:text-base text-black">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-black/20 px-4 py-2 font-semibold">Package</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Small Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Mid-size Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Large (Work) Vehicles</th>
        <th className="border border-black/20 px-4 py-2 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
     
      <tr className="hover:bg-gray-50">
        <td className="border border-black/20 px-4 py-3 font-semibold text-fuchsia-700">Tire Deep Clean</td>
        <td className="border border-black/20 px-4 py-3" colSpan={3}>
          <span className="line-through text-gray-500 mr-2">$50.00</span>
          <span className="font-semibold">$40.00</span>
        </td>
        <td className="border border-black/20 px-4 py-3 text-sm italic">
          A tire deep clean includes cleaning, decontaminating, shining, and using protectant on wheels and tires.
          <br />
          <span className="block mt-2 font-medium italic text-center">
            *All bookings that include an exterior wash and showroom interior clean will receive $20.00 off service*
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
}
            />
         
          </div>
              </div></section>
        
      </main>

    </div>
  );
}
