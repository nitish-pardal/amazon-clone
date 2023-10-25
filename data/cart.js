
export let cart = JSON.parse(localStorage.getItem('cart'))
|| [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId:'1'
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId : '2' 
  }
];



function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  
  const quantity = Number(document.querySelector(`.js-product-quantity-${productId}`).value);
  let matchingItem;

  console.log(quantity);

  cart.forEach((cartitem)=>{      // all the items in the cart
   if(cartitem.productId === productId){
     matchingItem = cartitem; 
   }
 });

  
  if(matchingItem){
   matchingItem.quantity += quantity;
  }else{
   cart.push({
      productId,
      quantity :quantity,
      deliveryOptionId: '1'
   });
  }

  saveToStorage();
}


export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId != productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

export function calculateCartQuantity(){
    let cartQuantity =0;
    cart.forEach((cartitem) =>{
     cartQuantity+=cartitem.quantity;
    });
 
   
    return cartQuantity;
 }
 
 function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;

  cart.forEach((cartitem)=>{      // all the items in the cart
   if(cartitem.productId === productId){
     matchingItem = cartitem; 
   }
 });
matchingItem.deliveryOptionId = deliveryOptionId;
saveToStorage();
 }