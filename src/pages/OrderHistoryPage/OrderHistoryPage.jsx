import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import { checkToken } from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <button onClick={ handleCheckToken }>Check when my login expires</button>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={activeOrder} />
    </main>
  );
}
