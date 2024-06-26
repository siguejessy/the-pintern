import { getAll } from '../../utilities/items-api';
import { useEffect, useState } from 'react';


export default function ItemCard({ item }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchItems = async () => {
    try {
      const fetchedItems = await getAll();
      setItems(fetchedItems);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
      setLoading(false);
    }
  };

  fetchItems();
}, []);


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Items</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
              <div className="first">
                <img
                  src={item.photo_cover}
                  alt={item.photo_alt}
                  className="group-hover:hidden h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </div>
                <div className="second hidden group-hover:block">
                <img
                  src={item.photo_1}
                  alt={item.photo_alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                </div>
              <div className="mt-0 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={item.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.color_variants}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}