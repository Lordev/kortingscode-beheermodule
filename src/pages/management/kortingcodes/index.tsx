import KortingscodeList from 'components/kortingscode/KortingscodeList';
import KortingscodeHeader from 'components/kortingscode/KortingscodeHeader';
import { Outlet, useLocation } from 'react-router';

export default function Kortingscodes() {
	const location = useLocation();
	return (
		<>
			{location.pathname === '/management/kortingscodes' ? (
				<>
					<KortingscodeHeader />
					<KortingscodeList />
				</>
			) : (
				<>
					<Outlet />
				</>
			)}
		</>
	);
}
