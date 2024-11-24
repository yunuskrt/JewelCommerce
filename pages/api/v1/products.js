import productData from '@/mock/products.json'

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Only GET requests allowed' })
	}
	await new Promise((resolve) => setTimeout(resolve, 3000))
	return res.status(200).json(productData)
}
