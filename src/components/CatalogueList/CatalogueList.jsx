import './CatalogueList.css';
import CatalogueListItem from '../CatalogueListItem/CatalogueListItem';

export default function CatalogueList({ catalogueItems, handleAddToOrder }) {
  const items = catalogueItems.map(item =>
    <CatalogueListItem
      key={item._id}
      catalogueItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="CatalogueList">
      {items}
    </main>
  );
}

