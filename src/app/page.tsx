'use client';

import VideoModal from '@/components/VideoPlayer';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
	return (
		<section className="relative py-28 w-full h-screen bg-[url('/new/bg.png')] bg-cover bg-center flex md:items-center md:justify-center px-4 md:px-10">
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center gap-2'>
				{/* Left Content */}
				<div className='text-white'>
					<h4 className='text-[#93C7F3] uppercase tracking-wide text-sm'>
						Abigaël Mapendo Buyana
					</h4>
					<h1 className='text-5xl md:min-h-[180px] min-h-[200px] md:text-6xl font-extrabold mt-4' data-aos='fade-up'>
						<Typewriter
							words={['We loved you']}
							loop={true}
							cursor
							cursorStyle='_'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={8000}
						/>
						<span className='text-[#93C7F3]'>
							<Typewriter
								words={['Abby']}
								cursor
								cursorStyle='_'
								typeSpeed={100}
								deleteSpeed={50}
								delaySpeed={20000}
								loop={true}
							/>
						</span>
						<br />{' '}
						<Typewriter
							words={['But God loved you more']}
							loop={true}
							cursor
							cursorStyle='_'
							typeSpeed={100}
							deleteSpeed={50}
						/>
						.
					</h1>

					<p className='text-gray-400 mt-4 max-w-[70%] md:max-w-[100%]'>
						Ta lumière et ton impact resteront gravés dans nos mémoires. Que ton
						âme repose en paix éternellement.
					</p>
					<div className='mt-10 flex items-center gap-4'>
						<VideoModal videoUrl='/videos/zoe.mp4' />
						<div>
							<p className='text-sm uppercase text-gray-400'>Her vision</p>
							<p className='text-[#93C7F3] font-semibold'>CEO of ZOE</p>
						</div>
					</div>
				</div>

				{/* Right Image */}
				<div className='absolute bottom-[10px] right-[-130px] md:relative'>
					<Image
						src='/new/last.png' // Update this with the correct path
						alt='Creative Model'
						width={350}
						height={350}
						className='rounded-lg shadow-lg  object-cover'
					/>
					<div className='absolute bottom-[285px] left-0 right-[200px] rounded-lg shadow-lg'>
						{/* <Image
            src="/new/x.png" // Update this with the correct path
            alt="Creative Model"
            width={350}
            height={350}
            className="rounded-lg shadow-lg  "
          /> */}
						<div className='absolute md:top-[0] top-[10px] md:left-[0%] md:right-0 right-[85%] rounded-lg shadow-lg w-[max-content] h-[max-content]'>
							<span className='text-[300px] text-[#1f4261]  font-extrabold'>
								1
							</span>
							<div className='absolute top-[90px] left-[100px] text-[260px] text-[#1f4261] font-extrabold right-0 rounded-lg shadow-lg w-[max-content] h-[max-content]'>
								5
								<div
									className='absolute top-[47%] bg-[#93C7F3] text-right p-2 w-[150px] left-[105px] z-[-1] text-[40px] text-black font-extrabold right-0 rounded-lg shadow-lg w-[max-content] h-[max-content] leading-none
'
								>
									<div>Years</div> <div>Lived.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
