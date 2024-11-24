## Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Next.js API routes (server-side)
- **External APIs**: Gold price data from 'goldapi.io'
- **State Management**: React state hooks
- **Carousel**: Swiper (customized with CSS)
- **HTTP Requests**: Axios

### Filters

The product listings can be filtered using the following query parameters:

- **minPrice**: Minimum price of products.
- **maxPrice**: Maximum price of products.
- **minPopularity**: Minimum popularity score.
- **maxPopularity**: Maximum popularity score.

Filters are applied when the user clicks the filter button, and the UI is updated accordingly.

### Responsiveness & Design

- No CSS libraries are used; all styles are handled with custom CSS.
- The design includes a responsive layout, ensuring a seamless experience on mobile and desktop devices.
- Product ratings are displayed with custom-designed CSS.

### Product Carousel

- The product carousel is implemented using the 'swiper' npm package.
- The carousel design is fully customized using custom CSS to meet the design requirements.

### Real-time Gold Price

- The price per gram of pure gold in US Dollars is fetched from the 'goldapi' external API on the backend.
- Gold price data is fetched on:
  1. The first load of the page.
  2. When filters are changed.
- Make sure not to exceed the free trial API request limit of 'goldapi' when testing. It offers 100 requests per month on its free trial, and some of it had already been used while development.

### Axios Requests

Axios is used for sending HTTP requests to fetch product data and real-time gold prices. There are 3 main cases where requests are triggered:

1. **Initial Page Load**: Fetches all products.
2. **Filter Change**: Fetches products based on the selected filters.
3. **Gold Price**: Fetches the real-time price of gold.

## Environment Variables

The project uses an API key for 'goldapi' stored in the `.env` file. Make sure to keep this API key secure and manage your requests to stay within the free trial limits.

## Installation

To get started, clone the repository and install dependencies:

```bash
git clone https://github.com/yunuskrt/JewelCommerce.git
cd JewelCommerce
npm install
npm run dev
```
