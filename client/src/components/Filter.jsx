import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
    const dispatch = useDispatch();
    const [searchkey, setSearchKey] = useState('');
    const [category, setCategory] = useState('all');

    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mx-5 mb-3 bg-white rounded">
                <div className="col-md-3">
                    <input
                        onChange={(e) => setSearchKey(e.target.value)}
                        value={searchkey}
                        type="text"
                        className="form-control"
                        placeholder="Search pizzas"
                    />
                </div>

                <div className="col-md-3">
                    <select
                        className="form-control mt-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non Veg</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <button
                        className="btn btn-primary w-100 mt-2"
                        onClick={() => dispatch(filterPizzas(searchkey, category))}
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
}
