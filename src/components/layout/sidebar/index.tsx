import { Nav, Image } from 'react-bootstrap';
import SideBarItem from './SideBarItem';
import {
	CalenderIcon,
	ChartPieIcon,
	CogsIcon,
	CommentsIcon,
	FileIcon,
	ShoppingIcon,
	WareHouseIcon,
} from 'components/common/svg';
import { useMobileLayoutStore } from 'lib/store/useMobileLayoutStore';
import { useEffect } from 'react';

const sideBarLinks = [
	{
		path: '/management',
		title: 'Management',
		icon: <ChartPieIcon width={24} height={23} />,
	},
	{
		path: '/administratie',
		title: 'Administratie',
		icon: <FileIcon width={17} height={22} />,
	},
	{
		path: '/kalender',
		title: 'Kalender',
		icon: <CalenderIcon width={21} height={24} />,
	},
	{
		path: '/shop',
		title: 'Shop',
		icon: <ShoppingIcon width={27} height={24} />,
	},
	{
		path: '/communicatie',
		title: 'Communicatie',
		icon: <CommentsIcon width={27} height={24} />,
	},
	{
		path: '/clubbeheer',
		title: 'Clubbeheer',
		icon: <WareHouseIcon width={30} height={24} />,
	},
	{
		path: '/configuratie',
		title: 'Configuratie',
		icon: <CogsIcon width={30} height={24} />,
	},
];

export default function Sidebar() {
	const {
		mobileBreakpointSize,
		mobileBreakpoint,
		SideMenuOpen,
		setSideMenuClose,
		setSideMenuOpen,
		setMobileBreakpoint,
	} = useMobileLayoutStore();

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < mobileBreakpointSize) {
				setMobileBreakpoint(true);
				setSideMenuClose();
			} else {
				setMobileBreakpoint(false);
				setSideMenuOpen();
			}
		});
	}, [setSideMenuClose]);

	return (
		<Nav
			className={`flex-column bg-primary p-3 shadow-lg align-items-center min-vh-100 top-0 flex-nowrap z-2 `}
			variant="pills"
			style={{
				transition: mobileBreakpoint
					? 'transform 0.3s ease-in-out'
					: 'none',
				transform: mobileBreakpoint
					? SideMenuOpen
						? 'translateX(0)'
						: 'translateX(-100%)'
					: 'none',
				position: mobileBreakpoint ? 'fixed' : 'sticky',
			}}
		>
			<Image
				className="my-5"
				src="https://placehold.co/64x64"
				roundedCircle
			/>
			{sideBarLinks.map(({ path, title, icon }) => (
				<SideBarItem key={path} path={path} icon={icon} title={title} />
			))}
		</Nav>
	);
}
