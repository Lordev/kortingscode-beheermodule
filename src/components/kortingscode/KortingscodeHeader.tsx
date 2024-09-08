import KortingscodeFilter from './KortingscodeFilter';

export default function KortingscodeHeader() {
	return (
		<div className="bg-foreground pt-5 px-5 pb-4">
			<h4 className="mb-4 ">Kortingscodes overzicht</h4>
			<p className="w-50">
				<small className="text-muted">
					In deze module kun je kortingscodes maken en zelf kiezen
					waar (potentiële) leden ze voor kunnen gebruiken.
					Bijvoorbeeld een kortingscode voor nieuwe leden die hun
					proefleskosten kunnen terugverdienen.
				</small>
			</p>
			<hr className="my-4" />
			<KortingscodeFilter />
		</div>
	);
}
