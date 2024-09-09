import { Col, Form, Row } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import { useEffect } from 'react';

export default function AmountInput({
	formErrors,
}: {
	formErrors: Record<string, string>;
}) {
	const { formData, setFormValue, kortingsBedrag } = useFormStore();

	useEffect(() => {
		if (kortingsBedrag) {
			const [geheelGetal, decimaalGetal] = kortingsBedrag.split(',');
			setFormValue('geheelGetal', geheelGetal);
			setFormValue('decimaalGetal', decimaalGetal);
		}
	}, [formData.geheelGetal, formData.decimaalGetal]);

	return (
		<>
			<Row>
				<Col md={4}>
					<Form.Label
						aria-label="Kortingsbedrag"
						htmlFor="kortingsBedrag"
						className="fw-bold mt-2 "
					>
						Kortingsbedrag
					</Form.Label>
				</Col>
				{formData.kortingType === 'Bedrag' ? (
					<Col lg={8} xl={5} className="d-flex">
						<Form.Group>
							<Form.Control
								aria-label="Heel getal"
								placeholder="1.000"
								type="number"
								id="geheelGetal"
								value={formData.geheelGetal}
								onChange={e =>
									setFormValue('geheelGetal', e.target.value)
								}
								isInvalid={!!formErrors.geheelGetal}
							/>
							<Form.Control.Feedback type="invalid">
								{formErrors.geheelGetal}
							</Form.Control.Feedback>
						</Form.Group>
						<span className="mx-2 mt-3">,</span>
						<Form.Group>
							<Form.Control
								aria-label="Decimaal"
								placeholder="00"
								id="decimaalGetal"
								type="number"
								value={formData.decimaalGetal}
								onChange={e => {
									const newValue = e.target.value;
									if (newValue.length <= 2) {
										setFormValue('decimaalGetal', newValue);
									}
								}}
								isInvalid={!!formErrors.decimaalGetal}
							/>
							<Form.Control.Feedback type="invalid">
								{formErrors.decimaalGetal}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				) : (
					<Col lg={8}>
						<Row>
							<Col md={4}>
								<Form.Control
									aria-label="Percentage"
									id="percentage"
									min="1"
									max="99"
									value={formData.kortingsPercentage}
									placeholder="00"
									onChange={e =>
										setFormValue(
											'kortingsPercentage',
											e.target.value
										)
									}
								/>
							</Col>
							<Col md={8}>
								<Form.Range
									aria-label="Percentage"
									id="percentage"
									min="1"
									max="99"
									className="col-md-4"
									value={formData.kortingsPercentage}
									onChange={e =>
										setFormValue(
											'kortingsPercentage',
											e.target.value
										)
									}
								/>
							</Col>
							<Form.Control.Feedback type="invalid">
								{formErrors.kortingsPercentage}
							</Form.Control.Feedback>
						</Row>
					</Col>
				)}
			</Row>
		</>
	);
}
