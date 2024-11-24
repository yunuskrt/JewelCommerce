import React from 'react'
import styles from './star_rating.module.css'

const StarRating = ({ rating }) => {
	const totalStars = 5
	return (
		<div className={styles.starContainer}>
			{Array.from({ length: totalStars }, (_, index) => {
				const fillPercentage =
					rating > index
						? rating >= index + 1
							? 100
							: (rating - index) * 100
						: 0

				return (
					<div
						key={index}
						className={styles.star}
						style={{ '--fill-percentage': `${fillPercentage}%` }}
					></div>
				)
			})}
		</div>
	)
}

export default StarRating
