import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

interface SideBarItemProps {
	title: string;
	path: string;
	icon: JSX.Element;
}

export default function SideBarItem({ path, title, icon }: SideBarItemProps) {
	const location = useLocation();

	const isActive = location.pathname.startsWith(path);

	return (
		<Nav.Item
			as={Link}
			to={path}
			className={`d-flex align-items-center py-4 px-2 my-1 rounded w-100 justify-content-center flex-column text-decoration-none text-dark gap-2  ${
				isActive ? 'bg-secondary' : ''
			}`}
		>
			{icon}
			<span className="fs-xs font-secondary">{title}</span>
		</Nav.Item>
	);
}
