
import './App.css';
import Home from './pages/Home';
import Item from './pages/Item';
import Page404 from './pages/Page404';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </div>
  );
}

export default App;
