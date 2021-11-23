import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'src/types/enum';
import HomePage from 'src/pages/Home';
import LoginPage from 'src/pages/Login';
import { useAppSelector } from './hooks/useAppDispatch';

const App: FC = () => {
  const state = useAppSelector(state => state);
  console.log(`state`, state);

  return (
    <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.home} element={<HomePage />} />
    </Routes>
  );
};

export default App;
