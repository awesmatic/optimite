
import './App.css';
import Home from './pages/Home';
import Item from './pages/Item';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Item />} />
      </Routes>

    </div>
  );
}

export default App;
