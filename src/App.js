import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Missions from './pages/MissionsPage';
import MyProfile from './pages/MyProfilePage';
import Rockets from './pages/RocketsPage';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
