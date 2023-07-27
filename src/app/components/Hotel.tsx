import Image from 'next/image'

const Hotel = () => {
	const { name, fromDate, toDate, description, price, ratting, image } = {
		name: 'Hotel Assenzio',
		fromDate: '25 Apr 2022',
		toDate: '28 Apr 2022',
		description:
			"But happy to move in with more than that, I'm super easy going and tidy.",
		price: '$32 / Day',
		ratting: 4.2,
		image: '/hotel.png',
	}
	return (
		<div className="p-4 md:w-1/3">
			<div className="h-full border border-gray-200 rounded-lg overflow-hidden">
				<Image priority src={image} width={485} height={285} alt="" />
				<div className="p-4">
					<div className="flex justify-between text-black">
						<h2 className="text-xl font-semibold">{name}</h2>
						<p className="inline-flex items-center gap-1 font-semibold">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="20"
									viewBox="0 0 21 20"
									fill="none"
								>
									<path
										d="M12.7694 5.90677L11.0507 2.91493C10.7316 2.35943 9.93112 2.35677 9.60832 2.91014L7.7947 6.01921C7.55448 6.43101 7.14941 6.72022 6.68193 6.81372L4.20383 7.30934C3.56201 7.4377 3.31192 8.22194 3.76094 8.69817L5.55329 10.5992C5.93656 11.0057 6.09066 11.5771 5.96371 12.1212L5.15243 15.5981C4.98566 16.3129 5.75741 16.8786 6.3888 16.5044L9.48398 14.6702C10.0079 14.3598 10.6594 14.3598 11.1833 14.6702L14.2785 16.5044C14.9099 16.8786 15.6816 16.3129 15.5149 15.5981L14.6965 12.0908C14.5735 11.5636 14.7142 11.0094 15.0739 10.6048L16.8684 8.5859C17.296 8.10488 17.0401 7.34134 16.409 7.21512L13.8877 6.71086C13.4165 6.61661 13.0088 6.3235 12.7694 5.90677Z"
										stroke="black"
										strokeWidth="1.67"
										strokeMiterlimit="10"
									/>
								</svg>
							</span>
							{ratting}
						</p>
					</div>
					<div className="text-black flex flex-col space-y-3">
						<p className="font-medium">
							{fromDate} - {toDate}
						</p>
						<p className="text-[#6B7B8F]">{description}</p>
						<p className="font-medium">{price}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hotel
