// App.tsx
import NavBar from 'components/layout/navbar';
import Sidebar from 'components/layout/sidebar';
import ContentDisplay from 'components/layout/ContentDisplay';

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Sidebar />
			<ContentDisplay />
		</>
	);
};

export default App;
