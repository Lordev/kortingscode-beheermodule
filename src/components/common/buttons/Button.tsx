import { Button as BootstrapButton } from 'react-bootstrap';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
	const isCustomVariant = variant === 'muted';
	const variantClass = isCustomVariant ? 'bg-button-muted' : '';

	return (
		<BootstrapButton
			as="button"
			variant={!isCustomVariant ? variant : undefined}
			className={clsx(
				'd-flex align-items-center gap-2 fw-bold fs-xs',
				variantClass,
				className
			)}
			{...props}
		>
			{children}
		</BootstrapButton>
	);
}
