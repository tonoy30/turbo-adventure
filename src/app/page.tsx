import Image from 'next/image'
import Hotel from './components/Hotel'
import Review from './components/Review'
import Dot from './components/icons/Dot'
import Star from './components/icons/Star'

const Page = () => {
	return (
		<div className="mt-4 space-y-6">
			<div className="flex justify-between">
				<div className="flex space-x-3">
					<Image
						priority
						src="/avatar.png"
						height={48}
						width={48}
						alt=""
						className="object-cover w-12 h-12 rounded-full"
					/>
					<div>
						<p className="inline-flex items-center gap-2 text-black">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<g clipPath="url(#clip0_1_17261)">
										<path
											d="M7.24565 0.976438C7.66506 0.563355 8.33461 0.563355 8.75402 0.976438L9.37607 1.5891C9.6324 1.84156 9.99617 1.94931 10.3471 1.87672L11.1988 1.70056C11.773 1.58179 12.3363 1.94694 12.4677 2.52318L12.6626 3.37784C12.743 3.73001 12.9912 4.01905 13.3254 4.14937L14.1362 4.46565C14.683 4.6789 14.9611 5.29327 14.7628 5.84972L14.4688 6.67502C14.3476 7.01509 14.4016 7.39365 14.6128 7.68551L15.1255 8.39381C15.4711 8.87137 15.3758 9.53991 14.9108 9.89989L14.2211 10.4338C13.9369 10.6538 13.7794 11.0017 13.8007 11.3624L13.8523 12.2379C13.8872 12.8281 13.4487 13.3386 12.8646 13.3878L11.9982 13.4608C11.6412 13.4909 11.3223 13.6977 11.1468 14.0128L10.7211 14.7774C10.434 15.2929 9.79161 15.4832 9.27382 15.2061L8.50585 14.795C8.1894 14.6256 7.81027 14.6256 7.49382 14.795L6.72586 15.2061C6.20807 15.4832 5.56564 15.2929 5.27859 14.7774L4.85285 14.0128C4.67742 13.6977 4.35847 13.4909 4.00148 13.4608L3.13511 13.3878C2.55098 13.3386 2.11252 12.8281 2.14734 12.2379L2.19899 11.3624C2.22027 11.0017 2.06278 10.6538 1.77858 10.4338L1.08888 9.89989C0.623863 9.53991 0.528577 8.87137 0.874219 8.39381L1.38686 7.68551C1.5981 7.39365 1.65206 7.01509 1.53089 6.67502L1.23683 5.84972C1.03857 5.29327 1.31671 4.6789 1.86343 4.46565L2.67431 4.14937C3.00844 4.01905 3.25671 3.73001 3.33704 3.37784L3.53199 2.52318C3.66343 1.94694 4.22669 1.58179 4.80091 1.70056L5.65257 1.87672C6.00351 1.94931 6.36728 1.84156 6.6236 1.5891L7.24565 0.976438Z"
											fill="#574EFA"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M11.1379 6.19522C11.3983 6.45557 11.3983 6.87768 11.1379 7.13803L7.70694 10.569C7.31642 10.9595 6.68325 10.9595 6.29273 10.569L4.86177 9.13803C4.60142 8.87768 4.60142 8.45557 4.86177 8.19522C5.12212 7.93487 5.54423 7.93487 5.80457 8.19522L6.99984 9.39048L10.1951 6.19522C10.4554 5.93487 10.8776 5.93487 11.1379 6.19522Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1_17261">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</span>
							Identity verified
						</p>
						<p className="text-gray-700 font-bold text-xl">John Ghazal</p>
					</div>
				</div>
				<div className="flex space-x-3">
					<button className="px-6 py-2 border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
						Follow
					</button>
					<button className="m-auto p-4 border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
						>
							<g clipPath="url(#clip0_317_2253)">
								<path
									d="M13.9149 5.02862L20.7293 10.962C20.9256 11.133 21.0238 11.2185 21.0598 11.3202C21.0914 11.4095 21.0914 11.5072 21.0598 11.5965C21.0238 11.6982 20.9256 11.7837 20.7293 11.9547L13.9149 17.8881M8.26919 9.03508V5.525C8.26919 5.07271 8.26919 4.84656 8.35963 4.73384C8.43823 4.63587 8.55703 4.58037 8.6814 4.5835C8.8245 4.58711 8.99353 4.73428 9.33159 5.02863L16.1459 10.962C16.3423 11.133 16.4405 11.2185 16.4765 11.3202C16.5081 11.4095 16.5081 11.5072 16.4765 11.5965C16.4405 11.6983 16.3423 11.7837 16.1459 11.9547L9.33159 17.8881C8.99353 18.1825 8.8245 18.3296 8.6814 18.3332C8.55703 18.3364 8.43823 18.2809 8.35963 18.1829C8.26919 18.0702 8.26919 17.844 8.26919 17.3917V13.9676C7.1095 14.0475 5.97383 14.3508 4.92325 14.8628C3.73164 15.4435 2.67767 16.2789 1.83352 17.3119V16.8118C1.83451 14.8709 2.53889 12.9984 3.81225 11.5514C4.98024 10.2242 6.55193 9.34027 8.26919 9.03508Z"
									stroke="#272D37"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_317_2253">
									<rect
										width="22"
										height="22"
										fill="white"
										transform="matrix(-1 0 0 1 22 0)"
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>
			</div>

			<div className="container mx-auto flex flex-wrap">
				<div className="flex flex-wrap md:-m-2 -m-1">
					<div className="flex flex-wrap w-1/2">
						<div className="md:p-2 p-1 w-full">
							<Image
								priority
								src="/user1.png"
								width={632}
								height={536}
								alt=""
								objectFit="center"
								className="w-full object-cover object-center block rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-wrap w-1/2">
						<div className="md:p-2 p-1 w-1/2">
							<Image
								priority
								src="/user2.png"
								width={308}
								height={260}
								alt=""
								className="w-full h-full object-cover object-center block rounded-lg"
							/>
						</div>
						<div className="md:p-2 p-1 w-1/2">
							<Image
								priority
								src="/user3.png"
								width={308}
								height={260}
								alt=""
								className="h-full w-full object-cover object-center block rounded-lg"
							/>
						</div>
						<div className="md:p-2 p-1 w-full">
							<Image
								priority
								src="/user4.png"
								width={634}
								height={260}
								alt=""
								className="h-full w-full object-cover object-center block rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Description */}
			<div className="flex justify-between gap-8">
				<div className="flex flex-col flex-wrap space-y-4 w-2/3">
					<div className="flex space-x-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z"
								fill="#574EFA"
							/>
							<path
								d="M14.39 8.32C14.2615 7.9364 14.0156 7.60289 13.6873 7.3666C13.3589 7.13031 12.9645 7.00318 12.56 7.00318C12.1554 7.00318 11.7611 7.13031 11.4327 7.3666C11.1044 7.60289 10.8585 7.9364 10.73 8.32L8.30999 13.17C8.0324 13.6602 7.89408 14.2169 7.90999 14.78C7.94122 15.3613 8.18619 15.9105 8.59782 16.3222C9.00945 16.7338 9.5587 16.9788 10.14 17.01C11.0444 16.9449 11.8989 16.5706 12.56 15.95C13.2211 16.5706 14.0756 16.9449 14.98 17.01C15.5613 16.9788 16.1105 16.7338 16.5222 16.3222C16.9338 15.9105 17.1788 15.3613 17.21 14.78C17.2259 14.2169 17.0876 13.6602 16.81 13.17L14.39 8.32ZM11.67 12.7C11.67 12.65 11.68 11.47 12.56 11.47C13.44 11.47 13.44 12.65 13.44 12.7C13.3496 13.3883 13.0413 14.0296 12.56 14.53C12.0751 14.031 11.7631 13.3895 11.67 12.7ZM14.98 16.01C14.3408 15.9483 13.7398 15.6777 13.27 15.24C13.9321 14.5473 14.3439 13.6534 14.44 12.7C14.4677 12.436 14.4431 12.1692 14.3676 11.9147C14.2921 11.6602 14.1672 11.4231 14.0001 11.217C13.8329 11.0108 13.6267 10.8396 13.3934 10.7131C13.16 10.5867 12.904 10.5075 12.64 10.48L12.56 10.47C12.2945 10.4865 12.035 10.5553 11.7961 10.6724C11.5573 10.7895 11.344 10.9527 11.1684 11.1524C10.9928 11.3522 10.8584 11.5847 10.7728 11.8365C10.6873 12.0883 10.6524 12.3546 10.67 12.62L10.68 12.7C10.7753 13.6536 11.1872 14.5478 11.85 15.24C11.3802 15.6777 10.7792 15.9483 10.14 16.01C9.82358 15.981 9.52732 15.842 9.30263 15.6174C9.07795 15.3927 8.93903 15.0964 8.90999 14.78C8.89392 14.3736 8.99455 13.971 9.19999 13.62L11.62 8.77C11.95 8.12 12.17 8.01 12.56 8.01C12.95 8.01 13.17 8.12 13.5 8.77L15.92 13.62C16.1254 13.971 16.2261 14.3736 16.21 14.78C16.1809 15.0964 16.042 15.3927 15.8174 15.6174C15.5927 15.842 15.2964 15.981 14.98 16.01ZM21.99 5.66C21.9697 5.55649 21.9171 5.46206 21.8399 5.39021C21.7627 5.31837 21.6647 5.27279 21.56 5.26C18.1818 4.92552 15.0675 3.28586 12.88 0.689996C12.8313 0.636309 12.7718 0.59341 12.7055 0.564053C12.6392 0.534697 12.5675 0.519531 12.495 0.519531C12.4225 0.519531 12.3508 0.534697 12.2845 0.564053C12.2182 0.59341 12.1587 0.636309 12.11 0.689996C9.92243 3.28586 6.80817 4.92552 3.42999 5.26C3.32529 5.27279 3.22731 5.31837 3.15008 5.39021C3.07284 5.46206 3.02031 5.55649 2.99999 5.66C1.41999 13.85 4.54999 19.68 12.3 22.97C12.3617 22.9961 12.428 23.0096 12.495 23.0096C12.562 23.0096 12.6283 22.9961 12.69 22.97C20.44 19.68 23.56 13.86 21.99 5.66ZM12.5 21.96C5.39999 18.87 2.58999 13.71 3.92999 6.2C7.22181 5.78699 10.2595 4.21677 12.5 1.77C14.7405 4.21677 17.7782 5.78699 21.07 6.2C22.4 13.71 19.59 18.87 12.5 21.96Z"
								fill="black"
							/>
						</svg>
						<p className="text-black">
							To protect your payment, never transfer money or communicate
							outside of the Airbnb website or app.
						</p>
					</div>
					<div className="flex flex-col space-y-2 text-black">
						<p className="text-xl font-semibold">Description</p>
						<p>Available From : 24, April 2023</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
						<div>
							<button className="px-[18px] py-[12px] border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
								Show more
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 w-1/3">
					<div className="flex border rounded-xl text-black shadow-lg flex-col p-6 space-y-4">
						<p>
							<span className="font-semibold">$75-$90</span> / night
						</p>
						<div className="flex items-center justify-evenly">
							<button className="px-6 py-2 border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
								Send Message
							</button>
							<button className="px-6 py-2 bg-indigo-600 border text-white rounded-full outline-none">
								Send Proposal
							</button>
						</div>
						<p className="text-gray-500 inline-flex justify-center">
							You won&apos;t be charged yet
						</p>
					</div>
					<div className="flex justify-center items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<path
								d="M3.1665 3.83331V12.8333"
								stroke="#6B7280"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3.1665 10.1667V3.83335C3.1665 3.83335 3.99984 3.16669 5.99984 3.16669C7.99984 3.16669 8.99984 4.16669 10.6665 4.16669C12.3332 4.16669 12.8332 3.83335 12.8332 3.83335L10.4998 7.00002L12.8332 10.1667C12.8332 10.1667 12.3332 10.8334 10.6665 10.8334C8.99984 10.8334 7.6665 9.50002 5.99984 9.50002C4.33317 9.50002 3.1665 10.1667 3.1665 10.1667Z"
								stroke="#6B7280"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="text-gray-500">Report this listing</p>
					</div>
				</div>
			</div>
			{/* Amenities Looking for */}
			<div className="flex flex-col space-y-6">
				<div className="text-black">
					<p className="text-xl font-semibold">Amenities Looking for</p>
				</div>
				<div className="grid grid-cols-2 gap-4 text-black">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M6.3335 17.3333C6.3335 9.86665 25.6668 6.33331 25.6668 6.33331C25.6668 6.33331 24.3335 25.6666 16.0002 25.6666C10.6668 25.6666 6.3335 22.6666 6.3335 17.3333Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.3335 25.6667C6.3335 25.6667 10.6668 18.6667 16.3335 15.6667"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Garden View</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M16.6668 24C16.6668 24.3682 16.3684 24.6666 16.0002 24.6666C15.632 24.6666 15.3335 24.3682 15.3335 24C15.3335 23.6318 15.632 23.3333 16.0002 23.3333C16.3684 23.3333 16.6668 23.6318 16.6668 24Z"
								stroke="black"
							/>
							<path
								d="M12.6665 19.4169C13.6019 18.7354 14.7539 18.3333 15.9998 18.3333C17.2458 18.3333 18.3978 18.7354 19.3332 19.4169"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M22.2837 14.9701C20.5024 13.7282 18.3364 13 16.0003 13C13.6641 13 11.4981 13.7282 9.7168 14.9701"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.6665 10.5943C9.31212 8.74892 12.5296 7.66669 15.9998 7.66669C19.4701 7.66669 22.6876 8.74892 25.3332 10.5943"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Free Wifi</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M25.6668 16C25.6668 21.3387 21.3389 25.6666 16.0002 25.6666C10.6614 25.6666 6.3335 21.3387 6.3335 16C6.3335 10.6612 10.6614 6.33331 16.0002 6.33331C21.3389 6.33331 25.6668 10.6612 25.6668 16Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Free Washer</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M14.3335 9.66665H23.0002C24.4729 9.66665 25.6668 8.47274 25.6668 6.99998V6.33331"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M16.3335 16.3333H10.3335"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.66683 9.66669H6.3335"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.6668 22.3333H6.3335"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M25.6667 16.3333H21"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18.3335 22.3333H23.0002C24.4729 22.3333 25.6668 23.5273 25.6668 25V25.6667"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Air Conditioning</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M21.6668 25.6667H10.3332C8.86041 25.6667 7.6665 24.4727 7.6665 23V13.3333L16 7.66666L24.3335 13.3333V23C24.3335 24.4727 23.1396 25.6667 21.6668 25.6667Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 14.3333H24"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M16 7.66668V6.33334"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Refrigerator</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
						>
							<path
								d="M6.8335 8.99998C6.8335 7.52722 8.0274 6.33331 9.50016 6.33331H23.5002C24.9729 6.33331 26.1668 7.52722 26.1668 8.99998V21.6666C26.1668 23.1394 24.9729 24.3333 23.5002 24.3333H9.50016C8.0274 24.3333 6.8335 23.1394 6.8335 21.6666V8.99998Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M21.5 6.66669V24"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.5 24.6667V25.6667"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M23.5 24.6667V25.6667"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12.8335 10.3333L10.8335 12.3333"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18.1668 10.3333L10.8335 17.6666"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Kitchen</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
						>
							<path
								d="M23.4724 9.02775L22.7313 8.91261C22.6945 9.14907 22.7728 9.38887 22.9421 9.55808C23.1113 9.72729 23.3511 9.8056 23.5875 9.76886L23.4724 9.02775ZM22.0905 12.8846L22.6505 12.3858C22.5132 12.2316 22.3185 12.1408 22.1121 12.1349C21.9058 12.1289 21.7061 12.2083 21.5601 12.3542L22.0905 12.8846ZM13.3847 21.5903L12.8544 21.0599C12.7084 21.2059 12.6291 21.4056 12.6351 21.6119C12.641 21.8183 12.7318 22.0131 12.8859 22.1504L13.3847 21.5903ZM9.52794 22.9722L10.269 23.0873C10.3058 22.8509 10.2275 22.6111 10.0583 22.4419C9.88905 22.2727 9.64925 22.1944 9.41279 22.2311L9.52794 22.9722ZM10.9099 19.1154L10.3498 19.6142C10.4871 19.7684 10.6818 19.8591 10.8882 19.8651C11.0945 19.8711 11.2942 19.7917 11.4402 19.6457L10.9099 19.1154ZM19.6156 10.4097L20.1459 10.94C20.2919 10.794 20.3712 10.5944 20.3653 10.388C20.3593 10.1817 20.2685 9.9869 20.1144 9.84961L19.6156 10.4097ZM24.2135 9.1429C24.2377 8.98725 24.2502 8.82815 24.2502 8.66665H22.7502C22.7502 8.75077 22.7437 8.83288 22.7313 8.91261L24.2135 9.1429ZM23.8335 8.24998C23.672 8.24998 23.5129 8.26246 23.3572 8.28665L23.5875 9.76886C23.6673 9.75648 23.7494 9.74998 23.8335 9.74998V8.24998ZM26.9168 11.3333C26.9168 9.63044 25.5364 8.24998 23.8335 8.24998V9.74998C24.7079 9.74998 25.4168 10.4589 25.4168 11.3333H26.9168ZM23.8335 14.4166C25.5364 14.4166 26.9168 13.0362 26.9168 11.3333H25.4168C25.4168 12.2078 24.7079 12.9166 23.8335 12.9166V14.4166ZM21.5304 13.3834C22.094 14.0163 22.9175 14.4166 23.8335 14.4166V12.9166C23.3632 12.9166 22.9416 12.7126 22.6505 12.3858L21.5304 13.3834ZM13.9151 22.1206L22.6208 13.4149L21.5601 12.3542L12.8544 21.0599L13.9151 22.1206ZM14.9168 23.3333C14.9168 22.4173 14.5164 21.5938 13.8836 21.0302L12.8859 22.1504C13.2128 22.4414 13.4168 22.8631 13.4168 23.3333H14.9168ZM11.8335 26.4166C13.5364 26.4166 14.9168 25.0362 14.9168 23.3333H13.4168C13.4168 24.2078 12.7079 24.9166 11.8335 24.9166V26.4166ZM8.75016 23.3333C8.75016 25.0362 10.1306 26.4166 11.8335 26.4166V24.9166C10.959 24.9166 10.2502 24.2078 10.2502 23.3333H8.75016ZM8.78683 22.8571C8.76265 23.0127 8.75016 23.1718 8.75016 23.3333H10.2502C10.2502 23.2492 10.2567 23.1671 10.269 23.0873L8.78683 22.8571ZM9.16683 23.75C9.32833 23.75 9.48743 23.7375 9.64308 23.7133L9.41279 22.2311C9.33306 22.2435 9.25096 22.25 9.16683 22.25V23.75ZM6.0835 20.6666C6.0835 22.3695 7.46395 23.75 9.16683 23.75V22.25C8.29238 22.25 7.5835 21.5411 7.5835 20.6666H6.0835ZM9.16683 17.5833C7.46395 17.5833 6.0835 18.9638 6.0835 20.6666H7.5835C7.5835 19.7922 8.29238 19.0833 9.16683 19.0833V17.5833ZM11.4699 18.6166C10.9063 17.9837 10.0828 17.5833 9.16683 17.5833V19.0833C9.63709 19.0833 10.0587 19.2874 10.3498 19.6142L11.4699 18.6166ZM19.0853 9.87936L10.3795 18.5851L11.4402 19.6457L20.1459 10.94L19.0853 9.87936ZM18.0835 8.66665C18.0835 9.58265 18.4839 10.4061 19.1168 10.9698L20.1144 9.84961C19.7876 9.55853 19.5835 9.1369 19.5835 8.66665H18.0835ZM21.1668 5.58331C19.464 5.58331 18.0835 6.96377 18.0835 8.66665H19.5835C19.5835 7.7922 20.2924 7.08331 21.1668 7.08331V5.58331ZM24.2502 8.66665C24.2502 6.96377 22.8697 5.58331 21.1668 5.58331V7.08331C22.0413 7.08331 22.7502 7.7922 22.7502 8.66665H24.2502Z"
								fill="#141414"
							/>
						</svg>
						<p>Pets Allowed</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
						>
							<path
								d="M24.8331 18.6666C24.8331 24 21.1665 25.6666 16.4998 25.6666C11.1665 25.6666 8.1665 21.8666 8.1665 18.6666C8.1665 15.4666 9.83317 12.5555 11.1665 11.6666C11.1665 15.4 14.722 17.7778 16.4998 17.6666C13.2998 12.8666 16.0553 7.55554 17.8331 6.33331C17.8331 12.3333 24.8331 13.3333 24.8331 18.6666Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Dryer</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
						>
							<path
								d="M21.1668 13.3333L26.1668 10.3333V21.6667L21.1668 18.6667M9.50016 23H18.1668C19.6396 23 20.8335 21.8061 20.8335 20.3333V11.6667C20.8335 10.1939 19.6396 9 18.1668 9H9.50016C8.0274 9 6.8335 10.1939 6.8335 11.6667V20.3333C6.8335 21.8061 8.0274 23 9.50016 23Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Security cameras on property</p>
					</div>
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="33"
							height="32"
							viewBox="0 0 33 32"
							fill="none"
						>
							<ellipse
								cx="9.8335"
								cy="17.3333"
								rx="3"
								ry="3"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<ellipse
								cx="23.1665"
								cy="17.3333"
								rx="3"
								ry="3"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M21.8332 14.6667L20.1665 7.66666H25.8332"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.1668 17.3333H16.8335M16.8335 17.3333L12.1668 10.3333H14.5002H9.8335M16.8335 17.3333H19.8335"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6.8335 24.3333H26.1668"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p>Bicycle</p>
					</div>
				</div>
				<div className="mt-4">
					<button className="px-6 py-2 border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
						Show more amenities
					</button>
				</div>
			</div>
			{/* Where he’s looking for the partner? */}
			<div className="flex flex-col space-y-6">
				<div className="text-black">
					<p className="text-xl font-semibold">
						Where he&apos;s looking for the partner?
					</p>
				</div>
				<div className="flex space-x-2">
					<span className="rounded-full px-[18px] py-[12px] text-[15px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-500/10">
						Bristol
					</span>
					<span className="rounded-full px-[18px] py-[12px] text-[15px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-500/10">
						Bath
					</span>
					<span className="rounded-full px-[18px] py-[12px] text-[15px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-500/10">
						London
					</span>
					<span className="rounded-full px-[18px] py-[12px] text-[15px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-500/10">
						England
					</span>
					<span className="rounded-full px-[18px] py-[12px] text-[15px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-500/10">
						Near UWE
					</span>
				</div>
				<div className="overflow-hidden">
					<Image
						priority
						width={1280}
						height={480}
						src="/map.png"
						alt=""
						className="rounded-lg"
					/>
				</div>
			</div>
			{/* Reviews */}
			<div className="flex flex-col space-y-6">
				<div className="flex space-x-2 items-center text-black">
					<Star />
					<p className="inline-flex justify-center items-center gap-2 font-bold">
						5.0
						<span>
							<Dot />
						</span>
						<span className="font-medium">12 Reviews</span>
					</p>
				</div>
				<div className="flex justify-between gap-6">
					<Review />
					<Review />
					<Review />
				</div>
				<div className="mt-4">
					<button className="px-6 py-2 border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
						Show more amenities
					</button>
				</div>
			</div>
			{/* Nearby Hotel */}
			<div className="flex flex-col space-y-8 py-8">
				<div className="flex justify-between">
					<div className="flex flex-col space-y-4 w-2/3">
						<h2 className="text-gray-700 text-3xl font-bold">Nearby hotels</h2>
						<p className="text-gray-500">
							You can find places and stay with hotels and home-stays ranked by
							travellers. What fun could we have more than having roommate with
							similar interest.
						</p>
					</div>
					<div>
						<button className="px-[18px] py-[12px] border border-[#DAE0E6] text-gray-700 rounded-full outline-none">
							Show more
						</button>
					</div>
				</div>
				<div className="flex space-x-4 justify-center">
					<Hotel />
					<Hotel />
					<Hotel />
				</div>
			</div>
		</div>
	)
}

export default Page
