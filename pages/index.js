import React from 'react'
import Head from 'next/head'
import { SwiperSlide } from 'swiper/react'
import ProductCard from '@components/product_card'
import ProductCarousel from '@components/product_carousel'

const Home = () => {
	const data = [
		{ title: 'Slide 1', price: 'Price 1' },
		{ title: 'Slide 2', price: 'Price 2' },
		{ title: 'Slide 3', price: 'Price 3' },
		{ title: 'Slide 4', price: 'Price 4' },
		{ title: 'Slide 5', price: 'Price 5' },
		{ title: 'Slide 6', price: 'Price 6' },
		{ title: 'Slide 7', price: 'Price 7' },
		{ title: 'Slide 8', price: 'Price 8' },
		{ title: 'Slide 9', price: 'Price 9' },
	]
	return (
		<>
			<Head>
				<title>Jewel E-Commerce</title>
			</Head>
			<ProductCarousel>
				{data.map((item, index) => (
					<SwiperSlide key={index}>
						<ProductCard {...item} />
					</SwiperSlide>
				))}
			</ProductCarousel>
		</>
	)
}

export default Home
