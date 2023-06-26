// @type {import('next').NextConfig}

const webpack = require('webpack');

const nextConfig = {
	reactStrictMode: true,
	// images: {
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'res.cloudinary.com',
		// 		port: '',
		// 		pathname: '/cloudinarylonewolf/**'
		// 	}
		// ]
	// },
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			})
		);
		return config;
	},

};

module.exports = {
	nextConfig,
	env: {
		API_BASE_ENDPOINT: process.env.API_BASE_ENDPOINT
	},
	images: {
		domains: ['res.cloudinary.com']
	}

}
