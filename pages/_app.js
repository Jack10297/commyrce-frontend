import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/custom.css';
import '../styles/tail.css';
import React from 'react';

import { store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	if (getLayout) {
		return getLayout(
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	} else {
		return (
			<React.Fragment>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</React.Fragment>
		);
	}
}

export default MyApp;
