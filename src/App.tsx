import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from 'components/layout/navbar';
import Sidebar from 'components/layout/sidebar';
import { Container, Spinner } from 'react-bootstrap';

// pages
const Management = lazy(() => import('./pages/management'));
const Administratie = lazy(() => import('./pages/administratie'));
const Kalender = lazy(() => import('./pages/kalender'));
const Shop = lazy(() => import('./pages/shop'));
const Communicatie = lazy(() => import('./pages/communicatie'));
const Clubbeheer = lazy(() => import('./pages/clubbeheer'));
const Configuratie = lazy(() => import('./pages/configuratie'));
const Kortingscodes = lazy(() => import('./pages/management/kortingcodes'));
const KortingscodesNieuw = lazy(
	() => import('./pages/management/kortingcodes/nieuw')
);
const ProductGroepen = lazy(() => import('./pages/management/productgroepen'));
const Artikelen = lazy(() => import('./pages/management/artikelen'));
const Abonnementen = lazy(() => import('./pages/management/abonnementen'));
const Rittenkaarten = lazy(() => import('./pages/management/rittenkaarten'));

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Sidebar />
			<Container fluid className="content my-5 w-75">
				<Suspense fallback={<Spinner animation="border" />}>
					<Routes>
						<Route path="/management" element={<Management />}>
							<Route
								path="productgroepen"
								element={<ProductGroepen />}
							/>
							<Route
								path="abonnementen"
								element={<Abonnementen />}
							/>
							<Route
								path="rittenkaarten"
								element={<Rittenkaarten />}
							/>
							b
							<Route path="artikelen" element={<Artikelen />} />
							<Route
								path="kortingscodes"
								element={<Kortingscodes />}
							>
								<Route
									path="nieuw"
									element={<KortingscodesNieuw />}
								/>
							</Route>
						</Route>
						<Route
							path="/administratie"
							element={<Administratie />}
						/>
						<Route path="/kalender" element={<Kalender />} />
						<Route path="/shop" element={<Shop />} />
						<Route
							path="/communicatie"
							element={<Communicatie />}
						/>
						<Route path="/clubbeheer" element={<Clubbeheer />} />
						<Route
							path="/configuratie"
							element={<Configuratie />}
						/>

						{/* Redirect default to /management/kortingscodes */}
						<Route
							path="*"
							element={
								<Navigate
									to="/management/kortingscodes"
									replace
								/>
							}
						/>
					</Routes>
				</Suspense>
			</Container>
		</>
	);
};

export default App;
