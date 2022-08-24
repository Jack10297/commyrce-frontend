import axios from 'axios';
import { useState } from 'react';

export default function AdminLogin({setAdmin}) {
	const [ credentials, setCredentials ] = useState({
		username: '',
		password: ''
	});
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `${process.env.API_BASE_ENDPOINT}authenticate-admin`,
			data: {
				username: credentials.username,
				password: credentials.password
			},
			withCredentials: true
		})
			.then((res) => {
				const { state, success, msg } = res.data;
				if (state === 'LOGGED_IN' && success) {
					setAdmin("LOGGED_IN")
				}	
            })
			.catch((err) => setError(err.response.data.msg));

	};

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div>
				<span className="absolute w-40 h-0.5 bg-red-600" />
				<h1 className="font-sans text-3xl font-semibold antialiased mb-24 md:mb-12 mt-4">ADMIN</h1>
			</div>
			<form className="w-full max-w-sm" onSubmit={handleSubmit}>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Sign In
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
							value={credentials.username}
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
							Password
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-password"
							type="password"
							onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
							value={credentials.password}
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
							Sign In
						</button>
					</div>
				</div>

				{error ? <h1 className='font-medium'>{error}</h1> : ''}
			</form>
		</div>
	);
}

// {error.state ? <div className='absolute top-0 left-0 h-screen w-screen bg-slate-500/50 z-10'><h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-2 py-4 font-bold rounded-md bg-red-500 text-white drop-shadow-2xl z-20'>{error.message}</h1></div> : ""}
