import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Addpizza from './Addpizza';
import Editpizza from './Editpizza';

const Adminscreen = () => {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: "35px", textAlign: "center" }}>Admin Panel</h2>
                    <ul className='adminfunctions'>
                        <li>
                            <Link to="userslist">Users List</Link>
                        </li>
                        <li>
                            <Link to="pizzaslist">Pizzas List</Link>
                        </li>
                        <li>
                            <Link to="addpizza">Add New Pizza</Link>
                        </li>
                        <li>
                            <Link to="orderslist">Orders List</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="userslist" element={<Userslist />} />
                        <Route path="orderslist" element={<Orderslist />} />
                        <Route path="pizzaslist" element={<Pizzaslist />} />
                        <Route path="addpizza" element={<Addpizza />} />
                        <Route path="editpizza/:pizzaid" element={<Editpizza />} />

                        <Route path="/" element={<Userslist />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Adminscreen;
