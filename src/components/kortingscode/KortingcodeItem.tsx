import { TrashIcon } from '../common/svg';
import { Card, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { useDiscountListStore } from 'lib/store/useDiscountListStore';
import { FetchedDataWithState } from 'lib/types/fetchedData';
import { useState, useEffect } from 'react';

export default function KortingcodeItem({
	data,
}: {
	data: FetchedDataWithState;
}) {
	const { removeDiscount } = useDiscountListStore();
	console.log(data);

	const handleDelete = async () => {
		try {
			removeDiscount(data);
			await axios.delete(
				`https://66d8747f37b1cadd8054b943.mockapi.io/api/DiscountItem/${data.ObjectID}`
			);
		} catch (error) {
			console.error('Error deleting item:', error);
		}
	};

	const {
		isActive,
		FutureActive,
		isExpired,
		code,
		kortingType,
		titel,
		geheelGetal,
		kortingsPercentage,
		geldigVanaf,
		geldigTot,
		decimaalGetal,
	} = data;

	const geldigVanafLocal = geldigVanaf
		? new Date(geldigVanaf).toLocaleDateString()
		: '';

	const geldigTotLocal = geldigTot
		? new Date(geldigTot).toLocaleDateString()
		: '';

	return (
		<Card style={{ width: '295px' }}>
			<Card.Header className="d-flex align-items-center flex-column py-5 bg-primary">
				<Card.Text className="fw-bold mb-0 fs-3 py-1 px-3 border-border-dark border-dashed mb-3 bg-foreground-dark text-dark card-code-font">
					{code}
				</Card.Text>
				<small className="d-flex align-items-center justify-content-center gap-2">
					{isActive && (
						<>
							<Badge bg="success" className="text-uppercase">
								Actief
							</Badge>
							{geldigTotLocal && geldigVanafLocal}
							{geldigTotLocal && <b>tot</b>}
							{geldigTotLocal}
							{!geldigTotLocal && <b>Onbeperkt</b>}
						</>
					)}
					{FutureActive && (
						<>
							{!geldigTotLocal && <b>Vanaf</b>}
							{geldigVanafLocal}
							{geldigTotLocal && <b>tot</b>}
							{geldigTotLocal}
						</>
					)}
					{isExpired && (
						<Badge bg="danger" className="text-uppercase">
							Verlopen
						</Badge>
					)}
				</small>
			</Card.Header>
			<Card.Body
				className="bg-foreground d-flex justify-content-between align-items-center 
			"
			>
				<div>
					<Card.Title className="custom-card-title">
						{titel}
					</Card.Title>
					<Card.Text className="fs-xs text-muted">
						{kortingType === 'Bedrag'
							? `€${geheelGetal},${decimaalGetal} korting`
							: kortingType === 'Percentage'
							? `${kortingsPercentage}% korting`
							: 'Onbekend'}
					</Card.Text>
				</div>
				<TrashIcon
					width={14}
					height={15}
					className="hover-text-secondary cursor-pointer"
					onClick={handleDelete}
				/>
			</Card.Body>
		</Card>
	);
}
