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
             Customize Your Detail
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
              price="$75"
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
              price="$120"
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
              price="$150"
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
              price="$45"
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
              price="$40"
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
              <section className="bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  py-32 flex flex-col gap-16  justify-end">
        <div className="flex flex-col gap-3 text-zinc-900 flex flex-col text-center justify-center items-center">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Customize Your Detail
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl text-slate-500 ">
              Need a little extra? Add finishing touches to make your car truly shine.</p>
              <Button>Get Addons</Button></div>
              <div className="flex flex-col md:flex-row gap-4 md:justify-center h-fit w-full">
               
                <div>
                <div className="flex justify-center items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-black/90 border border-white/10 grid place-items-center shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <svg
  width={26}
  height={26}
  viewBox="0 0 26 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.7025 14.3714C20.631 14.4429 18.941 14.7029 18.655 14.7679C14.287 15.7559 13.052 17.3939 12.259 21.7164C12.064 22.7759 12.012 23.8744 11.83 24.9079C11.791 25.1159 11.635 25.4214 11.414 25.2004C11.323 25.1094 11.219 23.7769 11.18 23.5234C11.0045 22.2819 10.8095 20.9689 10.4585 19.7664C9.47049 16.4254 7.63749 15.4829 4.39398 14.7484C3.85448 14.6249 3.04198 14.5664 2.56748 14.4104C2.26848 14.3064 2.30098 14.0399 2.61948 13.9554C4.35498 13.4679 5.93448 13.4809 7.61149 12.5514C10.3415 11.0434 10.79 7.71541 11.18 4.89441C11.245 4.42641 11.245 3.78291 11.349 3.35391C11.401 3.13941 11.5505 3.12641 11.7455 3.19141C12.2655 6.07741 12.285 10.1594 14.872 12.0964C16.5035 13.3184 18.733 13.5849 20.683 13.9944C20.8195 14.0399 20.774 14.3064 20.7025 14.3779V14.3714Z"
    fill="white"
  />
  <path
    d="M23.5755 4.966C23.504 5.031 22.9515 5.1155 22.7955 5.1675C21.268 5.642 20.891 6.3375 20.54 7.8455C20.4685 8.164 20.501 9.061 19.994 8.6385C19.7405 7.0265 19.487 5.7785 17.797 5.2C17.6085 5.135 16.432 4.966 16.835 4.5955C16.9585 4.4785 18.044 4.264 18.382 4.082C19.63 3.419 19.7535 2.093 20.033 0.851499C20.111 0.773499 20.2605 0.779999 20.345 0.851499C20.4295 0.922999 20.631 2.106 20.7025 2.353C21.0145 3.3865 21.528 3.965 22.555 4.329C22.776 4.407 23.9915 4.5695 23.5755 4.966Z"
    fill="white"
  />
</svg>
          </div>
        </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-center font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
                Protectant & Shine<span className="block text-zinc-500">– $20</span>
              </h4>
                </div>
                <div>
                <div className="flex justify-center items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-black/90 border border-white/10 grid place-items-center shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <svg
  width={26}
  height={26}
  viewBox="0 0 26 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.7025 14.3714C20.631 14.4429 18.941 14.7029 18.655 14.7679C14.287 15.7559 13.052 17.3939 12.259 21.7164C12.064 22.7759 12.012 23.8744 11.83 24.9079C11.791 25.1159 11.635 25.4214 11.414 25.2004C11.323 25.1094 11.219 23.7769 11.18 23.5234C11.0045 22.2819 10.8095 20.9689 10.4585 19.7664C9.47049 16.4254 7.63749 15.4829 4.39398 14.7484C3.85448 14.6249 3.04198 14.5664 2.56748 14.4104C2.26848 14.3064 2.30098 14.0399 2.61948 13.9554C4.35498 13.4679 5.93448 13.4809 7.61149 12.5514C10.3415 11.0434 10.79 7.71541 11.18 4.89441C11.245 4.42641 11.245 3.78291 11.349 3.35391C11.401 3.13941 11.5505 3.12641 11.7455 3.19141C12.2655 6.07741 12.285 10.1594 14.872 12.0964C16.5035 13.3184 18.733 13.5849 20.683 13.9944C20.8195 14.0399 20.774 14.3064 20.7025 14.3779V14.3714Z"
    fill="white"
  />
  <path
    d="M23.5755 4.966C23.504 5.031 22.9515 5.1155 22.7955 5.1675C21.268 5.642 20.891 6.3375 20.54 7.8455C20.4685 8.164 20.501 9.061 19.994 8.6385C19.7405 7.0265 19.487 5.7785 17.797 5.2C17.6085 5.135 16.432 4.966 16.835 4.5955C16.9585 4.4785 18.044 4.264 18.382 4.082C19.63 3.419 19.7535 2.093 20.033 0.851499C20.111 0.773499 20.2605 0.779999 20.345 0.851499C20.4295 0.922999 20.631 2.106 20.7025 2.353C21.0145 3.3865 21.528 3.965 22.555 4.329C22.776 4.407 23.9915 4.5695 23.5755 4.966Z"
    fill="white"
  />
</svg>
          </div>
        </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-center font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
                Pet Hair Removal<span className="block text-zinc-500">– $20</span>
              </h4>
                </div>
                <div>
                <div className="flex justify-center items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-black/90 border border-white/10 grid place-items-center shadow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <svg
  width={26}
  height={26}
  viewBox="0 0 26 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.7025 14.3714C20.631 14.4429 18.941 14.7029 18.655 14.7679C14.287 15.7559 13.052 17.3939 12.259 21.7164C12.064 22.7759 12.012 23.8744 11.83 24.9079C11.791 25.1159 11.635 25.4214 11.414 25.2004C11.323 25.1094 11.219 23.7769 11.18 23.5234C11.0045 22.2819 10.8095 20.9689 10.4585 19.7664C9.47049 16.4254 7.63749 15.4829 4.39398 14.7484C3.85448 14.6249 3.04198 14.5664 2.56748 14.4104C2.26848 14.3064 2.30098 14.0399 2.61948 13.9554C4.35498 13.4679 5.93448 13.4809 7.61149 12.5514C10.3415 11.0434 10.79 7.71541 11.18 4.89441C11.245 4.42641 11.245 3.78291 11.349 3.35391C11.401 3.13941 11.5505 3.12641 11.7455 3.19141C12.2655 6.07741 12.285 10.1594 14.872 12.0964C16.5035 13.3184 18.733 13.5849 20.683 13.9944C20.8195 14.0399 20.774 14.3064 20.7025 14.3779V14.3714Z"
    fill="white"
  />
  <path
    d="M23.5755 4.966C23.504 5.031 22.9515 5.1155 22.7955 5.1675C21.268 5.642 20.891 6.3375 20.54 7.8455C20.4685 8.164 20.501 9.061 19.994 8.6385C19.7405 7.0265 19.487 5.7785 17.797 5.2C17.6085 5.135 16.432 4.966 16.835 4.5955C16.9585 4.4785 18.044 4.264 18.382 4.082C19.63 3.419 19.7535 2.093 20.033 0.851499C20.111 0.773499 20.2605 0.779999 20.345 0.851499C20.4295 0.922999 20.631 2.106 20.7025 2.353C21.0145 3.3865 21.528 3.965 22.555 4.329C22.776 4.407 23.9915 4.5695 23.5755 4.966Z"
    fill="white"
  />
</svg>
          </div>
        </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-center font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
                Ceramic coatings<span className="block text-zinc-500">& waxes</span>
              </h4>
                </div>
              </div>
        </div>
       
        </section> 
        
      </main>

    </div>
  );
}
