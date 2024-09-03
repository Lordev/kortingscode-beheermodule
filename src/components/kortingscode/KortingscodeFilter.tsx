import { useState } from 'react';
import Button from '../common/buttons/Button';
import SearchIcon from '../common/svg/SearchIcon';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { PlusIcon } from '../common/svg';
import { useNavigate } from 'react-router-dom';

export default function KortingscodeFilter() {
	const [selectedOption, setSelectedOption] = useState('');
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/management/kortingscodes/nieuw');
	};

	return (
		<div className="d-flex gap-3 align-items-center">
			<Form.Select
				className="w-25"
				value={selectedOption}
				onChange={e => setSelectedOption(e.target.value)}
			>
				<option value="" disabled>
					Sorteer op titel
				</option>
				<option value="1">Optie 1</option>
				<option value="2">Optie 2</option>
			</Form.Select>
			<InputGroup className="w-25">
				<Form.Control type="text" placeholder="Zoek op titel" />
				<Button>
					<SearchIcon width={14} height={14} />
					Zoeken
				</Button>
			</InputGroup>
			<Form.Check
				type="checkbox"
				id="custom-switch"
				label={
					<span>
						Toon{' '}
						<span style={{ textDecoration: 'underline' }}>ook</span>{' '}
						inactieve kortingscodes
					</span>
				}
			/>
			<Button onClick={handleClick} className="ms-auto">
				<PlusIcon width={14} height={14} />
				Nieuwe kortingscode
			</Button>
		</div>
	);
}
