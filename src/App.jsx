import { Routes, Route } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import PlantCard from './components/PlantCard.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import { plants, categories } from './data/plants.js';
import { selectCartCount } from './CartSlice.jsx';

function LandingPage() {
  const count = useSelector(selectCartCount);
  return <>
    <section className="hero"><div className="hero-content"><div className="hero-brand">Paradise Nursery</div><div className="eyebrow"><span className="eyebrow-line"/> A GREENER KIND OF EVERYDAY</div><h1>Bring home a<br/><em>little paradise.</em></h1><p>Thoughtfully grown houseplants to make your space feel more like you. Pick your new favorite and let the good things grow.</p><Link className="button button-dark" to="/plants">Get Started <ArrowRight size={17}/></Link><div className="hero-note"><span className="avatar-stack"><i>✿</i><i>❋</i><i>❀</i></span><span>Loved by plant people<br/><b>in 12,000+ happy homes</b></span></div></div><div className="hero-image"><div className="hero-image-label"><span>01 / 03</span><i/> A little more green, every day</div></div><div className="hero-side-note">ROOTED IN GOOD THINGS <span>✳</span> EST. WITH LOVE</div></section>
    <section className="promise-strip"><div><Leaf/><span><b>Grown with care</b><small>Happy, healthy plants</small></span></div><div><Truck/><span><b>Safe at your door</b><small>Carefully packed & shipped</small></span></div><div><Sparkles/><span><b>Here to help</b><small>Plant support for life</small></span></div></section>
    <section className="collection-section" id="collection"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> FIND YOUR GREEN</div><h2>A plant for <em>every place.</em></h2></div><Link className="text-link" to="/plants">Shop all plants <ArrowRight size={16}/></Link></div>{categories.map(category=><div className="category-block" key={category.name}><div className="category-heading"><div><h3>{category.name}</h3><p>{category.note}</p></div><Link to="/plants" className="category-link">Explore <ArrowRight size={15}/></Link></div><div className="product-grid">{plants.filter(plant=>plant.category===category.name).slice(0,3).map(plant=><PlantCard plant={plant} key={plant.id}/>)}</div></div>)}</section>
    <AboutUs/><section className="home-bottom"><div><span className="eyebrow">YOUR NEXT FAVORITE IS HERE</span><h2>Good things grow<br/>from <em>little beginnings.</em></h2><Link className="button button-dark" to="/plants">Find your plant <ArrowRight size={17}/></Link></div><div className="bottom-stats"><div><b>18</b><span>thoughtful<br/>plant picks</span></div><div><b>100%</b><span>green-thumb<br/>friendly</span></div></div></section>
  </>;
}
function Footer(){return <footer className="site-footer"><Link className="brand footer-brand" to="/"><span className="brand-mark"><Leaf size={19}/></span><span>paradise<span className="brand-light"> nursery</span><small>GROW A LITTLE HAPPINESS</small></span></Link><p>Rooted in good things. © 2026 Paradise Nursery.</p><Link to="/#about">A little about us</Link></footer>}
export default function App(){return <div className="app-shell"><Navbar/><Routes><Route path="/" element={<LandingPage/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="*" element={<LandingPage/>}/></Routes><Footer/></div>}
