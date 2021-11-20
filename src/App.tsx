import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'src/types/enum';
import HomePage from 'src/pages/Home';
import LoginPage from 'src/pages/Login';

const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.home} element={<HomePage />} />
    </Routes>
  );
};

export default App;
