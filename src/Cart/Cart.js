import './Cart.css';
// import data from '../data/goods.json';
import React, {useState} from 'react';


function Cart({ items=[], id_goods, name, price, img, description, deleteCartItem, totalPrice, totalPriceFunc }) {

    const [cartCount, setCartCount] = useState(1);
    
        
    const onPlusCount = (id_goods) => {
        //console.log('onPlusCount'+' id: '+id_goods);  // id - совпадает
        let temp = cartCount;
        temp++;
        setCartCount(temp); 
        // здесь надо как-то вызывать пересчет totalPric
    }

    const onMinusCount = (id_goods) => {
        let temp = cartCount;
        temp--;
        setCartCount(temp);
        if (cartCount - 1 == 0) {
            deleteCartItem(id_goods);
        }
    }



    return(
        <>
          
            <div className="cart__item" key={id_goods}>
                {function hello(){console.log('hello')}}
                <span>id: {id_goods}</span>
                <div className="cart__item-img">
                    <img src={img} alt="" />
                </div>
                <div className="cart__item-wrapper">
                    <div className="cart__item-title">
                        <p>{name}</p>
                    </div>
                    <div className="item-count-wrapper">
                        <div className="cart__item-count">
                            <span>
                                <img onClick={()=>onMinusCount(id_goods)} src="images/minus2.svg" />
                            </span>{cartCount}<span>
                                <img onClick={()=>onPlusCount(id_goods)} src="images/plus2.svg" />     
                            </span>
                        </div>
                        <div className="cart__item-price">
                            {price * cartCount} руб
                        </div>
                    </div>
                </div>
                <div className="cart__item-delete">
                    <img onClick={()=> deleteCartItem(id_goods)} src="images/close.svg" />
                </div>
            </div>
           
        
            
        </>     
    );
}

export default Cart;