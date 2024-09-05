import Form from 'react-bootstrap/Form';
import { useFormStore } from 'lib/store/useDiscountFormStore';

interface UsageInputProps {
	formErrors: { [key: string]: string };
}

export default function UsageInput({ formErrors }: UsageInputProps) {
	const { formData, setFormValue } = useFormStore();

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setFormValue('maximumGebruik', isChecked);
		if (!isChecked) {
			setFormValue('aantalKeer', '');
		}
	};

	return (
		<>
			<div className="row mb-3 align-items-center">
				<div className="col-md-4">
					<Form.Label
						aria-label="Maximumgebruik"
						htmlFor="maximumGebruik"
						className="fw-bold"
					>
						Maximumgebruik
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Check
						type="checkbox"
						id="maximumGebruik"
						label="Ja"
						checked={formData.maximumGebruik}
						onChange={e => handleCheckboxChange(e)}
					/>
				</div>
			</div>
			<div className="row  align-items-center">
				<div className="col-md-4">
					<Form.Label
						aria-label="Aantal keer te gebruiken"
						htmlFor="aantalKeer"
						className="fw-bold"
					>
						Aantal keer te gebruiken
					</Form.Label>
				</div>
				<div className="col-md-8">
					<Form.Control
						disabled={!formData.maximumGebruik}
						type="number"
						className="form-date w-25"
						id="aantalKeer"
						value={formData.aantalKeer}
						onChange={e =>
							setFormValue('aantalKeer', e.target.value)
						}
					/>
					<Form.Control.Feedback>
						{formErrors.aantalKeer}
					</Form.Control.Feedback>
				</div>
			</div>
		</>
	);
}
