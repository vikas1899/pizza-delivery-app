import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function Cartscreen() {
    const cartState = useSelector(state => state.cart); // Use 'cart' as the key
    const cartItems = cartState.cartItems;
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch();

    return (

        <div className="row w-100 justify-content-center " data-aos='fade-down'>
            <div className="col-md-6">
                <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                {cartItems.map(item => (
                    <div className="flex-container" key={item._id}>
                        <div className='text-left m-1 w-100'>
                            <h1>{item.name} [{item.varient}]</h1>
                            <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                            <h1 style={{ display: 'inline' }}>Quantity: </h1>
                            <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                            <b style={{ fontSize: "20px" }}>{item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>
                            <hr />
                        </div>
                        <div className='m-1 w-100'>
                            <img src={item.image} style={{ height: '80px', width: '80px' }} alt={item.name} />
                        </div>
                        <div className='m-1 w-100'>
                            <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-md-4 text-right">
                <h2 style={{ fontSize: '45px' }}>
                    SubTotal : {subtotal} /Rs
                </h2>
                <Checkout subtotal={subtotal} />
            </div>
        </div>

    );
}
