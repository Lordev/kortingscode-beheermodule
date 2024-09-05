import Button from 'components/common/buttons/Button';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormStore } from 'lib/store/useDiscountFormStore';
import { InfoIcon, SlidersIcon } from 'components/common/svg';
import { z } from 'zod';
import { formSchema } from 'lib/types/formSchema';
import AmountInput from './AmountInput';
import AmountTypeSelect from './AmountTypeSelect';
import DateInput from './DateInput';
import DescriptionInput from './DescriptionInput';
import UsageInput from './UsageInput';
import axios from 'axios';

export default function KortingscodeForm() {
	const [formErrors, setFormErrors] = useState<Record<string, string>>({});
	const { formData } = useFormStore();
	const navigate = useNavigate();

	const validateForm = () => {
		try {
			formSchema.parse(formData);
			console.log('Form data is valid');
		} catch (e) {
			if (e instanceof z.ZodError) {
				const errors: Record<string, string> = {};
				e.errors.forEach(error => {
					errors[error.path[0]] = error.message;
				});
				setFormErrors(errors);
			}
		}
	};

	useEffect(() => {
		if (Object.keys(formErrors).length > 0) validateForm();
	}, [formData]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		validateForm();

		if (Object.keys(formErrors).length === 0) {
			axios
				.post(
					'https://66d8747f37b1cadd8054b943.mockapi.io/api/DiscountItem',
					formData
				)
				.then(response => {
					console.log('Form submission successful:', response.data);
				})
				.catch(error => {
					console.error('Form submission error:', error);
				});
		} else {
			console.log(
				'Form contains errors. Submission aborted.',
				formErrors
			);
		}
	};

	return (
		<div className="border p-4">
			<div className="w-75">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<div className="d-flex gap-3">
							<InfoIcon width={24} height={24} />
							<h5 className="text-dark fw-bold">Informatie</h5>
						</div>
						<hr className="py-2 " />
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="d-flex gap-3">
							<SlidersIcon width={24} height={24} />
							<h5 className="text-dark fw-bold">Instellingen</h5>
						</div>
						<hr className="py-2 " />
					</div>
				</div>
				<Form className="row" onSubmit={handleSubmit}>
					<div className="col-sm-12 col-md-6">
						<DescriptionInput formErrors={formErrors} />
					</div>

					<div className="col-sm-12 col-md-6">
						<div className="mb-5 bg-input-bg p-4 ">
							<AmountTypeSelect formErrors={formErrors} />
							<hr />
							<AmountInput formErrors={formErrors} />
						</div>
						<div className="mb-5 bg-input-bg p-4 ">
							<DateInput formErrors={formErrors} />
						</div>
						<div className="mb-5 bg-input-bg p-4 ">
							<UsageInput formErrors={formErrors} />
						</div>
					</div>
					<hr className="py-2 " />
					<div className="d-flex gap-2">
						<Button
							onClick={() => navigate('/management/kortingscode')}
							variant="muted"
						>
							Annuleren
						</Button>
						<Button type="submit" variant="secondary">
							Opslaan
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}
