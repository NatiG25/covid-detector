import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Detail from './components/Detail';
import NavLink from './components/NavLink';

const App = () => (
  <>
    <NavLink />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </>
);

export default App;
