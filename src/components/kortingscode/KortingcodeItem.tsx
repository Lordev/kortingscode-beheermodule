import { TrashIcon } from '../common/svg';
import { Card, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { useDiscountListStore } from 'lib/store/useDiscountListStore';
import { FetchedData } from 'lib/types/fetchedData';

export default function KortingcodeItem({ data }: { data: FetchedData }) {
	const { removeDiscount } = useDiscountListStore();

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

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Header className="d-flex align-items-center flex-column py-5 bg-primary">
				<Card.Text className="fw-bold mb-0 fs-3 py-1 px-3 border mb-3 bg-foreground-dark text-dark">
					{data.code}
				</Card.Text>
				<div className="d-flex">
					<Badge bg="success" className="me-2">
						Actief
					</Badge>
					<Card.Text className="text-muted ">
						{data.geldigVanaf} <b>tot</b> {data.geldigTot}
					</Card.Text>
				</div>
			</Card.Header>
			<Card.Body className="bg-foreground">
				<Card.Title>{data.titel}</Card.Title>
				<Card.Text>
					€{data.geheelGetal},{data.decimaalGetal} korting op je
					volgende bestelling
				</Card.Text>
				<Button
					className="absolute"
					variant="outline-danger"
					size="sm"
					onClick={handleDelete}
				>
					<TrashIcon width={14} height={15} />
				</Button>
			</Card.Body>
		</Card>
	);
}
