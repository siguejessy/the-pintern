import './CatalogueList.css';
import CatalogueListItem from '../CatalogueItemCard/CatalogueListItem';

export default function CatalogueList({ catalogueItems, handleViewDetails }) {
  const items = catalogueItems.map(item =>
    <CatalogueListItem
      key={item._id}
      catalogueItem={item}
      handleViewDetails={handleViewDetails}
    />
  );
  return (
    <main className="CategoryList">
      {items}
    </main>
  );
}