import React from 'react'
import { SwiperSlide } from 'swiper/react'
import ProductCard from '@components/product_card'
import ProductCarousel from '@components/product_carousel'
import styles from './product_list.module.css'

const ProductList = ({ data }) => {
	return (
		<div className={styles.productList}>
			<h1 className={styles.header}>Product List</h1>
			<ProductCarousel>
				{data.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductCard
							images={product.images}
							name={product.name}
							price={product.price}
							popularityScore={product.popularityScore}
						/>
					</SwiperSlide>
				))}
			</ProductCarousel>
		</div>
	)
}

export default ProductList
