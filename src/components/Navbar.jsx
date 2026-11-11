import { useSelector } from 'react-redux';
import { Leaf, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { selectCartCount } from '../CartSlice.jsx';
export default function Navbar(){const count=useSelector(selectCartCount);return <header className="site-header"><Link className="brand" to="/"><span className="brand-mark"><Leaf size={21}/></span><span>paradise<span className="brand-light"> nursery</span><small>GROW A LITTLE HAPPINESS</small></span></Link><nav className="main-nav"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/#about">Our story</Link></nav><Link className="cart-link" to="/cart" aria-label={`Shopping cart, ${count} items`}><ShoppingBag size={20}/><span>Cart</span><b className="cart-count">{count}</b></Link></header>}
