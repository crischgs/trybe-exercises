import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees" element={ <CoffeeList /> } />
      </Routes>
    </div>
  );
}

export default App;
