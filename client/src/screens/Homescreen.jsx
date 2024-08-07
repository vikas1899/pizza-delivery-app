import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

const Homescreen = () => {
    const dispatch = useDispatch();

    const pizzasState = useSelector(state => state.getAllPizzas); // Correct selector

    const { pizzas, error, loading } = pizzasState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <div>
            <Filter />
            <div className="row justify-content-center ">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error="Something went wrong" />
                ) : (
                    pizzas.map(pizza => (
                        <div className="  col-md-3 m-3" key={pizza._id}> {/* Ensure the key is unique */}
                            <Pizza pizza={pizza} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Homescreen;
