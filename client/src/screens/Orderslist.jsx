import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Orderslist() {
    const dispatch = useDispatch();
    const getordersstate = useSelector((state) => state.getAllOrdersReducer);
    const { loading, error, orders } = getordersstate;

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    return (
        <div>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders &&
                        orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.userid}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>
                                    {order.isDelivered ? (
                                        <h1 style={{ color: "green" }}>Delivered</h1>
                                    ) : (
                                        <button className="btn" onClick={() => { dispatch(deliverOrder(order._id)) }}>
                                            Deliver
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
