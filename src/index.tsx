import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
} else {
	console.error('Root element not found!');
}
