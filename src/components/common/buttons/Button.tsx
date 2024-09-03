import { Button as BootstrapButton } from 'react-bootstrap';
import { clsx } from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: string;
	className?: string;
}

export default function Button({
	children,
	className,
	variant = 'secondary',
	...props
}: ButtonProps) {
	const variantClass = variant === 'muted' && 'bg-button-muted';

	return (
		<BootstrapButton
			variant={variant}
			className={`${clsx(
				'd-flex align-items-center gap-2 fw-bold',
				variantClass,
				className
			)} `}
			{...props}
		>
			{children}
		</BootstrapButton>
	);
}
