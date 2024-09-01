import { Nav } from 'react-bootstrap';
import { useActiveTabStore } from '../../../store/activeTabStore';

interface SideBarItemProps {
	title: string;
	eventKey: string;
	icon: JSX.Element;
	setActiveTab: (key: string) => void;
}

export default function SideBarItem({
	eventKey,
	setActiveTab,
	title,
	icon,
}: SideBarItemProps) {
	const { activeTab } = useActiveTabStore();

	return (
		<Nav.Item
			className={`d-flex align-items-center py-2 my-1 rounded w-100 justify-content-center flex-column ${
				activeTab === eventKey ? 'bg-secondary' : ''
			}`}
			onClick={() => setActiveTab(eventKey)}
		>
			{icon}
			<Nav.Link className="font-size-sm">{title}</Nav.Link>
		</Nav.Item>
	);
}
