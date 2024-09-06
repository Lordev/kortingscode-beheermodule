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
								id="geheelGetal"
								value={formData.geheelGetal}
								onChange={e =>
									setFormValue('geheelGetal', e.target.value)
								}
								isInvalid={
									!!formData.geheelGetal &&
									!/^\d+$/.test(formData.geheelGetal)
								}
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
								value={formData.decimaalGetal}
								maxLength={2}
								onChange={e =>
									setFormValue(
										'decimaalGetal',
										e.target.value
									)
								}
								isInvalid={
									!!formData.decimaalGetal &&
									!/^\d+$/.test(formData.decimaalGetal)
								}
							/>
							<Form.Control.Feedback type="invalid">
								{formErrors.decimaalGetal}
							</Form.Control.Feedback>
						</div>
					</div>
				) : (
					<div className="col-md-8">
						<Form.Range
							aria-label="Percentage"
							id="percentage"
							min="0"
							max="100"
							value={formData.kortingsPercentage}
							onChange={e =>
								setFormValue(
									'kortingsPercentage',
									e.target.value
								)
							}
						/>
						<Form.Control.Feedback type="invalid">
							{formErrors.kortingsPercentage}
						</Form.Control.Feedback>
					</div>
				)}
			</div>
		</>
	);
}
