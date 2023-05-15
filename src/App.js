import logo from './logo.svg';
import './App.css';
import Vivod from './VivodTovarov/Vivod';
import data from './data/goods.json';
import React, {useState} from 'react';
import Cart from './Cart/Cart';
import Itogo from './Itogo/Itogo';


function App() {

  const [cartCount, setCartCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((sum, obj) => (obj.price * cartCount) + sum, 0);

 

  
  const onAddToCart = (obj) => {
    console.log('добавлено в корзину');
    setCartItems((cartItems) => [...cartItems, obj]);
  }

  const deleteCartItem = (id_goods) => {
   // console.log('удалить'+' '+id_goods); // id - совпадает
    setCartItems((cartItems)=> cartItems.filter(item => item.id_goods != id_goods));
  }
  
 

  return (
    <>
    <div className="container">
      <h1>cart-training</h1>
       <div className="setka"> 
        {data.map((obj) => (
            <Vivod 
              id_goods={obj.id_goods} 
              name={obj.name} 
              description={obj.description} 
              price={obj.price} 
              img={obj.img} 
              key={obj.id_goods} 
              onAddToCart = {onAddToCart}
          />
        ))}
       </div>
      </div>
      
      <div className="cart-wrapper">
            <div className="container">
            <h2 className="main-title">Корзина</h2>
            <div className="cart"></div>
      {cartItems.map((obj) => (
        <Cart 
          id_goods={obj.id_goods} 
          name={obj.name} 
          description={obj.description} 
          price={obj.price} 
          img={obj.img} 
          key={obj.id_goods}
          items={cartItems}  
          deleteCartItem = {deleteCartItem}
          
           cartCount = {cartCount}
        />
      ))}
      <div>
        <Itogo 
        totalPrice = {totalPrice}  
        />
      </div>
        </div>
    
    </div>
   </>
  );
}

export default App;
