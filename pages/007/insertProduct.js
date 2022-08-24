import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminLogin from '../../components/AdminLogin';

export default function InsertProduct() {
	const [ admin, setAdmin ] = useState(null);

	const [ product, setProduct ] = useState({
		productName: '',
		price: 0,
		discount: 0,
		discountedPrice: 0,
		category: 'electronics',
		description: '',
		image: null
	});

	const [ isAdded, setIsAdded ] = useState(false);
	const [ error, setError ] = useState({
		state: false,
		message: ''
	});
	const imageRef = useRef(null);

	useEffect(() => {
		axios({
			method: 'post',
			url: `${process.env.API_BASE_ENDPOINT}007`,
			withCredentials: true
		})
			.then((res) => {
				const { state, success, msg } = res.data;
				if (state === 'SIGNED_IN' && success) {
					setAdmin("SIGNED_IN")
				}
			})
			.catch((error) => setError({
				state: true,
				message: error.response.data.msg
			}));
	}, []);

	useEffect(
		() => {
			var discountCut = product.discount / 100 * product.price;
			var salePrice = product.price - discountCut;

			setProduct({ ...product, discountedPrice: salePrice });
		},
		[ product.discount ]
	);




	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await axios({
			method: 'post',
			url: `${process.env.API_BASE_ENDPOINT}insert`,
			data: product,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((res) => {
				if (!res.data.success) {
					setError({
						state: true,
						message: res.data.msg
					});
					setTimeout(
						() =>
							setError({
								state: false,
								message: ''
							}),
						3000
					);
				}

				if (res.data.success) {
					setIsAdded(true);
					setTimeout(() => setIsAdded(false), 3000);
					setProduct({
						...product,
						productName: '',
						price: 0,
						discount: 0,
						discountedPrice: 0,
						category: 'electronics',
						description: ''
					});
					imageRef.current.value = null;
				}

			})
			.catch((err) => setError({
				state: true,
				message: err.response.data.msg
			}));
	};

	if (!admin) {
		return <AdminLogin setAdmin={(val) => {
			setAdmin(val)
		}}/>;
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div>
				<span className="absolute w-40 h-0.5 bg-red-600" />
				<h1 className="font-sans text-3xl font-semibold antialiased mb-24 md:mb-12 mt-4">Add Product</h1>
			</div>
			<form className="w-full max-w-sm" onSubmit={handleSubmit} encType="multipart/form-data">
				{isAdded ? (
					<div className="absolute top-0 left-0 h-screen w-screen bg-slate-500/50 z-10">
						<h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-2 py-4 font-bold rounded-md bg-lime-600 text-white drop-shadow-2xl z-20">
							Product Added Successfully!
						</h1>
					</div>
				) : (
					''
				)}
				{error.state ? (
					<div className="absolute top-0 left-0 h-screen w-screen bg-slate-500/50 z-10">
						<h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-2 py-4 font-bold rounded-md bg-red-500 text-white drop-shadow-2xl z-20">
							{error.message}
						</h1>
					</div>
				) : (
					''
				)}
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Product Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							onChange={(e) => setProduct({ ...product, productName: e.target.value })}
							value={product.productName}
							autoComplete="off"
							required
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-password"
						>
							Price
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-password"
							type="number"
							onChange={(e) => setProduct({ ...product, price: e.target.value })}
							value={product.price}
							autoComplete="off"
							required
							min="0"
							step="any"
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-password"
						>
							Discount
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-password"
							type="number"
							onChange={(e) => setProduct({ ...product, discount: e.target.value })}
							value={product.discount}
							autoComplete="off"
							required
						/>
					</div>
				</div>

				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Category Name
						</label>
					</div>
					<div className="flex justify-center">
						<div className="mb-3 xl:w-full">
							<select
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
								aria-label="Default select example"
								onChange={(e) => setProduct({ ...product, category: e.target.value })}
								value={product.category}
							>
								<option value="electronics" selected="selected">
									Electronics
								</option>
								<option value="mobiles and accessories">Mobiles and Accessories</option>
								<option value="tools">Tools</option>
								<option value="appliances">Appliances</option>
							</select>
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="mb-3 xl:w-96">
						<label
							htmlFor="exampleFormControlTextarea1"
							className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
						>
							Description
						</label>
						<textarea
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="Add Description..."
							onChange={(e) => setProduct({ ...product, description: e.target.value })}
							value={product.description}
						/>
					</div>
				</div>

				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Image
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							ref={imageRef}
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="file"
							name="image"
							onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
							accept="image/x-png,image/gif,image/jpeg"
							autoComplete="off"
							required
						/>
					</div>
				</div>

				<div className="md:flex md:items-center">
					<div className="md:w-1/3" />
					<div className="md:w-2/3">
						<button
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="submit"
							value="submit"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
