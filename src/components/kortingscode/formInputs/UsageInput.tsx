import Form from 'react-bootstrap/Form';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import { Row, Col } from 'react-bootstrap';

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
			<Row className="mb-3 align-items-center">
				<Col lg={4}>
					<Form.Label
						aria-label="Maximumgebruik"
						htmlFor="maximumGebruik"
						className="fw-bold"
					>
						Maximumgebruik
					</Form.Label>
				</Col>
				<Col lg={8}>
					<Form.Check
						type="checkbox"
						id="maximumGebruik"
						label="Ja"
						checked={formData.maximumGebruik}
						onChange={e => handleCheckboxChange(e)}
					/>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col lg={4}>
					<Form.Label
						aria-label="Aantal keer te gebruiken"
						htmlFor="aantalKeer"
						className="fw-bold"
					>
						Aantal keer te gebruiken
					</Form.Label>
				</Col>
				<Col lg={8}>
					<Form.Control
						disabled={!formData.maximumGebruik}
						min={1}
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
				</Col>
			</Row>
		</>
	);
}
