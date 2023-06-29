import React from 'react';
import Header from '../components/Header';
import HomeProducts from '../components/HomeProducts';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import CartButton from '../components/CartButton';

export default function Home() {
	return (
		<div>
			<CartButton/>
			<Header />
			<HomeProducts />
			<Footer />
		</div>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};
