import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

import Layout from '../components/Layout';

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cartList);
	const [error, setError] = useState('');

	useEffect(() => {
		const res = axios({
			method: 'POST',
			url: `${process.env.API_BASE_ENDPOINT}cart`,
			headers: {
				token: sessionStorage.getItem('token')
			}
		})
			.then((res) => {
				if (res.data.status === 413) return router.push('/login');
			})
			.catch((err) => setError("Something went Wrong! 😐"));
	}, []);

	if (cart.length === 0) {
		return (
			<div>
				<h2 className="text-2xl text-center">Cart is empty!</h2>
			</div>
		);
	}

	const processCart = async () => {
		const payout = await axios.post(`${process.env.API_BASE_ENDPOINT}process-cart`, {
			cartItems: cart
		});

		if (!payout) {
			return <h1>Something went Wrong! 😐</h1>;
		}

		window.open(payout.data.url, '_blank');
		return;
	};

	return (
		<div className="container flex flex-col justify-center items-center">
			<div className='flex justify-center'>{error ? <h1 className='font-medium text-center'>{error}</h1> : ''}</div>
			{cart.map((item) => (
				<div key={item.id} className="flex bg-white shadow-md p-4 my-4 lg:w-1/2 md-2/3">
					<div className="py-2 px-3 ">
						<img src={decodeURIComponent(item.image)} alt="product" />
					</div>
					<div>
						<h1 className="font-bold text-xl">Product Name: {item.name}</h1>
						<h2 className="font-semibold mt-4">Price: {item.price}$</h2>

						<div className="flex mt-4">
							<div className="flex mt-1  select-none">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-caret-left cursor-pointer mt-1 mx-2 hover:bg-red-100 rounded-full"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									onClick={() => {
										if (item.pieces === 1) return;
										dispatch(
											addToCart({
												...item,
												pieces: item.pieces - 1
											})
										);
									}}
								>
									<desc>Download more icon variants from https://tabler-icons.io/i/caret-left</desc>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
								</svg>

								<span className="bg-slate-300 rounded-full w-8 h-8 text-center align-middle font-medium">
									{item.pieces}
								</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-caret-right cursor-pointer mt-1 mx-2 hover:bg-red-100 rounded-full"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									onClick={() => {
										dispatch(
											addToCart({
												...item,
												pieces: item.pieces + 1
											})
										);
									}}
								>
									<desc>Download more icon variants from https://tabler-icons.io/i/caret-right</desc>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
								</svg>
							</div>
							
						</div>

						<button
							className="bg-red-600 px-2 py-1 mt-8 text-slate-50 rounded-md lg:px-4 lg:py-2"
							onClick={() => {
								dispatch(removeFromCart(item.id));
							}}
						>
							REMOVE FROM CART
						</button>

						<h1 className="font-medium text-xl mt-8">Description:</h1>
						<p>{item.description}</p>
					</div>
				</div>
			))}

			<div>
				<button className="px-4 py-2 bg-red-400 hover:bg-red-500 font-medium text-white" onClick={processCart}>
					Go to Checkout Page
				</button>
			</div>

			<div>
				<h1 className="font-medium text-xl mt-8">Instructions:</h1>
				<p>Do not use your actual personal info in payment form!</p>
				<ul>
					<li>Email: Any random Email can be used.</li>
					<li>
						Card number: use 4242 4242 4242 4242 as test.
						<li>Expiration: Expiration date</li>
						<li>CVC: use 123</li>
					</li>
				</ul>
			</div>
		</div>
	);
}



Cart.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}