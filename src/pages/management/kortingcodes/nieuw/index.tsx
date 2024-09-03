import Button from '../../../../components/common/buttons/Button';
import { useNavigate } from 'react-router-dom';

export default function KortingscodeFormNieuw() {
	const navigate = useNavigate();

	const handleCancel = () => {
		navigate('/management/kortingscode');
	};

	const handleSave = () => {
		navigate('/management/kortingscode');
	};

	return (
		<div>
			<div className="bg-foreground">
				<h3 className="fw-bold p-5 mb-0">Kortingscode toevoegen</h3>
			</div>
			<div className="border p-4">
				<div className="d-flex gap-2">
					<Button
						onClick={handleCancel}
						className="mb-4"
						variant="muted"
					>
						Annuleren
					</Button>
					<Button onClick={handleSave} className="mb-4">
						Opslaan
					</Button>
				</div>
			</div>
		</div>
	);
}
