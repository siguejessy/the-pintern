import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
      { user ?
      <>
      <NavBar user={ user } setUser={ setUser } />
      <Routes>
          <Route path="/*" element={<Navigate to="/login" />} />
          {/* <Route path="/" element={<ShopPage />} /> */}
          <Route path="/shop" element={<ShopPage setUser={ setUser } />} />
          <Route path="/about" element={<AboutPage setUser={ setUser } />} />
          <Route path="/contact" element={<ContactPage setUser={ setUser } />} />
          <Route path="/catalogue" element={<CataloguePage setUser={ setUser } />} />
          <Route path="/catalogue/:id" element={<ItemDetailPage setUser={ setUser } />} />
          <Route path="/login" element={<AuthPage setUser={ setUser } />} />
          {/* <Route path="/signup" element={<AuthPage setUser={ setUser } />} /> */}
          </Routes>
          </>
          :
          <AuthPage setUser={ setUser } />
          }
          </main>
  );
}

