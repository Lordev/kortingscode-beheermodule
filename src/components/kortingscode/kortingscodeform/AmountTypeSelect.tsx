import { Form } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';

interface TypeInputProps {
	formErrors: { [key: string]: string };
}

export default function Typeinput({ formErrors }: TypeInputProps) {
	const { formData, setFormValue } = useFormStore();
	return (
		<>
			<div className="row mb-3 align-items-center">
				<div className="col-md-4">
					<Form.Label
						aria-label="Type korting"
						htmlFor="kortingType"
						className="fw-bold"
					>
						Type korting
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Select
						className="form-select"
						id="kortingType"
						value={formData.kortingType}
						onChange={e =>
							setFormValue('kortingType', e.target.value)
						}
						isInvalid={!!formErrors.kortingType}
					>
						<option value="Bedrag">Bedrag</option>
						<option value="Percentage">Percentage</option>
					</Form.Select>
					<Form.Control.Feedback type="invalid">
						{formErrors.kortingType}
					</Form.Control.Feedback>
				</div>
			</div>
		</>
	);
}
