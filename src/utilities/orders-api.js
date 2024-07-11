import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getBag() {
  return sendRequest(`${BASE_URL}/bag`);
}

// Add an item to the bag
export function addItemToBag(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/bag/items/${itemId}`, 'POST');
}

// Update the item's qty in the bag
// Will add the item to the order if not currently in the bag
// Sending info via the data payload instead of a long URL
export function setItemQtyInBag(itemId, newQty) {
  return sendRequest(`${BASE_URL}/bag/qty`, 'PUT', { itemId, newQty });
}

// Updates the order's (bag's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/bag/checkout`, 'POST');
}

// Fetches all orders for the logged in user
export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}
