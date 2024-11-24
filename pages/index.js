import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import LoadingView from '@components/loading_view'
import ProductList from '@components/product_list'
import FilterForm from '@components/filter_form'

const Home = () => {
	const [productsData, setProductsData] = useState([])
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		fetchData()
	}, [query])
	const fetchData = async () => {
		try {
			setLoading(true)
			const response = await axios.get(`/api/v1/products${query}`)
			setProductsData(response.data)
		} catch (error) {
			console.error('Error fetching data:', error)
		} finally {
			setLoading(false)
		}
	}
	const handleFilterSubmit = (filterValues) => {
		if (Object.keys(filterValues).length > 0) {
			setQuery(`?${new URLSearchParams(filterValues).toString()}`)
		} else {
			setQuery('')
		}
	}
	return (
		<>
			<Head>
				<title>Jewel E-Commerce</title>
			</Head>
			{loading ? (
				<LoadingView />
			) : (
				<div style={{ position: 'relative' }}>
					<FilterForm onSubmit={handleFilterSubmit} />
					<ProductList data={productsData} />
				</div>
			)}
		</>
	)
}

export default Home
