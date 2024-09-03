import React from 'react';
import Button from '../common/buttons/Button';

interface KortingscodeFormProps {
	onCancel: () => void;
	onSave: () => void;
}

export default function KortingscodeForm({
	onCancel,
	onSave,
}: KortingscodeFormProps) {
	return (
		<div className="bg-foreground">
			<h3 className="fw-bold p-5 mb-0">Kortingscode toevoegen</h3>
			<div className="border p-4">
				{/* Form content goes here */}
				<form>
					{/* Replace the below with actual form fields */}
					<div className="mb-3">
						<label htmlFor="code" className="form-label">
							Kortingscode
						</label>
						<input type="text" className="form-control" id="code" />
					</div>
					{/* Add other form fields as necessary */}
				</form>
				<div className="d-flex gap-2">
					<Button onClick={onCancel} className="mb-4" variant="muted">
						Annuleren
					</Button>
					<Button onClick={onSave} className="mb-4">
						Opslaan
					</Button>
				</div>
			</div>
		</div>
	);
}
