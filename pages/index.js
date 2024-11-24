import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'

import LoadingView from '@components/loading_view'
import ProductList from '@components/product_list'

const Home = () => {
	const [productsData, setProductsData] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		fetchData()
	}, [])
	const fetchData = async () => {
		try {
			setLoading(true)
			const response = await axios.get('/api/v1/products')
			setProductsData(response.data)
		} catch (error) {
			console.error('Error fetching data:', error)
		} finally {
			setLoading(false)
		}
	}
	return (
		<>
			<Head>
				<title>Jewel E-Commerce</title>
			</Head>
			{loading ? <LoadingView /> : <ProductList data={productsData} />}
		</>
	)
}

export default Home
