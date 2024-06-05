import './CatalogueList.css';
import ItemCard from '../CatalogueItemCard/CatalogueListItem';

export default function CatalogueList({ Items, handleViewDetails }) {
  const items = Items.map(item =>
    <ItemCard
      key={item._id}
      Item={item}
      handleViewDetails={handleViewDetails}
    />
  );
  return (
    <main className="CategoryList">
      {items}
    </main>
  );
}