import Navbar from './Navbar';

import { store } from '../store/store';
import { Provider } from 'react-redux';

export default function Layout({ children }) {
	return (
		<div>
			<Provider store={store}>
				<Navbar />
				{children}	
			</Provider>
		</div>
	);
}
