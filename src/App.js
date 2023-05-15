import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Rockets />} /> */}
          {/* <Route path="/dragons" element={<Dragons />} /> */}
          <Route path="/missions" element={<Missions />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Missions />
    // </div>
  );
}

export default App;
