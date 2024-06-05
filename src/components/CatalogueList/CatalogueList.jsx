import './CatalogueList.css';
import CatalogueListItem from '../CatalogueListItem/CatalogueListItem';

export default function CatalogueList({ Items, handleViewDetails }) {
  const items = Items.map(item =>
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