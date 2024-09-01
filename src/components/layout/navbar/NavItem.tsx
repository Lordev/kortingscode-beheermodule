import { PropsWithChildren } from 'react';
import { Nav } from 'react-bootstrap';

interface NavItemProps extends PropsWithChildren<{}> {}

export default function NavItem({ children }: NavItemProps) {
	return (
		<Nav.Item className="d-flex align-items-center ms-4">
			{children}
		</Nav.Item>
	);
}
