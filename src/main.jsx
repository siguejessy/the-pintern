import Root from "./routes/root";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import reportWebVitals from './reportWebVitals';
import ItemDetailPage from './pages/ItemDetailPage/ItemDetailPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ShopPage from './pages/ShopPage/ShopPage';

const router = createBrowserRouter
  createRoutesFromElements(
    <Route
    path="/"
    element={<Root />}
    errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          path="shop"
          element={<ShopPage />}
          setUser={ setUser } 
          loader={shopLoader}
          action={shopAction}
        />
        <Route
          path="about"
          element={<AboutPage setUser={ setUser } />}
          loader={aboutLoader}
          action={aboutAction}
        />
        <Route
          path="orders"
          element={<OrderHistoryPage setUser={ setUser } />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="orders/new"
          element={<NewOrderPage setUser={ setUser } />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="orders"
          element={<OrderHistoryPage setUser={ setUser } />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="shop/:id"
          element={<ItemDetailPage setUser={ setUser } />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="login"
          element={<AuthPage />}
          setUser={ setUser }
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="register"
          element={<AuthPage />}
          setUser={ setUser }
          loader={contactLoader}
          action={editAction}
        />
        {/* <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
          /> */}
      </Route>
    </Route>
  )
);
<RouterProvider router={router} />


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
