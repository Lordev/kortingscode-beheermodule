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
	return (
		<Nav
			className="flex-column  bg-primary p-3 shadow-lg position-fixed top-0 start-0 vh-100 align-items-center"
			variant="pills"
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
