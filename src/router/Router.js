import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from '../pages/PokemonList';
import PokemonDetails from '../pages/PokemonDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
