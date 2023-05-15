import './Catalog.css';
import { useLocation } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';


function Catalog() {
   
    return(
        <div className="catalog">
            <h1>Каталог</h1>
            <div className='catalog__setka'>
                <div className="catalog__card"><NavLink to={`/rolici`}><h3 className="catalog__title">Ролики для душевых кабин</h3>
                <div><img className="catalog__card-img" src="images/roliki.jpg" alt="ролики" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/clamp`}><h3 className="catalog__title">Хомуты ремонтные</h3>
                <div><img className="catalog__card-img" src="images/clamp2.png" alt="хомуты" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/fum`}><h3 className="catalog__title">Фум лента</h3>
                <div><img className="catalog__card-img" src="images/fum.png" alt="фум" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/smazka`}><h3 className="catalog__title">Смазки герметики</h3>
                <div><img className="catalog__card-img" src="images/germetik.jpg" alt="герметики" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/unitaz_kreplenie`}><h3 className="catalog__title">Крепления крышки унитаза</h3>
                <div><img className="catalog__card-img" src="images/krepleniya.jpg" alt="кркпление" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/rezina`}><h3 className="catalog__title">Резина на канализацию</h3>
                <div><img className="catalog__card-img" src="images/adapter.jpg" alt="манжеты" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/procladki_paronit`}><h3 className="catalog__title">Прокладки паронитовые</h3>
                <div><img className="catalog__card-img" src="images/paronit.jpg" alt="паронит" /></div></NavLink></div>
               
                <div className="catalog__card"><NavLink to={`/procladki_rezina`}><h3 className="catalog__title">Прокладки резиновые</h3>
                <div><img className="catalog__card-img" src="images/prokladki.jpg" alt="резина" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/procladki_silikon`}><h3 className="catalog__title">Прокладки силиконовые</h3>
                <div><img className="catalog__card-img" src="images/silikon.jpg" alt="силикон" /></div></NavLink></div>
                
                <div className="catalog__card"><NavLink to={`/procladki_amerikanka`}><h3 className="catalog__title">Прокладки на Американку</h3>
                <div><img className="catalog__card-img" src="images/amerikanka2.png" alt="американка" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/procladki_smesitel`}><h3 className="catalog__title">Прокладки на смеситель</h3>
                <div><img className="catalog__card-img" src="images/mixer.jpg" alt="смеситель" /></div></NavLink></div>

                <div className="catalog__card"><NavLink to={`/kolca_bidon`}><h3 className="catalog__title">Кольца на алюминиевый бидон</h3>
                <div><img className="catalog__card-img" src="images/flyaga3.jpg" alt="бидон" /></div></NavLink></div>
               
            </div>
            
        </div>
    );
    
}

export default Catalog;