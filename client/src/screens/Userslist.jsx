import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from '../actions/userActions';
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Userslist() {
    const dispatch = useDispatch();
    const usersstate = useSelector(state => state.getAllUsersReducer);
    const { error, loading, users } = usersstate;

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Users list</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUser(user._id)) }}></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
