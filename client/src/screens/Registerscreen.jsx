import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error'; // Ensure this component exists and is correctly imported

const Registerscreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const registerstate = useSelector((state) => state.registerUserReducer);
    const { error, loading, success } = registerstate;

    const dispatch = useDispatch();

    const register = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            const user = {
                name,
                email,
                password,
            };

            dispatch(registerUser(user));

        }
    };

    return (
        <div className=" register ">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left">
                    {loading && <Loading />}
                    {success && <Success success="User registered successfully" />}
                    {error && <Error error="Email already registered" />}

                    <h2 className="text-center" style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            required
                            type="text"
                            placeholder="Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            required
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            required
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button onClick={register} className="btn btn-primary mt-3">REGISTER</button>
                        <br />
                        <a
                            href="/login"
                            className="login-link mt-2"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            Click Here To Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registerscreen;
