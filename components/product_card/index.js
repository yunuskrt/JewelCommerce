import React from 'react'
import styles from './product_card.module.css'

const ProductCard = ({ title, price }) => {
	return (
		<div className={styles.productCard}>
			<div className={styles.image}></div>

			<div className={styles.productInfo}>
				<span className={styles.title}>{title}</span>
				<span>{price}</span>
			</div>
		</div>
	)
}

export default ProductCard
