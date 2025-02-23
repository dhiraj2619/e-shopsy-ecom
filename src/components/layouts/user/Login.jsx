import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, LoginUser } from '../../../actions/UserAction';
import { useSnackbar } from 'notistack';
import BackdropLoader from '../BackdropLoader';

const Login = () => {
    const dispatch = useDispatch();

    const { loading, error, isAuthenticated } = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(LoginUser(email, password));
    }
    const location = useLocation();

    const navigate = useNavigate();

    const redirect = location.search ? location.search.split("=")[1] : "account";

    const { enqueueSnackbar } = useSnackbar();


    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: 'error' });
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate(`/${redirect}`);
        }
    }, [dispatch, isAuthenticated, error, redirect, navigate, enqueueSnackbar])

    return (
        <>
            {loading && <BackdropLoader />}
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
                    <div className="loginSidebar bg-purple-500 p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-white text-3xl">Login</h1>
                        <p className="text-gray-300 text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <div className="text-center py-10 px-4 sm:px-14">
                            <form onSubmit={handleLogin}>
                                <div className="flex flex-col w-full gap-4">
                                    <TextField fullWidth id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <TextField fullWidth id="password" label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} required />

                                    <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                        <p className="text-xs text-primary-grey text-left">By continuing, you agree to Flipkart's <a href="https://www.flipkart.com/pages/terms" className="text-primary-blue"> Terms of Use</a> and <a href="https://www.flipkart.com/pages/privacypolicy" className="text-primary-blue"> Privacy Policy.</a></p>
                                        <button type="submit" className="text-white py-3 w-full bg-black shadow hover:shadow-lg rounded-sm font-medium">Login</button>
                                        <Link to="/password/forgot" className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium">Forgot Password?</Link>
                                    </div>
                                </div>
                            </form>

                            <Link to="/register" className="font-medium text-blue-600 text-sm">New to flipkart ? Create an Account</Link>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Login