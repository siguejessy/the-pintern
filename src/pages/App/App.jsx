import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import NavBar from '../../components/NavBar/NavBar';
import CataloguePage from '../CataloguePage/CataloguePage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
    <header className="App-header">
      <NavBar user={ user } setUser={ setUser } />
      <>
      <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/catalogue/:id" element={<ItemDetailPage />} />
          <Route path="/login" element={<AuthPage setUser={ setUser } />} />
          <Route path="/signup" element={<AuthPage setUser={ setUser } />} />

          
      </Routes>
      </>
      </header>
    </main>
  );
}

