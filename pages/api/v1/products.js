import productData from '@/mock/products.json'
import axios from 'axios'

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Only GET requests allowed' })
	}
	const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query
	// retrieve gold price from external API
	try {
		const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
			headers: {
				'x-access-token': process.env.GOLD_API_ACCESS_TOKEN,
			},
		})
		const goldPrice = response.data.price_gram_24k
		return res.status(200).json(
			productData
				.map((product) => {
					return {
						name: product.name,
						images: product.images,
						price: (product.popularityScore + 1) * product.weight * goldPrice,
						popularityScore: product.popularityScore,
					}
				})
				.filter((product) => {
					const priceCheck =
						(!minPrice || product.price >= parseFloat(minPrice)) &&
						(!maxPrice || product.price <= parseFloat(maxPrice))
					const popularityCheck =
						(!minPopularity ||
							product.popularityScore >= parseFloat(minPopularity)) &&
						(!maxPopularity ||
							product.popularityScore <= parseFloat(maxPopularity))
					return priceCheck && popularityCheck
				})
		)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
}
