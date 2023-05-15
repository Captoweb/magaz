import { useParams } from "react-router-dom";
import data from '../data/goods.json';
import { useRouteMatch } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom'; 
import { Link } from "react-router-dom";

import './Catalog.css';


function CatalogId(){
   let url = useLocation();
  // console.log(data); // передает json
 
   let {tovarList} = useParams();
  // console.log(`${url.pathname}`); // /catalog/rolici

   let queryString = {tovarList};

   return(
        <div>
            <h2><Link to="/">&lArr; Каталог</Link></h2>
            <h2>{tovarList}</h2>
              <div className="setka"> 
                
                {data.filter( item => item.id_cat == tovarList).map (item => 
                <div className="card" key={item.id_goods}>
                    <a href="#">
                        <div className="box-img">
                          <img className="img" src ={item.img} alt="item" />
                        </div>
                        <div className="card_description">
                            <h3 className="card__title">{item.name}</h3>
                            <p className="cart__text">{item.description}</p>
                        </div>
                        <div className="flex-wrapper">
                            <div className="price">{item.price} руб</div>
                            {/* <button className="btn">В корзину</button> */}
                        </div>
                        
                    </a>
                </div> )}
                
            </div>    
            <h2><Link to="/"> &lArr; Каталог</Link></h2>   
        </div>
   );
   
}

export default CatalogId;