import shop from '../public/shop.jpg';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '../public/avatar.png';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
	const cart = useSelector((state) => state.cart.cartList);
	const router = useRouter()

	return (
		<div className="sticky top-0 bg-white shadow-md h-12 z-50">
			<div className="container my-4 mx-auto flex lg:flex-row sm:flex-col justify-between antialiased text-slate-900">
				<div>
					<Link href="/">
						<a className="sm:text-xl text-md w-8 font-bold underline decoration-red-600 decoration-4">Commyrce</a>
					</Link>
				</div>
				<div>
					<ul className="flex gap-x-2 lg:gap-x-4 font-semibold">
						<li>
							<Link href="/">
								<a className="hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2">
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/products">
								<a className="hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2">
									Products
								</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a className="hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2">
									Contact
								</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a className="hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2">
									About
								</a>
							</Link>
						</li>

						<span className="hidden relative bottom-2 cursor-pointer">
							<Image className="rounded-full" src={avatar} alt="" width="45px" height="45px" />
						</span>

						

						<span className="cursor-pointer relative" onClick={() => router.push('/cart')}>
							<span className="absolute left-4 -top-2 flex justify-center items-center w-5 h-5 bg-red-500 text-white rounded-full mr-1">
								{cart.length}
							</span>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								/>
							</svg>
						</span>
					</ul>
				</div>
			</div>
		</div>
	);
}
