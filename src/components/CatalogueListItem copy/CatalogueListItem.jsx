import './CatalogueListItem.css';

export default function CatalogueListItem({ catalogueItem, handleViewDetails }) {
  return (
    <div className="CatalogueListItem">
      <div className="emoji flex-ctr-ctr">{catalogueItem.emoji}</div>
      <div className="name">{catalogueItem.name}</div>
      <div className="buy">
        <span>${catalogueItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleViewDetails(catalogueItem._id)}>
          View Details
        </button>
      </div>
    </div>
  );
}

