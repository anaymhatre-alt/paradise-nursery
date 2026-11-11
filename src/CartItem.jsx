import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './ProductList.jsx';
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems } from './CartSlice.jsx';
import { imageUrl } from './data/plants.js';

export function calculateTotalAmount(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export default function CartItem() {
  const items = useSelector(selectCartItems);
  const totalAmount = calculateTotalAmount(items);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (itemId) => {
    const item = items.find((cartItem) => cartItem.id === itemId);
    if (!item) return;
    const nextQuantity = item.quantity - 1;
    if (nextQuantity <= 0) dispatch(removeFromCart(itemId));
    else dispatch(decreaseQuantity(itemId));
  };

  return <>
    <Navbar />
    <main className="cart-page"><div className="eyebrow"><span className="eyebrow-line" /> YOUR LITTLE GREEN GANG</div><h1>Your <em>shopping cart.</em></h1>
      {items.length === 0 ? <div className="empty-cart"><div className="empty-icon"><ShoppingBag size={29} /></div><h2>Your cart is taking a little breather.</h2><p>There are plenty of leafy friends waiting to come home with you.</p><Link className="button button-dark" to="/plants">Continue shopping <ArrowRight size={17} /></Link></div> :
        <div className="cart-layout"><section className="cart-items"><div className="cart-items-head"><span>YOUR PLANTS ({items.reduce((sum, item) => sum + item.quantity, 0)})</span></div>
          {items.map((item) => <article className="cart-item" key={item.id}><img src={imageUrl(item.image, 360)} alt={item.name} /><div className="cart-item-info"><span className="cart-item-category">{item.category}</span><h3>{item.name}</h3><p>{item.light}</p><button type="button" className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div><div className="cart-item-controls"><strong>${item.price.toFixed(2)}</strong><div className="quantity-control"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => handleDecreaseQuantity(item.id)}><Minus size={14} /></button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button></div><span className="line-total">${(item.price * item.quantity).toFixed(2)}</span></div></article>)}
        </section><aside className="order-summary"><div className="summary-eyebrow">A LITTLE SUMMARY</div><h2>Almost yours.</h2><div className="summary-line"><span>Plants subtotal</span><span>${totalAmount.toFixed(2)}</span></div><div className="summary-line"><span>Delivery</span><span className="free-label">On us</span></div><div className="summary-divider" /><div className="summary-line summary-total"><span>Total</span><strong>${totalAmount.toFixed(2)}</strong></div><p className="tax-note">Taxes calculated at checkout.</p><button type="button" className="button button-dark checkout-button" onClick={() => window.alert('Checkout is coming soon. Your lovely plants are saved in your cart!')}>Checkout <ArrowRight size={17} /></button><Link className="button button-outline continue-shopping" to="/plants">Continue shopping <ArrowLeft size={16} /></Link><div className="secure-note">Packed with care, always.</div></aside></div>}
    </main>
  </>;
}
