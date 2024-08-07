import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Pizza = ({ pizza }) => {
    const [varient, setVarient] = useState(pizza.varients[0] || "small");
    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(pizza, quantity, varient));
    };

    // Ensure prices data exists
    const price = pizza.prices[0] && pizza.prices[0][varient] ? pizza.prices[0][varient] * quantity : 0;

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: 'auto' }} alt={pizza.name} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Variants</p>
                    <select className="form-control" value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {pizza.varients.map((varient, index) => (
                            <option key={index} value={varient}>{varient}</option>
                        ))}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                        {[...Array(10).keys()].map((x, index) => (
                            <option key={index} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex-container m-1">
                <div className="m-1 w-100">
                    <p className="mt-2 fs-5 fw-semibold">Price: {price} Rs/-</p>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={handleAddToCart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: "400px" }} alt={pizza.name} />
                    <div>
                        <p style={{ textAlign: "center" }}>
                            {pizza.description}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Pizza;
