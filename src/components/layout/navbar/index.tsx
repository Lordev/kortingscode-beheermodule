import { Navbar, Container, Nav } from 'react-bootstrap';
import {
	UserIcon,
	QuestionIcon,
	GiftIcon,
	BullHornIcon,
} from '../../common/svg';
import NavItem from './NavItem';

export default function NavBar() {
	return (
		<Navbar bg="nav">
			<Nav className="grid align-items-center justify-content-end w-100 px-4">
				<NavItem>
					<UserIcon color="white" width={18} height={21} />
					<Nav.Link
						className="text-primary font-size-lg ms-2 nav-font-size link-text-large"
						href="#"
					>
						SportBit Support
					</Nav.Link>
				</NavItem>
				<NavItem>
					<QuestionIcon color="white" width={20} height={21} />
					<Nav.Link className="text-primary link-text-large" href="#">
						Helpcenter
					</Nav.Link>
				</NavItem>
				<NavItem>
					<GiftIcon
						color="white"
						className="ms-3"
						width={20}
						height={21}
					/>
				</NavItem>
				<NavItem>
					<BullHornIcon color="white" width={23} height={21} />
				</NavItem>
			</Nav>
		</Navbar>
	);
}
