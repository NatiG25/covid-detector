import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCases } from './redux/detail';
import { fetchCountries } from './redux/Countries/countries';
import Homepage from './components/Homepage';
import Detail from './components/Detail';
import NavLink from './components/NavLink';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCases());
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
