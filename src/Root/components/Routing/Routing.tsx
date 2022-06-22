import { Route, Routes } from 'react-router-dom';
import { routes } from '../../../routes';
import { Home } from '../../../core/components/Home/Home';

export const Routing = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Home />} />
    </Routes>
  );
};
