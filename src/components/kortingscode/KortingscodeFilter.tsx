import Button from '../common/buttons/Button';
import SearchIcon from '../common/svg/SearchIcon';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function KortingscodeFilter() {
	return (
		<div className="d-flex gap-3">
			<Form.Select className="w-25 mb-4">
				<option value="" disabled selected>
					Sorteer op titel
				</option>
				<option value="1">Optie 1</option>
				<option value="2">Optie 2</option>
			</Form.Select>
			<InputGroup className="w-25 mb-4">
				<Form.Control type="text" placeholder="Zoek op titel" />
				<Button>
					<SearchIcon width={14} height={14} />
					Zoeken
				</Button>
			</InputGroup>
		</div>
	);
}
