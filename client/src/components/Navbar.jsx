import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

const MyNavbar = () => {
    const cartstate = useSelector(state => state.cart);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    return (
        <Navbar bg="light" expand="lg" className="shadow-lg p-3 mb-5 rounded">
            <div className="container-fluid">
                <Navbar.Brand className="fw-bold" href="/">PIZZA<span className="text-danger">WORLD</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        {currentUser ? (
                            <NavDropdown title={currentUser.name} id="dropdownMenuLink">
                                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => dispatch(logoutUser())}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}
                        <Nav.Link href="/cart">Cart {cartstate.cartItems.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MyNavbar;
