import Image from 'next/image';
import sampleImg from '../public/sample.jpg';

import { useState, useEffect } from 'react';
import DealProducts from './DealProducts';

export default function Header() {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-900">
							Deals of the Day!
							<br className="hidden lg:inline-block" />
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos
							poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
							tumeric truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
								Learn More
							</button>
						</div>
					</div>
					<DealProducts/>
				</div>
			</section>
		</div>
	);
}
