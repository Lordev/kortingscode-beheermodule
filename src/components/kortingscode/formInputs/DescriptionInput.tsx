import { Form } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import { useEffect } from 'react';
import axios from 'axios';
import RefreshIcon from 'components/common/svg/RefreshIcon';

interface DescriptionInputProps {
	formErrors: { [key: string]: string };
}

export default function DescriptionInput({
	formErrors,
}: DescriptionInputProps) {
	const { formData, setFormValue } = useFormStore();

	const callRandomCode = async () => {
		const transformUppercase = (str: string) => {
			return str.toUpperCase();
		};
		const res = await axios.get(
			'https://random-word-api.herokuapp.com/word'
		);
		setFormValue('code', transformUppercase(res.data[0]));
	};

	return (
		<>
			<div className="row mb-2 align-items-center">
				<div className="col-md-4">
					<Form.Label
						className="fw-bold"
						htmlFor="titel"
						aria-label="Titel"
					>
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
					<Form.Label
						className="fw-bold"
						htmlFor="code"
						aria-label="Code"
					>
						Code
					</Form.Label>
				</div>
				<div className="col-md-8 position-relative">
					<Form.Control
						type="text"
						id="code"
						value={formData.code}
						placeholder="LENTE20"
						onChange={e => setFormValue('code', e.target.value)}
						isInvalid={!!formErrors.code}
					/>
					<RefreshIcon
						className="position-absolute end-25 top-50 translate-middle-y text-gray-light cursor-pointer"
						onClick={() => {
							callRandomCode();
						}}
					/>
					<Form.Control.Feedback type="invalid">
						{formErrors.code}
					</Form.Control.Feedback>
				</div>
			</div>
			<div className="row mb-2">
				<div className="col-md-4 mt-2">
					<Form.Label
						className="fw-bold"
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
						placeholder="Omschrijf hier de kortingsactie. Waar is de korting voor bedoeld?"
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
