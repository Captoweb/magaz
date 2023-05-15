import './Vivod.css';
//import data from '../data/goods.json';

import React, {useState} from 'react';


function Vivod({id_goods, name, price, img, description, onAddToCart}) {

   const [count, setCount] = useState(0);
 
   const onPlus = () => {
     let temp = count;
     temp++;
     setCount(temp);
     onAddToCart({id_goods, name, price, img}); 
   }
 
   return(
        <div>        
            <div className="card" key={id_goods}>
               
                    <span>id: {id_goods}</span>
                    <div className="box-img">
                        <img className="img" src = {img} alt="item" />
                    </div>
                    <div className="card_description">
                        <h3 className="card__title">{name}</h3>
                        <p className="cart__text">{description}</p>
                    </div>
                    <div className="flex-wrapper">
                        <div className="price">{price} руб</div>
                        {count > 0  ? <button>В корзине</button>: <button onClick={onPlus}>Добавить в корзину</button>}
                        
                        <div className="price">{count}</div>
                    </div>
                    
            </div> 
            
        </div>
   );
   
}

export default Vivod;