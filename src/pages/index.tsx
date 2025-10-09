import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from '@/components/button';
import PackageCard from '@/components/PackageCard';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function Home() {
  const router = useRouter();
  return (
    <>
    <head> 
      <title>J.S. Auto Detail</title>
    </head>
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
             <Button onClick={() => router.push("/book")} variant="primary">Book Your Detail Today</Button>
            </div>
          </div>
        </section>
        <section id="services" className="bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  py-32 flex flex-col gap-16  justify-end">
        <div className="flex flex-col gap-3 text-zinc-900 flex flex-col text-center justify-center items-center">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
             Customize Your Detail
             <span className="block text-lg" style={{fontFamily: 'Satoshi',letterSpacing:'10px'}}>Made Simple</span>
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl text-slate-500 ">
              From a quick wash to full showroom treatment, we’ve got the right package for every car and every budget.</p>
              <Button onClick={() => router.push("/book")}>Book Now</Button></div>
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
        <section id="interior" className=" bg-cover bg-center bg-no-repeat flex items-center justify-start" style={{backgroundImage: 'url(/interiorpackagebg.png)'}}>
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
            onBook={() => router.push("/book")}
              iconSrc="/interrioricon.svg"
              title="Basic Interior"
              subtitle="Vacuum, wipe down, windows"
              startingLabel="Starting From"
              price="$80"
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
        <td className="border border-black/20 px-4 py-3">$80.00</td>
        <td className="border border-black/20 px-4 py-3">$110.00</td>
        <td className="border border-black/20 px-4 py-3">$140.00</td>
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
            onBook={() => router.push("/book")}
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
  <table className="w-full mt-8 border-collapse border border-black/20 text-left text-sm md:text-base text-black">
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
            <PackageCard
            onBook={() => router.push("/book")}
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
        <section id="exterior" className="relative  bg-cover bg-center bg-no-repeat flex items-center justify-start" style={{backgroundImage: 'url(/exteriorpackagebg.png)'}}>
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
            onBook={() => router.push("/book")}
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
            onBook={() => router.push("/book")}
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
              <section id="addons" className="bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  py-32 flex flex-col gap-16  justify-end">
        <div className="flex flex-col gap-3 text-zinc-900 flex flex-col text-center justify-center items-center">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Customize Your Detail
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl text-slate-500 ">
              Need a little extra? Add finishing touches to make your car truly shine.</p>
              <Button onClick={() => router.push("/book")}>Get Addons</Button></div>
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
  <g clipPath="url(#clip0_18_2983)">
    <path
      d="M16.64 0.494074C17.4395 0.403074 18.265 0.656574 18.8825 1.16357L24.83 7.11757C25.6815 8.20307 25.675 9.74357 24.804 10.8161L17.4525 18.1676C16.341 19.0711 14.768 19.0386 13.676 18.1156C11.6415 16.3931 9.82153 14.0141 7.80003 12.2331C6.90303 11.1736 6.87703 9.55507 7.77403 8.48257L15.132 1.14407C15.5285 0.812574 16.1265 0.552574 16.64 0.494074ZM16.783 2.16457C16.3605 2.21007 15.9575 2.41157 15.639 2.69107L9.26903 9.06107C8.61903 9.82807 8.63853 10.8876 9.26903 11.6611C10.6925 13.3966 12.805 14.9566 14.2935 16.6856C15.041 17.3161 16.1525 17.3356 16.8935 16.6856L23.335 10.2441C23.959 9.45107 23.9395 8.45657 23.309 7.67007C21.5995 6.17507 20.059 4.12757 18.3365 2.69757C17.8945 2.32707 17.368 2.11257 16.783 2.17107V2.16457Z"
      fill="white"
    />
    <path
      d="M6.65603 15.9121C6.65603 15.9706 6.68203 16.0291 6.71453 16.0746C7.42303 17.1081 8.59303 17.9531 9.42503 18.9021L10.036 19.3636L4.44603 24.9471C2.05403 26.6891 -0.77997 23.7251 1.06603 21.4241L6.52603 15.9641L6.64953 15.9186L6.65603 15.9121Z"
      fill="white"
    />
    <path
      d="M7.65695 13.5134L12.4084 18.3169C11.7909 18.7459 10.9849 18.7459 10.3414 18.3754C9.89295 18.1154 8.15745 16.3539 7.78045 15.8924C7.22145 15.2099 7.11745 14.2414 7.65695 13.5134Z"
      fill="white"
    />
    <path
      d="M16.835 3.13945C17.212 3.08095 17.4785 3.24345 17.758 3.47095C19.162 5.08945 21.112 6.54545 22.464 8.17695C22.88 8.67745 22.9905 9.09995 22.5615 9.64595L16.2695 15.9444C15.964 16.1979 15.5155 16.2369 15.158 16.0744C13.39 14.4949 11.778 12.7204 10.0685 11.0694C9.69148 10.6469 9.68498 10.0229 10.0945 9.61995L16.289 3.42545C16.432 3.29545 16.653 3.17195 16.8415 3.14595L16.835 3.13945ZM16.9325 4.30945C16.4125 4.37445 16.3345 5.19345 16.874 5.27795C17.6865 5.40795 17.628 4.22495 16.9325 4.30945ZM15.9445 5.83694C15.509 5.38844 14.794 6.09695 15.2425 6.53895C15.691 6.98095 16.3995 6.30494 15.9445 5.83694ZM18.2065 5.73294C17.7385 5.83694 17.797 6.64945 18.3495 6.68845C19.032 6.73395 19.0515 5.54444 18.2065 5.73294ZM14.0855 7.10445C13.5915 7.21495 13.598 7.98845 14.1375 8.06645C14.885 8.17695 14.8785 6.92895 14.0855 7.10445ZM16.614 7.91695C17.0365 8.39795 17.784 7.71545 17.355 7.24745C16.926 6.77944 16.1785 7.42295 16.614 7.91695ZM19.6235 7.10445C19.162 7.20845 19.1425 7.92345 19.6365 8.05345C20.4035 8.25495 20.4425 6.92245 19.6235 7.10445ZM12.714 8.47595C12.155 8.59945 12.2395 9.52245 12.896 9.44445C13.5525 9.36645 13.3575 8.33295 12.714 8.47595ZM15.509 8.47595C14.8915 8.58645 15.041 9.59395 15.73 9.43795C16.2955 9.30795 16.1395 8.36545 15.509 8.47595ZM18.304 8.47595C17.771 8.55395 17.7255 9.36645 18.2975 9.44445C19.071 9.54845 19.0125 8.37195 18.304 8.47595ZM21.047 8.47595C20.4295 8.58645 20.579 9.59395 21.268 9.43795C21.8465 9.30795 21.6905 8.36545 21.047 8.47595ZM11.4335 9.86695C10.803 9.86695 10.777 10.9459 11.5765 10.8159C12.077 10.7379 12.064 9.86045 11.4335 9.86695ZM14.222 9.86695C13.5915 9.86695 13.5785 10.7379 14.079 10.8159C14.8785 10.9394 14.859 9.86695 14.222 9.86695ZM16.978 9.85395C16.4125 9.86045 16.3215 10.7249 16.874 10.8159C17.6605 10.9394 17.6475 9.84095 16.978 9.85395ZM20.111 10.0034C19.6495 9.54845 18.954 10.2374 19.409 10.7054C19.864 11.1734 20.5595 10.4454 20.111 10.0034ZM12.6685 11.2709C12.1615 11.3879 12.2785 12.3044 12.8895 12.2329C13.5005 12.1614 13.455 11.0954 12.6685 11.2709ZM15.457 11.2709C14.95 11.3879 15.0215 12.2849 15.6325 12.2329C16.315 12.1679 16.1785 11.1149 15.457 11.2709ZM18.2065 11.2709C17.6995 11.3879 17.8295 12.3044 18.4275 12.2329C19.0255 12.1614 18.9995 11.0889 18.2065 11.2709ZM14.092 12.6424C13.5265 12.7659 13.6565 13.6824 14.274 13.6109C14.9435 13.5329 14.794 12.4864 14.092 12.6424ZM16.8805 12.6424C16.2695 12.7594 16.4515 13.7474 17.1015 13.6044C17.6865 13.4744 17.5305 12.5189 16.8805 12.6424ZM15.561 14.0139C14.794 14.0984 15.132 15.2879 15.834 14.9304C16.2955 14.6964 16.0615 13.9619 15.561 14.0139Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_18_2983">
      <rect width={26} height={26} fill="white" />
    </clipPath>
  </defs>
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
    d="M10.7965 10.1335H5.8045C5.6485 10.1335 5.4925 10.4975 5.434 10.621C4.9205 11.6155 4.5305 12.7595 4.056 13.78H16.9585L18.226 13.5785L18.3235 13.624L19.461 16.237L19.4415 22.8995C19.383 23.179 19.1035 23.4455 18.8175 23.491C18.4405 23.556 16.3085 23.556 15.977 23.4715C15.769 23.4195 15.4115 23.088 15.4115 22.8735V20.2605H5.681V22.8735C5.681 23.166 5.2325 23.478 4.9465 23.504C4.407 23.5625 2.847 23.569 2.314 23.504C1.911 23.452 1.6575 23.1205 1.625 22.724C1.443 20.6635 1.7615 18.33 1.625 16.237L2.886 13.3705C2.2815 13.1755 0.968504 13.273 0.819004 12.4735C0.754004 12.0965 0.702004 11.401 1.183 11.3425C1.5665 11.297 3.666 11.4075 3.783 11.336C4.251 10.4195 4.446 9.06097 5.694 8.91797H10.296L10.7835 10.127L10.7965 10.1335ZM4.6475 15.8275C3.1525 16.068 3.432 18.447 5.0375 18.2455C6.643 18.044 6.305 15.5675 4.6475 15.8275ZM16.003 15.8275C14.508 16.068 14.7875 18.447 16.393 18.2455C17.9985 18.044 17.6605 15.5675 16.003 15.8275ZM8.7555 16.2305C7.891 16.445 7.891 17.615 8.7555 17.8295C9.854 17.7515 11.2255 17.979 12.285 17.836C13.1885 17.7125 13.195 16.3735 12.3305 16.2305C11.297 16.055 9.8345 16.328 8.7555 16.2305Z"
    fill="white"
  />
  <path
    d="M21.3915 9.42496C21.3915 9.36646 21.3525 9.31446 21.32 9.26896C20.4035 8.19646 19.5 6.97446 18.551 5.95396C17.3875 4.69946 15.483 4.58896 14.5275 6.13596C13.858 7.21496 14.1375 8.20946 14.8525 9.14546C15.717 10.2765 16.77 11.3295 17.641 12.467C16.3345 12.74 14.976 12.467 13.845 11.778C10.53 9.75646 10.5495 4.84896 13.845 2.81446C17.901 0.311963 22.893 4.02346 21.736 8.62546C21.7165 8.69696 21.4825 9.48996 21.398 9.42496H21.3915Z"
    fill="white"
  />
  <path
    d="M16.5555 6.20107C16.9975 6.19457 17.342 6.40907 17.615 6.74057L23.1595 13.4161L21.385 14.9306H21.2875L15.548 8.04707C15.0605 7.27357 15.6455 6.22057 16.5555 6.20757V6.20107Z"
    fill="white"
  />
  <path
    d="M24.531 23.5169H23.3155V22.5289C23.3155 22.1844 22.1845 21.3524 21.9375 20.8649C21.112 19.2464 22.3015 18.6289 23.0295 17.5304C23.5755 16.7179 23.062 16.1719 22.555 15.5349L23.4455 14.8069C24.206 15.4699 24.7195 16.6009 24.362 17.6019C24.089 18.3754 23.3805 18.7849 23.049 19.4284C22.529 20.4229 23.6925 20.8259 24.167 21.5214C24.2775 21.6839 24.531 22.2039 24.531 22.3729V23.5104V23.5169Z"
    fill="white"
  />
  <path
    d="M7.23448 2.43742C7.37098 2.39842 7.48798 2.49592 7.53998 2.61942C7.63098 2.85342 7.81298 4.21192 7.90398 4.28342C8.21598 4.39392 9.49648 4.52392 9.65898 4.70592C9.79548 4.86192 9.72398 5.03092 9.54198 5.10242C9.30798 5.19342 7.93648 5.38842 7.87798 5.46642L7.53998 7.10442C7.43598 7.35142 7.16298 7.36442 7.05898 7.10442C6.96798 6.87042 6.78598 5.51192 6.69498 5.44042L5.05698 5.10242C4.80998 4.99842 4.79698 4.72542 5.05698 4.62142C5.29098 4.53042 6.64948 4.34842 6.72098 4.25742L7.05898 2.61942C7.08498 2.55442 7.16298 2.45692 7.23448 2.43742Z"
    fill="white"
  />
</svg>

          </div>
        </div>
                <h4 className="text-lg ml-4 mt-4 md:text-xl text-center font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
                Ceramic coatings<span className="block ">& waxes</span>
              </h4>
                </div>
              </div>
        </div>
       
        </section> 
        <section id="paint" className="bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  py-32 flex flex-col gap-16  justify-end">
        <div className="flex flex-col gap-3 text-zinc-900 flex flex-col text-center justify-center items-center">
              <h2 className="text-xl md:text-3xl  font-bold   italic uppercase" style={{fontFamily: 'Nippo'}}>
              Restore Your Car’s True Color
              </h2>
              <p className="text-md md:text-lg mb-5 max-w-2xl text-slate-500 ">
              From clay bar treatments to bug and tar removal, we bring dull paint back to life.</p>
             </div>
             <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="./beforepaint.png"  alt="before paint" />}
      itemTwo={<ReactCompareSliderImage src="./afterpaint.png"  alt="after paint" />}
    />
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
                Clay Bar Kits (Light, Medium, <span className="block">Heavy) – Starting at $60</span>
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
                Grill Bug & Tar Removal<span className="block"> – Starting at $60</span>
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
                Swirl & Scratch Kits, <span className="block">Ceramic Coating</span>
              </h4>
                </div>
                
              </div>
        </div>
       
        </section> 
        <footer className="bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl   py-8 flex flex-col md:flex-row gap-16  justify-between">
          <div className="flex flex-col gap-8 max-w-82">
          <svg
  width={252}
  height={63}
  viewBox="0 0 252 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M83.37 52.1163C83.37 51.7663 84.18 50.3964 84.33 49.6664C85.34 44.7864 86.44 34.7363 85.65 30.1063C85.1 26.8763 82.48 26.0463 80.26 24.2263C85.4 24.6363 86.29 20.2563 81.32 19.8863C77.94 19.6363 79.11 21.8963 78.36 22.8763C77.06 24.5763 75.6 19.8463 75.25 19.2363C71.97 13.5963 70.52 13.3763 63.81 12.7963C58.35 12.3263 51.67 12.3963 46.13 13.0963C42.17 13.5963 40.99 13.9363 38.24 17.0163C37.44 17.9163 34.02 22.9863 33.66 23.0963C32.01 23.6263 32.8 21.6063 32.53 20.7463C31.99 19.0363 27.41 20.1063 26.54 21.8563C25.59 23.7763 29.27 24.1963 30.45 24.3563C27.41 25.9663 24.82 27.2463 23.69 30.7363C22.22 35.2963 21.31 45.2263 21.46 49.9063C21.48 50.5463 22.02 51.7463 21.95 52.1163C21.87 52.5063 20.49 53.1964 20.63 53.8864C21 54.8264 25.13 55.3863 26.21 55.5063C38.24 56.9163 52.21 56.4063 64.51 56.0463C69.23 55.9063 73.95 56.0463 78.69 55.4763C79.68 55.3563 83.78 54.8563 84.15 53.9663C84.59 52.9163 83.36 52.5663 83.36 52.1163H83.37ZM28.89 32.1163C29.65 32.0163 30.67 32.1163 30.7 33.0663C29.97 34.2863 28.52 32.3963 28.89 32.1163ZM32.17 35.4564C30.09 35.0163 27.62 35.6763 27.23 33.0063C27.16 32.4863 27.03 31.6364 27.82 31.8463C27.76 35.1763 29.89 34.6263 32.4 35.1063L32.24 34.0163H32.78L33.22 35.2263L35.29 36.1863C33.93 36.6163 33.11 35.6463 32.16 35.4463L32.17 35.4564ZM80.32 32.1263C80.21 32.7963 78.66 34.2263 78.33 33.0763C78.04 32.0663 79.74 32.1063 80.32 32.1263ZM76.39 35.4564C75.4 35.6564 74.4 36.6263 73.12 36.1963L75.38 35.2363C75.98 34.8463 75.92 33.5563 76.59 34.1663L76.22 35.1163C77.56 34.5563 79.63 35.2463 80.66 33.8663C81.14 33.2263 81.03 31.7263 81.97 31.8563C81.67 35.6763 79.08 34.9163 76.39 35.4663V35.4564Z"
    fill="#1A0E31"
  />
  <path
    d="M67.03 19.5767C66.72 19.0867 65.88 18.1167 64.16 18.1467C62.18 18.1867 61.11 20.4667 60.85 21.0867C60.81 21.1767 60.72 21.2467 60.62 21.2467H50.29C50.19 21.2467 50.11 21.1867 50.09 21.0867C49.95 20.4567 49.33 18.1767 47.35 18.1467C45.64 18.1167 44.61 19.0867 44.2 19.5767C44.15 19.6367 44.06 19.5967 44.08 19.5167C44.3 18.8367 45.04 17.3267 47.29 17.1267C49.45 16.9367 51.28 17.0167 52.16 17.2467C52.45 17.3267 52.71 17.5367 52.76 17.8367C52.78 17.9667 52.89 18.0467 53.02 18.0467C53.63 18.0367 55.32 18.0067 55.76 18.0167C56.2 18.0067 57.88 18.0267 58.49 18.0467C58.62 18.0467 58.74 17.9567 58.79 17.8367C58.91 17.5367 59.2 17.3167 59.51 17.2467C60.43 17.0267 62.27 16.9367 64.4 17.1267C66.61 17.3267 67.06 18.8367 67.15 19.5167C67.15 19.5867 67.06 19.6367 67.02 19.5767H67.03Z"
    fill="url(#paint0_linear_37_122)"
  />
  <path
    d="M84.46 36.4268C84.58 35.8468 84.86 31.6068 84.25 29.3668C84.15 28.9968 83.96 28.6468 83.7 28.3068C82.38 26.6068 79.34 25.3568 77.59 24.5468C77.52 25.8968 75.09 29.1068 70.67 32.3768C71.81 30.5168 76.42 26.0168 77.25 24.7368C78.08 23.4568 68.26 24.0268 68.26 24.0268C68.26 24.0268 70.78 24.5368 73.78 24.7368C73.18 24.9268 68.69 24.9268 67.97 25.0568C67.25 25.1868 66.5 26.2768 62.22 31.3468C62.86 28.7168 66.95 23.5768 66.95 23.5768L55.39 23.4468H55.23H55.07L43.49 23.5768C43.49 23.5768 46.59 28.7168 46.72 31.3468C43.42 26.2768 42.89 25.1768 42.19 25.0568C41.5 24.9268 37 24.9268 36.44 24.7368C39.48 24.5468 42.1 24.0268 42.1 24.0268C42.1 24.0268 32.39 23.4468 32.98 24.7368C33.56 26.0168 37.29 30.4968 38.08 32.3668C38.08 32.3668 38.08 32.3668 38.08 32.3768C38.07 32.3668 38.05 32.3468 38.04 32.3368C34.28 29.0768 32.48 25.8868 32.68 24.5368C30.89 25.2968 27.87 26.4468 26.15 27.9968C25.68 28.4168 25.31 28.8668 25.09 29.3468C24.04 31.5968 23.5 35.8368 23.51 36.4068C23.51 36.6468 24.28 37.2868 25.77 37.9468C26.55 38.2968 27.53 38.6568 28.69 38.9668C28.93 39.0268 29.18 39.0968 29.43 39.1568C29.84 39.2568 30.27 39.3468 30.72 39.4268C32.2 39.6968 33.9 39.8968 35.81 39.9368C35.81 40.1568 35.74 40.4268 35.66 40.6768C35.52 41.0768 35.35 41.4068 35.35 41.4068C35.35 41.4068 26.89 37.9368 24.53 39.0268C23.9 39.5368 22.7 45.9668 23.19 47.5668C23.17 47.8268 23.67 48.2768 23.4 48.4368C23.13 48.5968 22.59 48.1468 22.45 48.6268C22.31 49.1068 22.47 49.3668 22.9 49.5868C23.33 49.8068 26.15 50.5168 29.71 50.8368C33.09 51.1368 35.71 50.6368 36.83 49.4068C36.95 49.2768 36.98 49.0968 36.93 48.9468C36.55 47.9268 34.89 44.7168 34.75 45.2468C34.6 45.8268 36.13 48.3868 33.65 48.8368C31.34 49.2568 26.63 47.2368 25.96 46.9468C25.94 46.9468 25.92 46.9668 25.93 46.9768C26.22 47.3668 27.86 49.2368 32.16 49.6668C27.73 50.0168 23.92 48.5468 23.93 47.4168C23.94 46.2968 23.98 40.6468 26.47 40.7368C28.96 40.8368 33.04 41.8268 34.38 42.6268C35.72 43.4268 37.81 47.9568 38.28 48.7568C38.75 49.5568 38.76 50.4068 41.72 50.3668C44.17 50.3268 51.09 50.3868 52.48 50.3968C52.54 50.3968 52.59 50.3968 52.62 50.3968C52.65 50.3968 52.69 50.3968 52.72 50.3968C54.12 50.3868 61.04 50.3268 63.49 50.3668C66.44 50.4168 66.62 49.5668 67.24 48.7568C67.86 47.9568 70.84 43.4268 72.33 42.6268C73.82 41.8268 78.09 40.8268 80.61 40.7368C83.13 40.6468 82.06 46.2868 81.86 47.4168C81.65 48.5368 77.56 50.0168 73.2 49.6668C77.58 49.2368 79.58 47.3568 79.95 46.9768C79.97 46.9568 79.95 46.9368 79.93 46.9468C79.21 47.2368 74.1 49.2568 71.88 48.8368C69.48 48.3868 71.52 45.8168 71.48 45.2468C71.44 44.7268 69.16 47.9268 68.59 48.9468C68.51 49.0968 68.51 49.2768 68.59 49.4068C69.47 50.6368 71.99 51.1368 75.43 50.8368C79.06 50.5168 82.02 49.8068 82.49 49.5868C82.96 49.3668 83.18 49.1068 83.13 48.6268C83.08 48.1468 82.46 48.5968 82.22 48.4368C81.98 48.2768 82.57 47.8268 82.59 47.5668C83.39 45.9568 83.43 39.5368 82.9 39.0268C82.34 38.7368 81.29 38.7668 80.06 38.9668C79.54 39.0468 79 39.1568 78.44 39.2868C75.23 40.0368 71.63 41.3968 71.63 41.3968C71.63 41.3968 71.53 41.1068 71.47 40.7568C71.42 40.4868 71.4 40.1768 71.45 39.9168C79.5 39.7268 84.32 36.9668 84.44 36.3868L84.46 36.4268ZM70.71 41.4368C70.81 42.3968 66.55 48.5068 65.42 49.2968C64.67 49.8268 54.54 49.6368 52.82 49.5968C52.77 49.5968 52.73 49.5968 52.7 49.5968C52.66 49.5968 52.62 49.5968 52.57 49.5968C50.84 49.6368 40.69 49.8168 40.03 49.2868C39.05 48.4968 35.98 42.3968 36.27 41.4268C36.31 41.2768 36.44 41.0368 36.62 40.7268C37.61 39.0368 40.37 35.4668 41.84 35.3568C43.31 35.3268 52.77 35.2168 54.09 35.2068C55.46 35.2268 64.84 35.3268 66.29 35.3568C67.9 35.4768 70.27 39.8568 70.64 41.2068C70.67 41.2968 70.68 41.3768 70.69 41.4368H70.71Z"
    fill="url(#paint1_linear_37_122)"
  />
  <path
    d="M84.46 36.4266C84.34 37.0066 79.51 39.7666 71.47 39.9566C71.42 40.2066 71.44 40.5166 71.49 40.7966L70.67 41.2066C70.3 39.8666 67.93 35.4766 66.32 35.3566C64.87 35.3266 55.49 35.2166 54.12 35.2066C52.8 35.2166 43.34 35.3266 41.87 35.3566C40.39 35.4666 37.64 39.0366 36.65 40.7266C36.27 40.7166 35.95 40.7066 35.68 40.6966C35.77 40.4466 35.83 40.1766 35.83 39.9566C33.92 39.9066 32.22 39.7166 30.74 39.4466C30.29 39.3666 29.86 39.2766 29.45 39.1766C29.19 39.1066 28.94 39.0466 28.71 38.9866C27.67 38.7266 26.8 38.4866 25.79 37.9666C24.3 37.3066 23.53 36.6666 23.53 36.4266C23.53 35.8466 24.06 31.6066 25.11 29.3666C25.34 28.8866 25.71 28.4366 26.17 28.0166C26.33 28.1066 26.43 28.1766 26.43 28.1766C26.43 28.1766 33.02 28.8266 38.06 32.3466C38.07 32.3466 38.09 32.3666 38.1 32.3766C38.86 32.9066 39.57 33.4966 40.23 34.1666C42.72 33.4366 65.94 33.0166 69.31 33.8066C69.31 33.8066 77.16 27.2466 83.71 28.3166C83.97 28.6566 84.16 29.0066 84.26 29.3766C84.88 31.6266 84.59 35.8666 84.47 36.4366L84.46 36.4266Z"
    fill="url(#paint2_linear_37_122)"
  />
  <path
    d="M39.3 35.1565C39.25 35.0965 39.18 35.0765 39.1 35.0765C38.3 35.0965 38.31 34.9265 37.78 34.5765C37.25 34.2265 30.21 29.4565 26.8 30.0865C25.98 30.3065 25.57 33.5065 25.95 34.6365C26.33 35.7665 32.51 37.8065 34.55 37.6965C36.59 37.5865 37.44 35.6165 37.75 35.5365C38.06 35.4565 39.04 35.6865 39.26 35.4365C39.37 35.3165 39.35 35.2265 39.3 35.1665V35.1565Z"
    fill="#11122F"
  />
  <path
    d="M69.3601 35.1365C69.4201 35.0765 69.5001 35.0565 69.5801 35.0565C70.3701 35.0765 70.4 34.9065 70.99 34.5565C71.58 34.2065 79.55 29.4365 82.84 30.0665C83.62 30.2865 83.41 33.4865 82.81 34.6165C82.21 35.7465 75.6401 37.7865 73.6101 37.6765C71.5801 37.5665 71.1301 35.5965 70.8301 35.5165C70.5301 35.4365 69.51 35.6665 69.34 35.4165C69.26 35.2965 69.29 35.2065 69.35 35.1465L69.3601 35.1365Z"
    fill="#11122F"
  />
  <path
    d="M68.96 51.5663C68.15 51.7363 64.62 52.2764 52.73 52.3064C52.69 52.3064 52.65 52.3064 52.61 52.3064C52.57 52.3064 52.53 52.3064 52.49 52.3064C40.61 52.2764 37.18 51.7363 36.4 51.5663C36.37 51.5663 36.38 51.5163 36.4 51.5163H52.54L52.81 51.5063H68.95C68.95 51.5063 68.98 51.5663 68.95 51.5663H68.96Z"
    fill="url(#paint3_linear_37_122)"
  />
  <path
    d="M75.2 44.1367C77.39 44.0967 79.31 43.5267 79.94 43.3167C79.98 43.3067 80.01 43.3567 79.97 43.3867C79.41 43.7667 77.68 44.7467 75.18 44.2167C75.14 44.2167 75.15 44.1467 75.19 44.1467L75.2 44.1367Z"
    fill="url(#paint4_linear_37_122)"
  />
  <path
    d="M76.17 23.8665L75.29 23.8365C75.29 23.8365 72.5 17.1865 70.39 15.8165C68.71 14.7365 58.13 14.7465 56.37 14.7465C56.33 14.7465 56.3 14.7465 56.27 14.7465C56.27 14.7465 56.19 14.7465 56.13 14.7465C54.37 14.7465 43.79 14.7265 41.91 15.8165C39.53 17.1865 35.45 23.8365 35.45 23.8365L34.57 23.8665C34.57 23.8665 39.05 16.1765 42.01 14.8465C44.76 13.6065 54.97 13.6765 56.36 13.6865C57.76 13.6665 67.98 13.5965 70.49 14.8465C73.19 16.1865 76.18 23.8665 76.18 23.8665H76.17Z"
    fill="url(#paint5_linear_37_122)"
  />
  <path
    d="M79.5 22.7166C79.5 22.7166 80.29 20.8066 83.82 22.3566C82.86 20.0166 78.76 20.3166 79.5 22.7166Z"
    fill="url(#paint6_linear_37_122)"
  />
  <path
    d="M31.6 44.1367C29.42 44.0967 27.61 43.5267 27.01 43.3167C26.97 43.3067 26.94 43.3567 26.97 43.3867C27.45 43.7667 29 44.7467 31.6 44.2167C31.64 44.2167 31.65 44.1467 31.6 44.1467V44.1367Z"
    fill="url(#paint7_linear_37_122)"
  />
  <path
    d="M31.45 22.7166C31.45 22.7166 31.03 20.8066 27.2 22.3566C28.61 20.0166 32.65 20.3166 31.45 22.7166Z"
    fill="url(#paint8_linear_37_122)"
  />
  <path
    d="M81.98 31.8467C81.68 35.6667 79.09 34.9067 76.4 35.4567C75.41 35.6567 74.41 36.6267 73.13 36.1967L75.39 35.2367C75.99 34.8467 75.93 33.5567 76.6 34.1667L76.23 35.1167C77.57 34.5567 79.64 35.2467 80.68 33.8667C81.16 33.2267 81.05 31.7267 81.99 31.8567L81.98 31.8467Z"
    fill="white"
  />
  <path
    d="M27.82 31.8464C27.76 35.1764 29.89 34.6264 32.4 35.1064L32.24 34.0164H32.78L33.22 35.2264L35.29 36.1864C33.93 36.6164 33.11 35.6464 32.16 35.4464C30.08 35.0064 27.61 35.6664 27.22 32.9964C27.15 32.4764 27.02 31.6264 27.81 31.8364L27.82 31.8464Z"
    fill="white"
  />
  <path
    d="M80.32 32.1264C80.21 32.7964 78.66 34.2264 78.33 33.0764C78.04 32.0664 79.74 32.1064 80.32 32.1264Z"
    fill="white"
  />
  <path
    d="M28.89 32.1163C29.65 32.0163 30.67 32.1163 30.7 33.0663C29.97 34.2863 28.53 32.3963 28.89 32.1163Z"
    fill="white"
  />
  <path
    d="M38.54 40.5767C40.43 40.8267 42.35 40.9667 44.25 41.0767C48.2 41.3067 52.2 41.3167 56.16 41.2467C57.21 41.2067 58.45 41.1867 59.5 41.1367C60.18 41.1067 61.2 41.0567 61.88 41.0367C62.97 40.9867 64.13 40.9067 65.22 40.8567C66.49 40.7767 67.77 40.6867 69.05 40.6367C68.74 40.7067 68.42 40.7667 68.11 40.8267C67.18 40.9967 66.2 41.2067 65.28 41.3467C64.2 41.4967 63.04 41.6767 61.95 41.7967C61.07 41.8867 59.96 41.9967 59.08 42.0667C58.2 42.1267 57.08 42.1867 56.2 42.2367C55.89 42.2467 54.15 42.2867 53.8 42.2967C50.6 42.3167 47.38 42.1667 44.2 41.7367C42.3 41.4767 40.38 41.1467 38.55 40.5767H38.54Z"
    fill="white"
  />
  <path
    d="M42.56 45.2466C43.28 45.7266 43.64 46.5366 43.7 47.3666C43.7 47.6466 43.7 47.9266 43.58 48.2466C43.29 48.0666 43.11 47.8466 42.95 47.6266C42.49 46.9266 42.29 46.0766 42.57 45.2566L42.56 45.2466Z"
    fill="white"
  />
  <path
    d="M64.14 45.1567C64.28 46.0567 63.93 46.9167 63.37 47.5867C63.17 47.7967 62.95 48.0067 62.64 48.1567C62.58 47.8067 62.61 47.5167 62.66 47.2267C62.85 46.3767 63.34 45.5767 64.14 45.1567Z"
    fill="white"
  />
  <path
    d="M38.45 42.1367C40.34 42.3867 42.26 42.5267 44.16 42.6367C48.11 42.8667 52.11 42.8767 56.07 42.8067C57.12 42.7667 58.36 42.7467 59.41 42.6967C60.09 42.6667 61.11 42.6167 61.79 42.5967C62.88 42.5467 64.04 42.4667 65.13 42.4167C66.4 42.3367 67.68 42.2467 68.96 42.1967C68.65 42.2667 68.33 42.3267 68.02 42.3867C67.09 42.5567 66.11 42.7667 65.19 42.9067C64.11 43.0567 62.95 43.2367 61.86 43.3567C60.98 43.4467 59.87 43.5567 58.99 43.6267C58.11 43.6867 56.99 43.7467 56.11 43.7967C55.8 43.8067 54.06 43.8467 53.71 43.8567C50.51 43.8767 47.29 43.7267 44.11 43.2967C42.21 43.0367 40.29 42.7067 38.46 42.1367H38.45Z"
    fill="white"
  />
  <path
    d="M43.01 33.8067C46.94 33.3267 50.93 33.1667 54.88 33.1267C58.84 33.1067 62.82 33.1967 66.77 33.5267C58.95 33.4567 50.81 33.4167 43.01 33.8167V33.8067Z"
    fill="#231F20"
  />
  <path
    d="M95.6 33.7867L93.61 30.9167L95.28 25.4967H100.54L99.45 29.0467H101.95L106.15 15.3667H111.41L106.63 30.9167L102.88 33.7867H95.59H95.6Z"
    fill="white"
  />
  <path
    d="M115.2 28.7368L113.65 33.7868H108.39L109.94 28.7368H115.2Z"
    fill="white"
  />
  <path
    d="M118.36 33.7867L116.37 30.9167L117.31 27.8667H122.41L121.88 29.5767H125.9L126.79 26.6867H120.56L118.57 23.8167L120.28 18.2367L124.03 15.3667H132.29L134.28 18.2367L133.33 21.3167H128.23L128.76 19.5767H124.97L124.08 22.4667H130.31L132.3 25.3367L130.59 30.9167L126.84 33.7867H118.34H118.36Z"
    fill="white"
  />
  <path
    d="M138.38 28.7368L136.83 33.7868H131.57L133.12 28.7368H138.38Z"
    fill="white"
  />
  <path
    d="M143.4 33.7867L149.06 15.3667H154.22L153.61 17.3367L157.56 23.0467L165.02 17.3367L165.63 15.3667H170.79L165.13 33.7867H159.97L161.83 27.7367C162.16 26.6567 162.78 24.9767 163.3 23.7367L158.76 27.2067L157.72 30.5767H152.77L153.81 27.2067L151.4 23.7367C151.15 24.9767 150.74 26.6567 150.41 27.7367L148.55 33.7867H143.39H143.4Z"
    fill="white"
  />
  <path
    d="M170.24 33.7867L168.25 30.9167L172.15 18.2367L175.9 15.3667H185.69L187.68 18.2367L183.78 30.9167L180.03 33.7867H170.24ZM174.08 29.0467H179.08L181.83 20.0967H176.83L174.08 29.0467Z"
    fill="white"
  />
  <path
    d="M185.12 33.7867L190.78 15.3667H202.49L204.48 18.2367L203.12 22.6567L200.71 24.4967L202.09 26.4967L200.73 30.9167L196.98 33.7867H185.12ZM196.28 26.4167H192.65L191.68 29.5767H195.89L196.68 26.9967L196.28 26.4167ZM198.8 19.5767H194.75L193.78 22.7367H197.25L198.01 22.1567L198.8 19.5767Z"
    fill="white"
  />
  <path
    d="M207.62 15.3667H212.88L207.22 33.7867H201.96L207.62 15.3667Z"
    fill="white"
  />
  <path
    d="M210.12 33.7867L215.78 15.3667H221.04L216.84 29.0467H223.42L221.96 33.7867H210.12Z"
    fill="white"
  />
  <path
    d="M222.22 33.7867L227.88 15.3667H240.61L239.15 20.1067H231.68L230.9 22.6567H236.42L235.21 26.6067H229.69L228.94 29.0567H236.57L235.11 33.7967H222.22V33.7867Z"
    fill="white"
  />
  <path
    d="M95.27 51.1866L93.64 48.8266L94.41 46.3166H98.61L98.18 47.7266H101.49L102.22 45.3466H97.09L95.46 42.9866L96.87 38.3966L99.95 36.0366H106.74L108.37 38.3966L107.59 40.9266H103.39L103.83 39.4966H100.71L99.98 41.8766H105.11L106.74 44.2366L105.33 48.8266L102.25 51.1866H95.26H95.27Z"
    fill="white"
  />
  <path
    d="M106.35 51.1864L111 36.0464H121.47L120.27 39.9364H114.13L113.49 42.0364H118.03L117.03 45.2764H112.49L111.87 47.2864H118.14L116.94 51.1764H106.34L106.35 51.1864Z"
    fill="white"
  />
  <path
    d="M118.46 51.1864L123.11 36.0464H132.78L134.41 38.4064L132.87 43.4064L130.86 44.9464L131.98 46.5664L130.56 51.1964H126.23L127.46 47.1964L127.13 46.7164H124.14L122.76 51.1964H118.43L118.46 51.1864ZM129.75 39.5064H126.37L125.22 43.2464H128.12L128.74 42.7664L129.74 39.4964L129.75 39.5064Z"
    fill="white"
  />
  <path
    d="M135.76 36.0464H140.09L139.24 38.8164L139.13 46.9264L144 38.8164L144.85 36.0464H149.18L148.27 39.0064L140.61 51.1864H135.03L134.87 38.9664L135.77 36.0464H135.76Z"
    fill="white"
  />
  <path
    d="M150.26 36.0464H154.59L149.94 51.1864H145.61L150.26 36.0464Z"
    fill="white"
  />
  <path
    d="M154.13 51.1866L152.5 48.8266L155.7 38.3966L158.78 36.0366H166.31L167.94 38.3966L166.83 42.0066H162.5L163.14 39.9266H159.55L157.29 47.2766H160.88L161.52 45.1966H165.85L164.74 48.8066L161.66 51.1666H154.13V51.1866Z"
    fill="white"
  />
  <path
    d="M165.63 51.1864L170.28 36.0464H180.75L179.55 39.9364H173.41L172.77 42.0364H177.31L176.31 45.2764H171.77L171.15 47.2864H177.42L176.22 51.1764H165.62L165.63 51.1864Z"
    fill="white"
  />
  <path
    d="M14.67 7.20659C16.06 11.1966 15.53 10.6466 19.5 12.0366C20.69 13.0066 16 13.5266 15.92 14.1466L14.67 17.5266C13.7 18.7166 13.18 14.0266 12.56 13.9466L9.17999 12.6966C7.92999 11.9166 12.39 11.0866 12.56 10.7966C13.17 10.7066 13.7 6.02659 14.67 7.21659V7.20659Z"
    fill="white"
  />
  <path
    d="M21.78 17.3964L22.28 18.7364C24.33 19.3364 24.32 19.7764 22.28 20.3764C21.68 22.4264 21.24 22.4164 20.64 20.3764C18.59 19.7764 18.6 19.3364 20.64 18.7364C20.83 18.4264 21.16 16.4764 21.79 17.3964H21.78Z"
    fill="white"
  />
  <path
    d="M28.97 10.1665C29.36 11.4865 29.49 11.6165 30.8 11.9965C31.69 12.5965 29.9 12.9265 29.58 13.0965C29.38 13.1165 29.05 14.3365 28.97 14.4765C28.37 15.3665 28.04 13.5765 27.87 13.2565C27.85 13.0565 26.63 12.7265 26.49 12.6465C25.54 11.8965 27.68 11.8065 27.87 11.3865C28.04 11.0765 28.37 9.26655 28.97 10.1665Z"
    fill="white"
  />
  <defs>
    <linearGradient
      id="paint0_linear_37_122"
      x1="61.09"
      y1="8.85675"
      x2="62.92"
      y2="68.5267"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_37_122"
      x1="60.45"
      y1="8.87678"
      x2="62.28"
      y2="68.5468"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_37_122"
      x1="61.38"
      y1="33.4166"
      x2="61.55"
      y2="46.6066"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_37_122"
      x1="60.27"
      y1="8.87618"
      x2="62.1"
      y2="68.5464"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_37_122"
      x1="84.63"
      y1="8.12666"
      x2="86.46"
      y2="67.7968"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint5_linear_37_122"
      x1="61.12"
      y1="8.85654"
      x2="62.95"
      y2="68.5265"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint6_linear_37_122"
      x1="87.24"
      y1="8.04658"
      x2="89.07"
      y2="67.7166"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint7_linear_37_122"
      x1="36.39"
      y1="9.60667"
      x2="38.23"
      y2="69.2768"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
    <linearGradient
      id="paint8_linear_37_122"
      x1="35.1"
      y1="9.64658"
      x2="36.93"
      y2="69.3166"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#B36FAB" />
      <stop offset="0.09" stopColor="#AC69A5" />
      <stop offset="0.22" stopColor="#995994" />
      <stop offset="0.37" stopColor="#7B3F79" />
      <stop offset="0.53" stopColor="#521C55" />
      <stop offset="0.64" stopColor="#4A1A50" />
      <stop offset="0.79" stopColor="#341842" />
      <stop offset="0.99" stopColor="#11132D" />
      <stop offset={1} stopColor="#0F132C" />
    </linearGradient>
  </defs>
</svg>
<p className="text-white text-lg">Designed by the team at Visual Prints
<span className="block">All Rights Reserved | J.S. Detail |© 2025</span></p>
          </div>
          <div className="flex flex-col gap-8 max-w-82">
        
<p className="text-white text-lg text-left md:text-right">Phone: + 1 250 407-0002 <span className="block">Email: jscnick@gmail.com</span></p>
          </div>
        </div>
        </footer>
      </main>

    </div></>
  );
}
