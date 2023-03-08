import CharacterList from 'pages/CharacterList';
import CharacterDetails from 'pages/CharacterDetails';
import DefaultPage from 'components/DefaultPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} >
          <Route index element={<CharacterList />} />
          <Route path="/details/:characterId" element={<CharacterDetails />} />
        </Route>

      </Routes>
    </Router>
  );
}
