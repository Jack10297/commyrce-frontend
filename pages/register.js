import React, {useState} from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Register() {
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});
	const [error, setError] = useState('')
	const [msg, setMsg] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `${process.env.API_BASE_ENDPOINT}register`,
			data: {
				username: credentials.username,
				password: credentials.password
			}
		})
		.then(res =>  {
			setMsg(res.data.msg)
			setTimeout(() => setMsg(''), 4000)
		})
		.catch(error => {
			setError(error.response.data.msg)
			setTimeout(() => setError(''), 4000)
		})
	}


	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<div>
				<span className="absolute w-40 h-0.5 bg-red-600" />
				<h1 className="font-sans text-3xl font-semibold antialiased mb-24 md:mb-12 mt-4 text-center">Register</h1>
			</div>
			<form className="w-full max-w-sm" onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							User Name:
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							onChange={(e) => setCredentials({...credentials, username: e.target.value })}
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
							Password:
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="password"
							onChange={(e) => setCredentials({...credentials, password: e.target.value})}
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
			<h3 className='text-md mt-4'>Go To Login Page! <Link href="/login"><a className='text-blue-600 underline'>Login </a></Link></h3>
			<h1 className="text-2xl text-red-500 mt-4">{error}</h1> 
			<h1 className="text-2xl text-green-500 mt-4">{msg}</h1> 
		</div>
	);
}
