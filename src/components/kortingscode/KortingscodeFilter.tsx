import React, { useState } from 'react';
import Button from '../common/buttons/Button';
import SearchIcon from '../common/svg/SearchIcon';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { PlusIcon } from '../common/svg';
import { useNavigate } from 'react-router-dom';
import { useDiscountListStore } from 'lib/store/useDiscountListStore';

export default function KortingscodeFilter() {
	const { setSortingOption, setSearchQuery, setShowInactiveDiscounts } =
		useDiscountListStore();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/management/kortingscodes/nieuw');
	};

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortingOption(e.target.value);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleShowInactive = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowInactiveDiscounts(e.target.checked);
	};

	return (
		<div className="d-flex gap-3 align-items-center flex-wrap">
			<Form.Select
				className=" fs-sm"
				onChange={handleSortChange}
				style={{ maxWidth: '300px' }}
			>
				<option value="title">Sorteer op titel</option>
				<option value="date">Sorteer op geldig van datum</option>
			</Form.Select>
			<InputGroup
				className=""
				style={{ maxWidth: '300px' }}
				onChange={handleSearch}
			>
				<Form.Control type="text" placeholder="Zoek op titel" />
				<Button>
					<SearchIcon width={14} height={14} />
					Zoeken
				</Button>
			</InputGroup>
			<Form.Check
				type="checkbox"
				id="custom-switch"
				onChange={handleShowInactive}
				className="align-content-center d-flex gap-2 fs-sm"
				label={
					<span>
						Toon{' '}
						<span style={{ textDecoration: 'underline' }}>ook</span>{' '}
						inactieve kortingscodes
					</span>
				}
			/>
			<Button onClick={handleClick} className="ms-xxl-auto">
				<PlusIcon width={14} height={14} />
				Nieuwe kortingscode
			</Button>
		</div>
	);
}
