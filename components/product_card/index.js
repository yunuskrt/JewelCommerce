import React, { useState } from 'react'
import styles from './product_card.module.css'
import Image from 'next/image'
import StarRating from '@components/star_rating'

const ProductCard = ({ images, name, price, popularityScore }) => {
	const [color, setColor] = useState('yellow')
	const rating = Math.round((popularityScore / 20) * 10) / 10

	return (
		<div className={styles.productCard}>
			<div className={styles.imageContainer}>
				<Image
					src={images[color]}
					alt={name}
					width={230}
					height={230}
					className={styles.image}
				/>
			</div>

			<div className={styles.infoGroup}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>

			<div className={styles.infoGroup}>
				<div className={styles.colorPalette}>
					<div
						className={`${styles.colorSelector} ${
							color === 'yellow' ? styles.selected : ''
						}`}
						onClick={() => setColor('yellow')}
					>
						<div className={`${styles.color} ${styles.yellow}`}></div>
					</div>
					<div
						className={`${styles.colorSelector} ${
							color === 'white' ? styles.selected : ''
						}`}
						onClick={() => setColor('white')}
					>
						<div className={`${styles.color} ${styles.white}`}></div>
					</div>
					<div
						className={`${styles.colorSelector} ${
							color === 'rose' ? styles.selected : ''
						}`}
						onClick={() => setColor('rose')}
					>
						<div className={`${styles.color} ${styles.rose}`}></div>
					</div>
				</div>

				<span className={styles.colorText}>
					{color.charAt(0).toUpperCase() + color.slice(1)} Gold
				</span>
				<div className={styles.rating}>
					<StarRating rating={rating} />
					<span className={styles.ratingText}>{rating.toFixed(1)}/5</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
