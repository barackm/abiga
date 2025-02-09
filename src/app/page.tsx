'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[url('/new/bg.png')] bg-cover bg-center flex items-center justify-center px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="text-white">
          <h4 className="text-green-400 uppercase tracking-wide text-sm">Creative Agency</h4>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
            We Are <span className="text-green-400">Creative</span> <br /> Design Agency
          </h1>
          
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            facilisis quam eget ex blandit cursus. Proin est magna, semper a
            porta sed, lacinia eu lectus.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-green-400 text-black text-2xl font-bold shadow-lg hover:bg-green-300 transition">
              ▶
            </button>
            <div>
              <p className="text-sm uppercase text-gray-400">About Us</p>
              <p className="text-green-400 font-semibold">Promotion Studio</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative">
          <Image
            src="/new/last.png" // Update this with the correct path
            alt="Creative Model"
            width={350}
            height={350}
            className="rounded-lg shadow-lg  object-cover"
          />
          <div className="absolute bottom-[285px] left-0 right-[200px] rounded-lg shadow-lg">

            {/* <Image
            src="/new/x.png" // Update this with the correct path
            alt="Creative Model"
            width={350}
            height={350}
            className="rounded-lg shadow-lg  "
          /> */}
          <div className='absolute top-[0] left-[0%] right-0 rounded-lg shadow-lg w-[max-content] h-[max-content]'>
            <span className='text-[300px] text-black font-extrabold'
            >1</span> 
            <div className='absolute top-[90px] left-[100px] text-[260px] text-black font-extrabold right-0 rounded-lg shadow-lg w-[max-content] h-[max-content]'>5
              <div className='absolute top-[47%] bg-white text-right p-2 w-[150px] left-[110px] z-[-1] text-[40px] text-black font-extrabold right-0 rounded-lg shadow-lg w-[max-content] h-[max-content] leading-none
'><div>Years</div> <div>Lived</div></div>
            </div>
            
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
