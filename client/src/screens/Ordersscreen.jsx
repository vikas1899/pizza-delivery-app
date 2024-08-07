import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error'; // Ensure this component exists and is correctly imported

const Ordersscreen = () => {
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.getUserOrdersReducer);
    console.log(orderState)
    const { pizzas, error, loading } = orderState;

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch]);

    return (
        <div>
            <h2 style={{ fontSize: '35px', textAlign: 'center' }}>My Orders</h2>
            <div className="row justify-content-center">
                {loading && <Loading />}
                {error && <Error error={error} />}
                {pizzas && pizzas.map(order => (
                    <div className="col-md-8 m-2 p-1" key={order._id} style={{ backgroundColor: 'red', color: 'white' }}>
                        <div className="flex-container">
                            <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px' }}>Items</h2>
                                <hr />
                                {order.orderItems.map(item => (
                                    <div key={item._id}>
                                        <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px' }}>Address</h2>
                                <hr />
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                                <p>Pincode: {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                                <hr />
                                <p>Order Amount: {order.orderAmount}</p>
                                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                <p>Transaction Id: {order.transactionId}</p>
                                <p>Order Id: {order._id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ordersscreen;
