import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/orders-api';
// import './ShopPage.css';
import CatalogueList from '../../components/CatalogueList/CatalogueList';
import CategoryList from '../../components/CategoryList/CategoryList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function ShopPage({ user, setUser }) {
  const [catalogueItems, setCatalogueItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const subCategoriesRef = useRef([]);
  // const [cart, setCart] = useState(null);
  // const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      subCategoriesRef.current = [...new Set(items.map(item => item.subCategory.name))];
      setCatalogueItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);

  //   // Load cart (a cart is the unpaid order for the logged in user)
  //   async function getCart() {
  //     const cart = await ordersAPI.getCart();
  //     setCart(cart);
  //   }
  //   getCart();
  // }, []);

  // /*--- Event Handlers ---*/
  // async function handleAddToOrder(itemId) {
  //   // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
  //   const updatedCart = await ordersAPI.addItemToCart(itemId);
  //   // 2. Update the cart state with the updated cart received from the server
  //   setCart(updatedCart);
  // }

  // async function handleChangeQty(itemId, newQty) {
  //   const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   setCart(updatedCart);
  // }

  // async function handleCheckout() {
  //   await ordersAPI.checkout();
  //   navigate('/orders');
  // }


  return (
    <>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <main>
      <CatalogueList
        Items={catalogueItems.filter(item => item.category.name === activeCat)}
        // handleAddToOrder={handleAddToOrder} 
        />
      </main>
      </>
  );
}