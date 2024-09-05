import { TrashIcon } from '../common/svg';
import { Card, Button, Badge } from 'react-bootstrap';
import { FormData } from 'lib/types/formSchema';

const kortingcodeItemData: FormData = {
	code: 'VRAAGROY',
	geheelGetal: '10',
	decimaalGetal: '00',
	geldigVanaf: '2021-01-01',
	geldigTot: '2021-12-31',
	maximumGebruik: false,
	aantalKeer: '',
	kortingType: 'Bedrag',
	kortingsPercentage: '',
	titel: 'Roy trakteert',
	omschrijving: 'Korting van Roy',
};

export default function KortingcodeItem() {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Header className="d-flex align-items-center flex-column py-5 bg-primary">
				<Card.Text className="fw-bold mb-0 fs-3 py-1 px-3 border mb-3 bg-foreground-dark text-dark">
					{kortingcodeItemData.code.toUpperCase()}
				</Card.Text>
				<div className="d-flex">
					<Badge bg="success" className="me-2">
						Actief
					</Badge>
					<Card.Text className="text-muted ">
						<b>tot</b> {kortingcodeItemData.geldigTot}
					</Card.Text>
				</div>
			</Card.Header>
			<Card.Body className="bg-foreground">
				<Card.Title>Roy trakteert</Card.Title>
				<Card.Text>
					€{kortingcodeItemData.geheelGetal},
					{kortingcodeItemData.decimaalGetal} korting op je volgende
					bestelling
				</Card.Text>
				<Button className="absolute" variant="outline-danger" size="sm">
					<TrashIcon width={14} height={15} />
				</Button>
			</Card.Body>
		</Card>
	);
}
