import { useState } from 'react';
import { useSelector } from 'react-redux';
import { plants, categories } from './data/plants.js';
import PlantCard from './components/PlantCard.jsx';
import { selectCartCount } from './CartSlice.jsx';
export default function ProductList() {
  const [active, setActive] = useState('All plants');
  const count = useSelector(selectCartCount);
  const shown = active === 'All plants' ? plants : plants.filter((plant) => plant.category === active);
  return <main className="listing-page" id="collection"><div className="listing-intro"><div className="eyebrow"><span className="eyebrow-line" /> THE HOUSEPLANT COLLECTION</div><h1>Find your <em>kind of green.</em></h1><p>Every plant is hand-picked, happy, and ready to make itself at home.</p><div className="listing-meta">{shown.length} lovely plants <span>·</span> {count} in your cart</div></div><div className="filter-row"><div className="filter-chips">{['All plants', ...categories.map((c) => c.name)].map((category) => <button key={category} onClick={() => setActive(category)} className={`filter-chip ${active === category ? 'selected' : ''}`}>{category}</button>)}</div><span className="results-label">Showing {shown.length} plants</span></div>{categories.filter((c) => active === 'All plants' || active === c.name).map((category) => <section className="listing-category" key={category.name}><div className="category-heading"><div><h2>{category.name}</h2><p>{category.note}</p></div></div><div className="product-grid">{shown.filter((plant) => plant.category === category.name).map((plant) => <PlantCard plant={plant} key={plant.id} />)}</div></section>)}</main>;
}
