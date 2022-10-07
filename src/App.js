import { Routes, Route } from 'react-router-dom';
import { Checkout, Header, HomePage } from "./Components"
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/checkout' element={
        <div className="App">
          <Header />
          <Checkout />
        </div>
        }
      />
      <Route path='/' element={
        <div className="App">
          <Header />
          <HomePage />
        </div>
        }
      />
    </Routes>
  );
}

export default App;
