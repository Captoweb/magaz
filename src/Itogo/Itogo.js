
function Itogo({totalPrice}) {
    //const totalPrice = cartItems.reduce((sum, obj) => (obj.price * cartCount) + sum, 0);
    return(
        <div>
            <div className="total-price">Итого: {totalPrice} руб</div> 
        </div>
    );
}

export default Itogo;  