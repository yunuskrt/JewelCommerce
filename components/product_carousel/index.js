import React from 'react'
import { Swiper } from 'swiper/react'
import { Mousewheel, Navigation } from 'swiper/modules'

const ProductCarousel = ({ children }) => {
	return (
		<Swiper
			modules={[Mousewheel, Navigation]}
			navigation={true}
			mousewheel={true}
			slidesPerView={3}
			breakpoints={{
				300: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
			}}
		>
			{children}
		</Swiper>
	)
}

export default ProductCarousel
