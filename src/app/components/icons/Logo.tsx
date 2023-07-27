import Image from 'next/image'

const Logo = () => {
	return (
		<div className="flex gap-3">
			<Image priority width={21} height={28} src="/union.svg" alt="" />
			<Image priority width={52} height={16.5} src="/totel.svg" alt="" />
		</div>
	)
}

export default Logo
