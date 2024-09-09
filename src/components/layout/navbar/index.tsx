import { Navbar, Nav } from 'react-bootstrap';
import {
	UserIcon,
	QuestionIcon,
	GiftIcon,
	BullHornIcon,
} from '../../common/svg';
import NavItem from './NavItem';
import { MobileMenuIcon } from 'components/common/svg';

import { useMobileLayoutStore } from 'lib/store/useMobileLayoutStore';

export default function NavBar() {
	const { toggleMobileMenu, mobileBreakpoint } = useMobileLayoutStore();

	return (
		<Navbar bg="nav">
			<Nav className="w-100 justify-content-center justify-content-sm-end px-sm-3 flex-wrap ">
				<NavItem>
					<UserIcon color="white" width={18} height={21} />
					<Nav.Link
						className="text-primary font-size-lg ms-2 nav-font-size link-text-large"
						href="#"
					>
						SportBit Support
					</Nav.Link>
				</NavItem>
				{!mobileBreakpoint && (
					<>
						<NavItem>
							<QuestionIcon
								color="white"
								width={20}
								height={21}
							/>
							<Nav.Link
								className="text-primary link-text-large"
								href="#"
							>
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
							<BullHornIcon
								color="white"
								width={23}
								height={21}
							/>
						</NavItem>
					</>
				)}
				{mobileBreakpoint && (
					<NavItem>
						<MobileMenuIcon
							onClick={toggleMobileMenu}
							color="#ffffff"
							width={25}
							height={26}
						/>
					</NavItem>
				)}
			</Nav>
		</Navbar>
	);
}
