export const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 38, light: 'Bright, indirect light', image: 'photo-1614594975525-e45190c55d0b', tag: 'Bestseller' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 54, light: 'Bright, filtered light', image: 'photo-1501004318641-b39e6451bec6', tag: 'Room favorite' },
  { id: 'rubber-tree', name: 'Ruby Rubber Tree', category: 'Statement Plants', price: 42, light: 'Medium to bright light', image: 'photo-1497250681960-ef046c08a56e', tag: 'Easy care' },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'Statement Plants', price: 68, light: 'Bright, direct light', image: 'photo-1485955900006-10f4d324d411', tag: 'A little drama' },
  { id: 'kentia-palm', name: 'Kentia Palm', category: 'Statement Plants', price: 62, light: 'Indirect light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Pet friendly' },
  { id: 'dragon-tree', name: 'Dragon Tree', category: 'Statement Plants', price: 46, light: 'Bright, indirect light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Low fuss' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy-Care Greens', price: 24, light: 'Low to bright light', image: 'photo-1593691509543-c55fb32e5cee', tag: 'Nearly unkillable' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy-Care Greens', price: 28, light: 'Low to bright light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Easy care' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy-Care Greens', price: 19, light: 'Low to bright light', image: 'photo-1497250681960-ef046c08a56e', tag: 'Trailing beauty' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Easy-Care Greens', price: 32, light: 'Low to medium light', image: 'photo-1501004318641-b39e6451bec6', tag: 'Air purifier' },
  { id: 'jade', name: 'Jade Plant', category: 'Easy-Care Greens', price: 22, light: 'Bright light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Slow grower' },
  { id: 'parlor-palm', name: 'Parlor Palm', category: 'Easy-Care Greens', price: 26, light: 'Indirect light', image: 'photo-1518531933037-91b2f5f229cc', tag: 'Pet friendly' },
  { id: 'string-hearts', name: 'String of Hearts', category: 'Trailing & Small', price: 25, light: 'Bright, indirect light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Window ledge star' },
  { id: 'pilea', name: 'Chinese Money Plant', category: 'Trailing & Small', price: 27, light: 'Bright, indirect light', image: 'photo-1485955900006-10f4d324d411', tag: 'A happy gift' },
  { id: 'peperomia', name: 'Watermelon Peperomia', category: 'Trailing & Small', price: 23, light: 'Medium, indirect light', image: 'photo-1497250681960-ef046c08a56e', tag: 'Compact cutie' },
  { id: 'string-pearls', name: 'String of Pearls', category: 'Trailing & Small', price: 29, light: 'Bright, indirect light', image: 'photo-1518531933037-91b2f5f229cc', tag: 'Trailing beauty' },
  { id: 'cactus', name: 'Desert Cactus Duo', category: 'Trailing & Small', price: 21, light: 'Bright, direct light', image: 'photo-1509423350716-97f9360b4e09', tag: 'Sun lover' },
  { id: 'mini-monstera', name: 'Mini Monstera', category: 'Trailing & Small', price: 34, light: 'Bright, indirect light', image: 'photo-1614594975525-e45190c55d0b', tag: 'Climber' },
];
export const categories = [
  { name: 'Statement Plants', note: 'Make room for a little wonder.' },
  { name: 'Easy-Care Greens', note: 'Lovely leaves, lighter routines.' },
  { name: 'Trailing & Small', note: 'Small spaces, big personality.' },
];
export const imageUrl = (id, width = 720) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
