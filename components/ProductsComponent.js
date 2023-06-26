import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function ProductsComponent({ products, query }) {

	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap">
						{products
							.filter((product) => {
								if (query === '') {
									return product;
								} else if (product.productName.toLowerCase().includes(query.toLowerCase())) {
									return product;
								}
							})
							.map((product, index) => (
								<Link
									key={index}
									href={{
										pathname: '/product/query',
										query: {
											name: product.productName,
											price: product.price.$numberDecimal,
											category: product.category,
											description: product.description,
											image: encodeURIComponent(product.image)
										}
									}}
								>
									<a className="p-4 md:w-1/3 lg:w-100">
										<div className="h-[500px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden text-clip product-container">
												<Image
													src={product.image}
													alt="blog"
													objectFit='contain'
													height="200px"
													width="100px"
												/>
											<div className="p-6">
												<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
													{product.category}
												</h2>
												<div className="flex justify-between">
													<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
														{product.productName}
													</h1>
													<h1 className="title-font text-lg font-medium mb-3">
														{product.price.$numberDecimal}{' '}
														<span className="text-gray-900">$</span>
													</h1>
												</div>
												<p className="leading-relaxed mb-3">{product.description}</p>
												<div className="flex items-center flex-wrap ">
													<a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
														Learn More
														<svg
															className="w-4 h-4 ml-2"
															viewBox="0 0 24 24"
															stroke="currentColor"
															strokeWidth="2"
															fill="none"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M5 12h14" />
															<path d="M12 5l7 7-7 7" />
														</svg>
													</a>
												</div>
											</div>
										</div>
									</a>
								</Link>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}

