import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../utilities/items-api';
import { getUser } from '../../utilities/users-service';
// import GoBackButton from '../../components/GoBackBtn/GoBackBtn';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const fetchedItem = await getById(id);
        setItem(fetchedItem);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };

    fetchItem();
    fetchUser();
  }, [id]);


  return (
    <div>
      {/* <GoBackButton /> */}
        <div>
          {item.image && <img src={item.image} alt={item.name} />}
          <h2>{item.name}</h2>
          <p>Emoji: {item.emoji}</p>
          <p>Category: {item.category}</p>
          <p>Subcategory: {item.subCategory}</p>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
        </div>

    </div>
  );
};

export default ItemDetailPage;