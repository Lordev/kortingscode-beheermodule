import { Form } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';

interface DescriptionInputProps {
	formErrors: { [key: string]: string };
}

export default function DescriptionInput({
	formErrors,
}: DescriptionInputProps) {
	const { formData, setFormValue } = useFormStore();

	return (
		<>
			<div className="row mb-2 align-items-center">
				<div className="col-md-4">
					<Form.Label htmlFor="titel" aria-label="Titel">
						Titel
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Control
						type="text"
						id="titel"
						value={formData.titel}
						onChange={e => setFormValue('titel', e.target.value)}
						isInvalid={!!formErrors.titel}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.titel}
					</Form.Control.Feedback>
				</div>
			</div>

			<div className="row mb-2 align-items-center">
				<div className="col-md-4">
					<Form.Label htmlFor="code" aria-label="Code">
						Code
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Control
						type="text"
						id="code"
						value={formData.code}
						onChange={e => setFormValue('code', e.target.value)}
						isInvalid={!!formErrors.code}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.code}
					</Form.Control.Feedback>
				</div>
			</div>
			<div className="row mb-2">
				<div className="col-md-4 mt-2">
					<Form.Label
						aria-label="Omschrijving"
						htmlFor="omschrijving"
					>
						Omschrijving
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Control
						as="textarea"
						rows={5}
						id="omschrijving"
						value={formData.omschrijving}
						onChange={e =>
							setFormValue('omschrijving', e.target.value)
						}
						isInvalid={!!formErrors.omschrijving}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.omschrijving}
					</Form.Control.Feedback>
				</div>
			</div>
		</>
	);
}
