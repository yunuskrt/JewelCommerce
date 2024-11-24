import React, { useRef } from 'react'
import styles from './filter_form.module.css'

const FilterForm = ({ onSubmit }) => {
	const minPriceRef = useRef()
	const maxPriceRef = useRef()
	const minPopularityRef = useRef()
	const maxPopularityRef = useRef()
	const handleSubmit = (event) => {
		event.preventDefault()
		const filterValues = {}
		if (minPriceRef.current.value) {
			filterValues.minPrice = parseFloat(minPriceRef.current.value)
		}
		if (maxPriceRef.current.value) {
			filterValues.maxPrice = parseFloat(maxPriceRef.current.value)
		}
		if (minPopularityRef.current.value) {
			filterValues.minPopularity = parseFloat(minPopularityRef.current.value)
		}
		if (maxPopularityRef.current.value) {
			filterValues.maxPopularity = parseFloat(maxPopularityRef.current.value)
		}
		onSubmit(filterValues)
	}
	return (
		<form className={styles.filterForm} onSubmit={handleSubmit}>
			<div className={styles.filterInput}>
				<input
					type='number'
					className={styles.input}
					placeholder='Min Price in USD'
					ref={minPriceRef}
				/>
			</div>
			<div className={styles.filterInput}>
				<input
					type='number'
					className={styles.input}
					placeholder='Max Price in USD'
					ref={maxPriceRef}
				/>
			</div>
			<div className={styles.filterInput}>
				<input
					type='number'
					className={styles.input}
					placeholder='Min Popularity'
					ref={minPopularityRef}
				/>
			</div>
			<div className={styles.filterInput}>
				<input
					type='number'
					className={styles.input}
					placeholder='Max Popularity'
					ref={maxPopularityRef}
				/>
			</div>
			<button className={styles.hvrShrink} type='submit'>
				Filter
			</button>
		</form>
	)
}

export default FilterForm
