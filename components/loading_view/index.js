import React from 'react'
import styles from './loading_view.module.css'

const LoadingView = () => {
	return (
		<div className={styles.loading}>
			<span className={styles.loader}></span>
			<span className={styles.loadingText}>Loading...</span>
		</div>
	)
}

export default LoadingView
