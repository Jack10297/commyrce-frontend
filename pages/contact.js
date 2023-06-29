import { useEffect } from "react";
import Layout from "../components/Layout";

// because document undefined on ssr
if(typeof window !== 'undefined'){ 
	const MailtoUI = require("../node_modules/mailtoui/dist/mailtoui-min")
}

export default function Contact() {
	useEffect(()=> {
		MailtoUI.run()
	}, [])
	
	return (
		<div className="flex justify-center items-center mx-12 my-8 h-[50vh]">
			<div className="bg-slate-300 px-8 py-16 rounded-lg shadow-lg">
				<h1 className="font-bold text-3xl mb-4 text-slate-700">Contact</h1>
				<hr />
				<h2 className="font-medium text-xl mt-4 text-slate-700">Email :-</h2>
				<span className="font-normal text-slate-700">
					<a className="mailtoui underline" href="mailto:ahsanmg1998@gmail.com">👉 ahsanmg1998@gmail.com</a>
				</span>
			</div>
		</div>
	)
}


Contact.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

