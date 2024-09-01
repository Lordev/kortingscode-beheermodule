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
import { useActiveTabStore } from '../../../store/activeTabStore';

const sideBarLinks = [
	{
		eventKey: 'first',
		title: 'Management',
		icon: <ChartPieIcon width={24} height={23} />,
	},
	{
		eventKey: 'second',
		title: 'Administratie',
		icon: <FileIcon width={17} height={22} />,
	},
	{
		eventKey: 'third',
		title: 'Communicatie',
		icon: <CalenderIcon width={21} height={24} />,
	},
	{
		eventKey: 'fourth',
		title: 'Shop',
		icon: <ShoppingIcon width={27} height={24} />,
	},
	{
		eventKey: 'fifth',
		title: 'Communicatie',
		icon: <CommentsIcon width={27} height={24} />,
	},
	{
		eventKey: 'sixth',
		title: 'Clubbeheer',
		icon: <WareHouseIcon width={30} height={24} />,
	},
	{
		eventKey: 'seventh',
		title: 'Configuratie',
		icon: <CogsIcon width={30} height={24} />,
	},
];

export default function Sidebar() {
	const { activeTab, setActiveTab } = useActiveTabStore();

	return (
		<Nav
			className="flex-column vh-100 bg-primary p-3 shadow-lg position-absolute top-0 start-0 align-items-center"
			variant="pills"
			activeKey={activeTab}
			onSelect={selectedKey => setActiveTab(selectedKey || 'first')}
		>
			<Image
				className="my-5"
				src="https://via.placeholder.com/64"
				roundedCircle
			/>
			{sideBarLinks.map(({ eventKey, title, icon }) => (
				<SideBarItem
					key={eventKey}
					eventKey={eventKey}
					icon={icon}
					title={title}
					setActiveTab={setActiveTab}
				/>
			))}
		</Nav>
	);
}
