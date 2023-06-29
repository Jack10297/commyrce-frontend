import Layout from '../../components/Layout';
import axios from 'axios'

import { useRouter } from 'next/router';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import Image from 'next/image';


export default function Product() {
	const dispatch = useDispatch()
	const [pieces, setPieces] = useState(1)
	const [error, setError] = useState('')

	const router = useRouter();
	const { name, price, description, category, image } = router.query

	const generateId = () => {
		return Math.floor(Math.random() * 1000) + 1
	}

	const handleCart = async (e) => {
		const res = await axios({
			method: 'POST',
			url: `${process.env.API_BASE_ENDPOINT}cart`,
			headers: {
				token: sessionStorage.getItem('token')
			}
		})
			.then(res => {
				if (res.data.status === 413)
					return router.push("/login")

				dispatch(addToCart({
					id: generateId(),
					name,
					price,
					description,
					category,
					image,
					pieces
				}))

			})
			.catch(err => setError("Something Went Wrong!"))
	}

	return (
		<div className="flex flex-wrap h-screen justify-evenly lg:my-28	">
			<div>{error ? <h1 className='font-medium'>{error}</h1> : ''}</div>

			<div className="">
				<Image className="rounded-md shadow-md" src={decodeURIComponent(image)} height={500} width={300} alt="product" />
			</div>

			<div className="w-96 bg-slate-100 p-8 rounded-md">
				<h1 className="text-2xl font-semibold mb-4">{name}</h1>
				<h2 className="text-xl mb-4">{price}$</h2>
				<p className="">{description}</p>

				<div className="flex my-8 align-baseline">
					<button
						className="bg-red-600 px-4 py-2 text-yellow-50 hover:bg-red-700 rounded-md mr-4"
						onClick={handleCart}
					>
						ADD TO CART
					</button>

					<div className='flex mt-1  select-none'>
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
								if (pieces === 1)
									return;
								setPieces(pieces - 1)
							}}
						>
							<desc>Download more icon variants from https://tabler-icons.io/i/caret-left</desc>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
						</svg>

						<span className="bg-slate-300 rounded-full w-8 h-8 text-center align-middle font-medium">
							{pieces}
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
								setPieces(pieces + 1)
							}}
						>
							<desc>Download more icon variants from https://tabler-icons.io/i/caret-right</desc>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

Product.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};

export async function getServerSideProps (context){
	return {
		props: {
			...context.query
		}
	}
} 