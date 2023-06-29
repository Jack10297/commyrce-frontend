import Layout from '../components/Layout';
export default function About() {

	return (
		<div className="flex justify-center items-center mx-12 my-8 h-[50vh]">
			<div className="bg-slate-300 px-8 py-16 rounded-lg shadow-lg">
				<h1 className="font-bold text-3xl mb-4 text-slate-700">About</h1>
				<hr className='mb-4'/>
				<span className="font-normal text-slate-700">This is a MERN-stack ecommerce web app built using Next JS, Node, Express, MongoDB and many more. </span>
			</div>
		</div>
	);
}

About.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
