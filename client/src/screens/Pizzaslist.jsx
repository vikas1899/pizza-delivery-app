import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Pizzaslist() {

    const pizzasstate = useSelector((state) => state.getAllPizzas);
    console.log(pizzasstate)
    const { pizzas, error, loading } = pizzasstate;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <div className=" text-center" >
            <h2 >Pizzas List</h2>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}

            <table className='table table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => (
                        <tr key={pizza._id}>
                            <td>{pizza.name}</td>
                            <td>
                                Small : {pizza.prices[0]['small']} <br />
                                Medium : {pizza.prices[0]['medium']} <br />
                                Large : {pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className='fa fa-trash m-1' onClick={() => { dispatch(deletePizza(pizza._id)) }}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-1'></i></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
