import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import CatalogueList from '../../components/CatalogueList/CatalogueList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [catalogueItems, setCatalogueItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [bag, setBag] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setCatalogueItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    // Load shopping bag/cart (Shopping Cart is the unpaid order for the logged in user)
    async function getBag() {
      const bag = await ordersAPI.getBag();
      setBag(bag);
    }
    getBag();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named bag.
    const updatedBag = await ordersAPI.addItemToBag(itemId);
    // 2. Update the bag state with the updated bag received from the server
    setBag(updatedBag);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedBag = await ordersAPI.setItemQtyInBag(itemId, newQty);
    setBag(updatedBag);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }


  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <CatalogueList
        catalogueItems={catalogueItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={bag}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}