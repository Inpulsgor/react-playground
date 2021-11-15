import { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from './layout';
import { ROUTES } from 'src/types/enum';
import HomePage from 'src/pages/Home';
import PlaygroundPage from 'src/pages/Playground';

const App: FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path={ROUTES.home} element={<HomePage />} />
				<Route path={ROUTES.playground} element={<PlaygroundPage />} />
			</Routes>
		</Layout>
	);
};

export default App;
