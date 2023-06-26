import dynamic from 'next/dynamic';
import Image from 'next/image'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
	ssr: false
});

var $ = require('jquery');
if (typeof window !== 'undefined') {
	window.$ = window.jQuery = require('jquery');
}

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DealCarousel({ products, options }) {
	const router = useRouter();

	return (
		<OwlCarousel className="owl-theme" {...options}>
			{products.map((item, index) => (
				<div key={index} className="item" onClick={() =>
					router.push({
						pathname: '/product/query',
						query: {
							name: item.productName,
							price: item.price.$numberDecimal,
							category: item.category,
							description: item.description,
							image: encodeURIComponent(item.image)
						}
					})}>
					<Image
						className="object-cover object-center rounded"
						alt="hero"
						src={item.image}
						// layout='fill'
						objectFit='contain'
						height="300"
						width="500"
					/>
				</div>
			))}
		</OwlCarousel>
	);
}
