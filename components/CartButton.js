import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

export default function CartButton() {
	const cart = useSelector((state) => state.cart.cartList);

	if (cart.length > 0)
		return (
			<div>
				<Link href="/cart">
					<a >
						<div className="fixed bottom-8 right-8 inline-block  z-30">
							<button className=" text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg shadow-xl">
								GO TO CART
							</button>
						</div>
					</a>
				</Link>
			</div>
		);
}
