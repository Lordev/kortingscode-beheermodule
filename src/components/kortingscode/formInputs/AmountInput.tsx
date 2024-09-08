import { Form } from 'react-bootstrap';
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
			<div className="row">
				<div className="col-md-4">
					<Form.Label
						aria-label="Kortingsbedrag"
						htmlFor="kortingsBedrag"
						className="fw-bold mt-2"
					>
						Kortingsbedrag
					</Form.Label>
				</div>
				{formData.kortingType === 'Bedrag' ? (
					<div className="col-md-8 d-flex w-50 ">
						<div>
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
						</div>
						<span className="mx-2 col-md-1 mt-3">,</span>
						<div>
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
						</div>
					</div>
				) : (
					<div className="col-md-8 row">
						<div className="col-md-4">
							<Form.Control
								aria-label="Percentage"
								id="percentage"
								min="1"
								max="99"
								value={formData.kortingsPercentage}
								onChange={e =>
									setFormValue(
										'kortingsPercentage',
										e.target.value
									)
								}
							/>
						</div>
						<div className="col-md-8">
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
						</div>
						<Form.Control.Feedback type="invalid">
							{formErrors.kortingsPercentage}
						</Form.Control.Feedback>
					</div>
				)}
			</div>
		</>
	);
}
