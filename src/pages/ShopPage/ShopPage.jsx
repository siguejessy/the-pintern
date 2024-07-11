import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import CatalogueList from '../../components/CatalogueList/CatalogueList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import CatalogueListItem from '../../components/CatalogueListItem/CatalogueListItem';


export default function ShopPage({ user, setUser }) {
  const [catalogueItems, setCatalogueItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [bag, setBag] = useState(null);
  const categoriesRef = useRef([]);
  const subCategoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      subCategoriesRef.current = [...new Set(items.map(item => item.subCategory.name))];
      setCatalogueItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

  //   // Load bag (a bag is the unpaid order for the logged in user)
    async function getBag() {
      const bag = await ordersAPI.getBag();
      setBag(bag);
    }
    getBag();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToBag function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedBag = await ordersAPI.addItemToBag(itemId);
    // 2. Update the cart state with the updated cart received from the server
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
    <main>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <CatalogueList
        catalogueItems={catalogueItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
        />
    </main>
  );
  }