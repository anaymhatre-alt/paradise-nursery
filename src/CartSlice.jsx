import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({name:'cart',initialState:{items:[]},reducers:{
 addToCart(state,action){const found=state.items.find(item=>item.id===action.payload.id);if(found)found.quantity+=1;else state.items.push({...action.payload,quantity:1});},
 increaseQuantity(state,action){const item=state.items.find(entry=>entry.id===action.payload);if(item)item.quantity+=1;},
 decreaseQuantity(state,action){const item=state.items.find(entry=>entry.id===action.payload);if(!item)return;if(item.quantity<=1)state.items=state.items.filter(entry=>entry.id!==action.payload);else item.quantity-=1;},
 removeFromCart(state,action){state.items=state.items.filter(item=>item.id!==action.payload);},clearCart(state){state.items=[];}
}});
export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart,clearCart}=cartSlice.actions;
export const selectCartItems=state=>state.cart.items;
export const selectCartCount=state=>state.cart.items.reduce((sum,item)=>sum+item.quantity,0);
export const selectCartTotal=state=>state.cart.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
export default cartSlice.reducer;
