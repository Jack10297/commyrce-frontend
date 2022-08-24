import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DealCarousel from './DealCarousel';

export default function DealProducts() {
	const [ deals, setDeals ] = useState([]);
	const [ error, setError ] = useState(null);
	const initialMount = useRef(true);

	const options = {
		loop: true,
		margin: 10,
		items: 1,
		autoplay: true
	};

	useEffect(
		() => {
			//Fetch Deal products
			// Fetch deal products after initial mount
			try {
				axios({
					method: 'post',
					url: `${process.env.API_BASE_ENDPOINT}fetch-deals`,
					data: {
						discountGreaterThanOrEqualTo: 10,
						noOfProducts: 5
					}
				})
					.then((res) => {
						setDeals(res.data.products);
					})
					.catch((err) => setError(err.message));
			} catch (err) {
				setError('ERROR: ', err.message);
			}
		},
		[]
	);

	if (deals.length === 0)
		return (
			<div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img className="object-cover object-center rounded bg-slate-300" height="720" width="600" />
				<span className="text-white text-2xl font-bold absolute top-[300px] left-[210px] ">
					{error ? error : 'Loading...'}
				</span>
			</div>
		);

	return (
		<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<DealCarousel options={options} products={deals} />
		</div>
	);
}

// 720x600

// src="https://dummyimage.com/720x600"
