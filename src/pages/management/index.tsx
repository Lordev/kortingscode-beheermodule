import { Nav, Navbar } from 'react-bootstrap';
import { ShoppingIcon } from '../../components/common/svg';
import { Link, useLocation, Outlet } from 'react-router-dom';

const managementLinkTabs = [
	{
		path: '/management/productgroepen',
		title: 'Productgroepen',
	},
	{
		path: '/management/abonnementen',
		title: 'Abonnementen',
	},
	{
		path: '/management/rittenkaarten',
		title: 'Rittenkaarten',
	},
	{
		path: '/management/artikelen',
		title: 'Artikelen',
	},
	{
		path: '/management/kortingscodes',
		title: 'Kortingscodes',
	},
];

export default function Management() {
	const location = useLocation();

	return (
		<>
			<div className="d-flex gap-3 align-items-center">
				<ShoppingIcon width={30} height={27} />
				<h1>Shop</h1>
			</div>
			<hr className="border-3 border-border-light" />
			<Navbar className="my-3">
				{managementLinkTabs.map(tab => (
					<Nav.Item
						key={tab.path}
						as={Link}
						to={tab.path}
						className={`d-flex align-items-center py-2 my-1 rounded px-3 justify-content-center text-decoration-none text-dark fw-bold ${
							location.pathname.startsWith(tab.path)
								? 'bg-secondary '
								: ''
						}`}
					>
						{tab.title}
					</Nav.Item>
				))}
			</Navbar>
			<Outlet />
		</>
	);
}
