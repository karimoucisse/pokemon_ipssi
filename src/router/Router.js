import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from '../pages/PokemonList';
import PokemonDetails from '../pages/PokemonDetails';
import Weathers from '../pages/Weathers';
import Page404 from './Page404';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/weathers" element={<Weathers />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
