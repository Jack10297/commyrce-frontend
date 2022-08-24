import Layout from '../components/Layout';

import { useState } from 'react';
import CartButton from '../components/CartButton';
import PaginatedProducts from '../components/PaginatedProducts';

export default function Products() {
	const [ category, setCategory ] = useState('');
	const [ toSearch, setToSearch ] = useState('');

	return (
		<div>
			<div className="flex bg-gray-100 w-full py-4 px-6">
				<ul>
					<li>Filter</li>
					<li>
						<select
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							aria-label="Default select example"
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="all" defaultValue={'all'}>
								All
							</option>
							<option value="electronics">Electronics</option>
							<option value="mobiles and accessories">Mobiles and Accessories</option>
							<option value="tools">Tools</option>
							<option value="appliances">Appliances</option>
						</select>
					</li>
				</ul>
				<div className="md:w-1/2 ml-12">
					<label>Search</label>
					<input
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
						id="inline-full-name"
						type="text"
						onChange={(e) => setToSearch(e.target.value)}
						value={toSearch}
						autoComplete="off"
						placeholder="Search Product..."
						required
					/>
				</div>
			</div>
			<div>
				<PaginatedProducts itemsPerPage={20} category={category} query={toSearch}/> 
			</div>
			<CartButton />
		</div>
	);
}

Products.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
