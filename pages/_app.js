import localFont from 'next/font/local'

const avenirBook = localFont({
	src: '../public/fonts/Avenir-Book.ttf',
	variable: '--font-avenir-book',
})
const montserratMedium = localFont({
	src: '../public/fonts/Montserrat-Medium.otf',
	variable: '--font-montserrat-medium',
})
const montserratRegular = localFont({
	src: '../public/fonts/Montserrat-Regular.ttf',
	variable: '--font-montserrat-regular',
})

import '../public/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'

function MyApp({ Component, pageProps }) {
	return (
		<div
			className={`${avenirBook.variable} ${montserratMedium.variable} ${montserratRegular.variable}`}
		>
			<Component {...pageProps} />
		</div>
	)
}
export default MyApp
