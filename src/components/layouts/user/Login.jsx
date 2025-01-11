import React from 'react';
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <main className="w-full mt-12 sm:pt-20 sm:mt-0">
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
                    <div className="loginSidebar bg-primary-blue p-10 pr-12 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-gray-800 text-3xl">Login</h1>
                        <p className="text-gray-700 text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                    </div>

                    <form >
                        <div className="flex flex-col w-full gap-4">
                            <TextField fullWidth id="email" label="Email" type="email" required />
                            <TextField fullWidth id="password" label="Password" type="password" required />

                            <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                <p className="text-xs text-primary-grey text-left">By continuing, you agree to Flipkart's <a href="https://www.flipkart.com/pages/terms" className="text-primary-blue"> Terms of Use</a> and <a href="https://www.flipkart.com/pages/privacypolicy" className="text-primary-blue"> Privacy Policy.</a></p>
                                <button type="submit" className="text-white py-3 w-full bg-purple-700 shadow hover:shadow-lg rounded-sm font-medium">Login</button>
                                <Link to="/password/forgot" className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium">Forgot Password?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login