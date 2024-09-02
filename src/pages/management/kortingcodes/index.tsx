import KortingscodeFilter from '../../../components/kortingscode/KortingscodeFilter';

export default function Kortingscodes() {
	return (
		<div className="bg-muted pt-5 px-5 pb-2">
			<h5 className="mb-4 fw-bold">Kortingscodes overzicht</h5>
			<p className="fs-6 w-50">
				In deze module kun je kortingscodes maken en zelf kiezen waar
				(potentiële) leden ze voor kunnen gebruiken. Bijvoorbeeld een
				kortingscode voor nieuwe leden die hun proefleskosten kunnen
				terugverdienen.
			</p>
			<hr className="my-4" />
			<KortingscodeFilter />
		</div>
	);
}
