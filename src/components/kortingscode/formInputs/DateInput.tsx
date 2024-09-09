import { Form } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import { Row, Col } from 'react-bootstrap';

interface DateInputProps {
	formErrors: Record<string, string>;
}

export default function DateInput({ formErrors }: DateInputProps) {
	const { formData, setFormValue } = useFormStore();

	return (
		<>
			<Row className="mb-3 align-items-center">
				<Col lg={4}>
					<Form.Label
						aria-label="Geldig van datum"
						htmlFor="geldigVanaf"
						className="fw-bold"
					>
						Geldig van datum
					</Form.Label>
				</Col>
				<Col lg={8}>
					<Form.Control
						type="date"
						className="form-date"
						id="geldigVanaf"
						value={formData.geldigVanaf}
						min={new Date().toISOString().split('T')[0]}
						onChange={e =>
							setFormValue('geldigVanaf', e.target.value)
						}
						max={formData.geldigTot || undefined}
						isInvalid={!!formErrors.geldigVanaf}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.geldigVanaf}
					</Form.Control.Feedback>
				</Col>
			</Row>
			<Row className="align-items-center">
				<Col lg={4}>
					<Form.Label
						aria-label="Geldig tot datum"
						htmlFor="geldigTot"
						className="fw-bold"
					>
						Geldig tot datum
					</Form.Label>
					<i className="d-block">(optioneel)</i>
				</Col>
				<Col lg={8}>
					<Form.Control
						type="date"
						className="form-date"
						id="geldigTot"
						value={formData.geldigTot}
						onChange={e =>
							setFormValue('geldigTot', e.target.value)
						}
						min={
							formData.geldigVanaf ||
							new Date().toISOString().split('T')[0]
						}
						isInvalid={!!formErrors.geldigTot}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.geldigTot}
					</Form.Control.Feedback>
				</Col>
			</Row>
		</>
	);
}
