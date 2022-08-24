import Layout from "../components/Layout";

export default function Contact() {
  return (
	<div className="flex justify-center items-center mx-12 my-8 h-[50vh]">
		<div className="bg-slate-300 px-8 py-16 rounded-lg shadow-lg">
			<h1 className="font-bold text-3xl mb-4 text-slate-700">Contact</h1>
			<hr/>
			<h2 className="font-medium text-xl mt-4 text-slate-700">Email :-</h2>
			<span className="font-normal text-slate-700">mirzajack1995@gmail.com</span>
		</div>
	</div>
  )
}


Contact.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>; 
};