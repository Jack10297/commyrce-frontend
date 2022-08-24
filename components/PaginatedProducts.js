import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import { useSelector, useDispatch } from 'react-redux';
import { addToProductList } from '../store/slices/productSlice';
import ProductsComponent from './ProductsComponent';

export default function PaginatedProducts({ itemsPerPage, category, query }) {
	const [ currentItems, setCurrentItems ] = useState([]);
	const [ pageCount, setPageCount ] = useState(0);
	const [ itemOffset, setItemOffset ] = useState(0);
	const [cat, setCat] = useState('');
	const [error, setError] = useState('')

	const products = useSelector((state) => state.product.productList);
	const dispatch = useDispatch();

	useEffect(
		() => {
			axios({
				method: 'post',
				url: `${process.env.API_BASE_ENDPOINT}products`,
				data: {
					noOfProducts: 100,
					category
				}
			})
				.then((res) => {
					dispatch(addToProductList(res.data));
				})
				.catch((error) => setError("Something Went Wrong!"));

		},
		[ category ]
	);

	useEffect(
		() => {
			// Fetch items from another resources.
			const endOffset = itemOffset + itemsPerPage;
			console.log(`Loading items from ${itemOffset} to ${endOffset}`);
			setCurrentItems(products.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(products.length / itemsPerPage));
		},
		[ itemOffset, itemsPerPage, products ]
	);

	useEffect(() => {
		if(query !== ''){
			setCurrentItems(products)
			setPageCount(1)
		}
	}, [query])

	

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % products.length;
		console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
		setItemOffset(newOffset);
	};

	return (
		<React.Fragment>
			{!error ? <ProductsComponent products={currentItems} category={category} query={query} /> : <h1 className="font-medium">{error}</h1>}
			
			<ReactPaginate
				breakLabel="..."
                breakClassName=''
                containerClassName='flex justify-center'
                previousClassName='bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 mr-4'
                nextClassName='bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 ml-4'
                activeClassName='bg-red-500 rounded-md font-medium text-white'
                pageClassName='mx-4 px-4 py-1'
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={100}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
		</React.Fragment>
	);
}
