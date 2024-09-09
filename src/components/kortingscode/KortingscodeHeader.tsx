import KortingscodeFilter from './KortingscodeFilter';
import { Container, Row } from 'react-bootstrap';

export default function KortingscodeHeader() {
	return (
		<div className="bg-foreground pt-5 px-4 px-md-5 pb-4">
			<h4 className="mb-4 ">Kortingscodes overzicht</h4>
			<Container>
				<Row lg={2}>
					<p className="no-gutter-row">
						<small className="text-muted">
							In deze module kun je kortingscodes maken en zelf
							kiezen waar (potentiële) leden ze voor kunnen
							gebruiken. Bijvoorbeeld een kortingscode voor nieuwe
							leden die hun proefleskosten kunnen terugverdienen.
						</small>
					</p>
				</Row>
			</Container>
			<hr className="my-4" />
			<KortingscodeFilter />
		</div>
	);
}
