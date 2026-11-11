import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight, Check, Leaf, Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addToCart, selectCartItems } from './CartSlice.jsx';

// Keep the full catalog here so each assignment category and product is visible in ProductList.jsx.
export const plantsArray = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Statement Plants', price: 38, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'Bestseller' },
  { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', category: 'Statement Plants', price: 54, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=720&q=85', light: 'Bright, filtered light', tag: 'Room favorite' },
  { id: 'rubber-tree', name: 'Ruby Rubber Tree', category: 'Statement Plants', price: 42, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=720&q=85', light: 'Medium to bright light', tag: 'Easy care' },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'Statement Plants', price: 68, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=720&q=85', light: 'Bright, direct light', tag: 'A little drama' },
  { id: 'kentia-palm', name: 'Kentia Palm', category: 'Statement Plants', price: 62, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85', light: 'Indirect light', tag: 'Pet friendly' },
  { id: 'dragon-tree', name: 'Dragon Tree', category: 'Statement Plants', price: 46, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'Low fuss' },
  { id: 'snake', name: 'Snake Plant', category: 'Easy-Care Greens', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=720&q=85', light: 'Low to bright light', tag: 'Nearly unkillable' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy-Care Greens', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85', light: 'Low to bright light', tag: 'Easy care' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Easy-Care Greens', price: 19, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=720&q=85', light: 'Low to bright light', tag: 'Trailing beauty' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Easy-Care Greens', price: 32, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=720&q=85', light: 'Low to medium light', tag: 'Air purifier' },
  { id: 'jade', name: 'Jade Plant', category: 'Easy-Care Greens', price: 22, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85', light: 'Bright light', tag: 'Slow grower' },
  { id: 'parlor-palm', name: 'Parlor Palm', category: 'Easy-Care Greens', price: 26, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=720&q=85', light: 'Indirect light', tag: 'Pet friendly' },
  { id: 'string-hearts', name: 'String of Hearts', category: 'Trailing & Small', price: 25, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'Window ledge star' },
  { id: 'pilea', name: 'Chinese Money Plant', category: 'Trailing & Small', price: 27, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'A happy gift' },
  { id: 'peperomia', name: 'Watermelon Peperomia', category: 'Trailing & Small', price: 23, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=720&q=85', light: 'Medium, indirect light', tag: 'Compact cutie' },
  { id: 'string-pearls', name: 'String of Pearls', category: 'Trailing & Small', price: 29, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'Trailing beauty' },
  { id: 'cactus', name: 'Desert Cactus Duo', category: 'Trailing & Small', price: 21, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=720&q=85', light: 'Bright, direct light', tag: 'Sun lover' },
  { id: 'mini-monstera', name: 'Mini Monstera', category: 'Trailing & Small', price: 34, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=720&q=85', light: 'Bright, indirect light', tag: 'Climber' },
];

export const categories = [
  { name: 'Statement Plants', note: 'Make room for a little wonder.' },
  { name: 'Easy-Care Greens', note: 'Lovely leaves, lighter routines.' },
  { name: 'Trailing & Small', note: 'Small spaces, big personality.' },
];

export function Navbar() {
  const cartItems = useSelector(selectCartItems);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar site-header" aria-label="Main navigation">
      <Link className="brand" to="/"><span className="brand-mark"><Leaf size={21} /></span><span>Paradise<span className="brand-light"> Nursery</span><small>GROW A LITTLE HAPPINESS</small></span></Link>
      <div className="main-nav"><Link to="/">Home</Link><Link to="/plants">Plants</Link></div>
      <Link className="cart-link" to="/cart" aria-label={`Shopping cart, ${cartQuantity} items`}><ShoppingCart size={20} /><span>Cart</span><span className="cart-count" aria-live="polite">{cartQuantity}</span></Link>
    </nav>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [addedToCart, setAddedToCart] = useState({});
  const [activeCategory, setActiveCategory] = useState('All plants');
  const cartQuantity = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);
  const visibleCategories = categories.filter((category) => activeCategory === 'All plants' || category.name === activeCategory);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedToCart((current) => ({ ...current, [plant.name]: true }));
  };

  return (
    <>
      <Navbar />
      <main className="listing-page" id="collection">
        <div className="listing-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> THE HOUSEPLANT COLLECTION</div>
          <h1>Find your <em>kind of green.</em></h1>
          <p>Every plant is hand-picked, happy, and ready to make itself at home.</p>
          <div className="listing-meta">{plantsArray.length} lovely plants <span>·</span> {cartQuantity} in your cart</div>
        </div>
        <div className="filter-row">
          <div className="filter-chips">{['All plants', ...categories.map((category) => category.name)].map((category) => <button type="button" key={category} onClick={() => setActiveCategory(category)} className={`filter-chip ${activeCategory === category ? 'selected' : ''}`}>{category}</button>)}</div>
          <span className="results-label">Showing {plantsArray.filter((plant) => activeCategory === 'All plants' || plant.category === activeCategory).length} plants</span>
        </div>
        {visibleCategories.map((category) => (
          <section className="listing-category" key={category.name}>
            <div className="category-heading"><div><h2>{category.name}</h2><p>{category.note}</p></div></div>
            <div className="product-grid">
              {plantsArray.filter((plant) => plant.category === category.name).map((plant) => {
                const alreadyInCart = cartItems.some((item) => item.id === plant.id);
                const isAdded = Boolean(addedToCart[plant.name] || alreadyInCart);
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-wrap"><img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" /><span className="plant-tag">{plant.tag}</span></div>
                    <div className="plant-details"><div><h3>{plant.name}</h3><p>{plant.light}</p></div><strong>${plant.price}</strong></div>
                    <button type="button" className={`card-cta ${isAdded ? 'added-text' : ''}`} disabled={addedToCart[plant.name] || alreadyInCart} onClick={() => handleAddToCart(plant)}>{isAdded ? <><Check size={15} /> Added to Cart</> : <>Add to Cart <Plus size={15} /></>}</button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
