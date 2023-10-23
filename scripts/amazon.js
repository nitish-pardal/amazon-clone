 /*const products=[{
  image:'images/products/athletic-cotton-socks-6-pairs.jpg',
  name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating:{
    stars:4.5,
    count:87
  },
  priceCents:1090,
},];
*/
import { cart , addToCart ,calculateCartQuantity} from '../data/cart.js'; //get the data from the cart.js 
import { formatCurrency } from './utils/money.js';
import { products } from '../data/products.js'; // to get the data from the products.js
let cartQuantity=calculateCartQuantity();
document.querySelector('.js-cart-quantity').innerHTML =cartQuantity;

let productsHTML="";
products.forEach((product) =>{
  
  productsHTML +=
  `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
   ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars *10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${formatCurrency(product.priceCents )}
  </div>

  <div class="product-quantity-container js-product-quantity-container">
    <select class="js-product-quantity-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
    Add to Cart
  </button>
</div>`;
});

document.querySelector('.js-products-grid').innerHTML=productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{ //selects each button
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    

   
  addToCart(productId);
  cartQuantity = calculateCartQuantity();
  
  document.querySelector('.js-cart-quantity').innerHTML =cartQuantity;
  
  });
 });
  