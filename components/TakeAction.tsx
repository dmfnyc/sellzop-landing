import Image from "next/image";

import logo from "../public/updated_logo.webp";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function TakeAction() {
	return (
		<div className='bg-white py-16 sm:py-24'>
			<div className='relative sm:py-16'>
				<div aria-hidden='true' className='hidden sm:block'>
					<div className='absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50' />
					<svg
						className='absolute top-8 left-1/2 -ml-3'
						width={404}
						height={392}
						fill='none'
						viewBox='0 0 404 392'>
						<defs>
							<pattern
								id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits='userSpaceOnUse'>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className='text-gray-200'
									fill='currentColor'
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={392}
							fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
						/>
					</svg>
				</div>
				<div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
					<div className='relative overflow-hidden rounded-2xl bg-gray-800 px-6 py-10 shadow-xl sm:px-12 sm:py-20'>
						<div
							aria-hidden='true'
							className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'>
							{/* <svg
								className='absolute inset-0 h-full w-full'
								preserveAspectRatio='xMidYMid slice'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 1463 360'>
								{/* <path
									className='text-indigo-500 text-opacity-40'
									fill='currentColor'
									d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
								/> */}
							{/* <path
									className='text-indigo-700 text-opacity-40'
									fill='currentColor'
									d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
								/> */}
							{/* </svg>  */}
						</div>
						<div className='relative'>
							<div className='sm:text-center'>
								<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6'>
									Join our Beta launch to receive a free e-commerce store for
									one year.
								</h2>
								<p className=' mx-auto mt-6 max-w-2xl text-lg text-white '>
									<div className='mb-4'>
										<span className='text-lg'>SellZop </span>is a revolutionary
										ecommerce marketing platform that combines the power of
										artificial intelligence and blockchain technology to help
										you sell more.
										<br />
									</div>
									We are selecting a limited number of people from our mailing
									list to participate in this exclusive offer. When using our
									platform, you dont need to worry about coding or technical
									skills. We offer step-by-step guidance and support to help you
									succeed in selling products and cars online.
								</p>
							</div>
							{/* 
                            <form action="https://formsubmit.co/your@email.com" method="POST"> */}
							<form
								className='mt-12 sm:mx-auto sm:flex sm:max-w-lg'
								action='https://formsubmit.co/el/mucoha'
								method='POST'>
								<div className='min-w-0 flex-1'>
									<label htmlFor='cta-email' className='sr-only'>
										Email address
									</label>
									<input
										id='cta-email'
										type='email'
										name='email'
										required
										className='block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
										placeholder='Enter your email'
									/>
								</div>
								<div className='mt-4 sm:mt-0 sm:ml-3'>
									<button
										type='submit'
										className='block w-full rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10'>
										Notify me
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
