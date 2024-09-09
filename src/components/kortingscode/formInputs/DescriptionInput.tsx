import { Form } from 'react-bootstrap';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import axios from 'axios';
import RefreshIcon from 'components/common/svg/RefreshIcon';
import { Row, Col } from 'react-bootstrap';

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
			<Row className="mb-2 align-items-center">
				<Col md={4}>
					<Form.Label
						className="fw-bold"
						htmlFor="titel"
						aria-label="Titel"
					>
						Titel
					</Form.Label>
				</Col>
				<Col md={8}>
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
				</Col>
			</Row>

			<Row className="mb-2 align-items-center">
				<Col md={4}>
					<Form.Label
						className="fw-bold"
						htmlFor="code"
						aria-label="Code"
					>
						Code
					</Form.Label>
				</Col>
				<Col md={8} className="position-relative">
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
				</Col>
			</Row>
			<Row className="mb-2">
				<Col md={4} className="mt-2">
					<Form.Label
						className="fw-bold"
						aria-label="Omschrijving"
						htmlFor="omschrijving"
					>
						Omschrijving
					</Form.Label>
				</Col>
				<Col md={8}>
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
				</Col>
			</Row>
		</>
	);
}
