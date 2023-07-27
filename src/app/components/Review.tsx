import Image from 'next/image'
import Star from './icons/Star'

const Review = () => {
	const { name, review, profession, description, image } = {
		review: [1, 1, 1, 1, 0],
		name: 'Dave Jones',
		profession: 'Student',
		description:
			'Absolutely incredible. This place was definitely a dream! From the entryway, to each floor... stunning',
		image: '/dave.png',
	}
	return (
		<div className="flex flex-col text-black space-y-6">
			<div className="flex">
				{review.map((v, idx) => {
					return <Star key={idx} fill={v === 1 ? '#FFAE43' : '#DAE0E6'} />
				})}
			</div>
			<p className="text-gray-700">{description}</p>
			<div className="flex space-x-3">
				<Image
					className="object-cover w-12 h-12 rounded-full"
					priority
					objectFit="cover"
					width={40}
					height={40}
					src={image}
					alt={name}
				/>
				<div>
					<p className="text-gray-700 font-medium">{name}</p>
					<p className="text-gray-700 text-sm">{profession}</p>
				</div>
			</div>
		</div>
	)
}

export default Review
