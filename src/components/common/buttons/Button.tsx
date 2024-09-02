import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
	children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
	return (
		<BootstrapButton
			variant="secondary"
			className="d-flex align-items-center gap-2 fw-bold"
		>
			{children}
		</BootstrapButton>
	);
}
