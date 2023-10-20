export const cart = [];


export function addToCart(productId){

  let matchingItem;

  cart.forEach((cartitem)=>{ // all the items in the cart
   if(cartitem.productId === productId){
     matchingItem = cartitem; 
   }
 });
  
  if(matchingItem){
   matchingItem.quantity +=1;
  }else{
   cart.push({
     productId : productId,
     quantity:1
   });
  }
}
