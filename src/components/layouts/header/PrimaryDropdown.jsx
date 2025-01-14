import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OfflineBoltIcon from '@mui/icons-material/OfflineBoltIcon';
import AddCircleIcon from '@mui/icons-material/AddCircleIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagIcon';
import FavoriteIcon from '@mui/icons-material/FavoriteIcon';
import ChatIcon from '@mui/icons-material/ChatIcon';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumberIcon';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletIcon';
import NotificationsIcon from '@mui/icons-material/NotificationsIcon';

const PrimaryDropdown = () => {

    const navs = [
        {
            title: "Supercoin Zone",
            icon: <OfflineBoltIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "Flipkart Plus Zone",
            icon: <AddCircleIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "Orders",
            icon: <ShoppingBagIcon sx={{ fontSize: "18px" }} />,
            redirect: "/orders",
        },
        {
            title: "Wishlist",
            icon: <FavoriteIcon sx={{ fontSize: "18px" }} />,
            redirect: "/wishlist",
        },
        {
            title: "My Chats",
            icon: <ChatIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "Coupons",
            icon: <ConfirmationNumberIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "Gift Cards",
            icon: <AccountBalanceWalletIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "Notifications",
            icon: <NotificationsIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
    ]


    return (
        <div className="absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">
            <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/account">
                <span className="text-purple-900"><AccountCircleIcon /></span>My profile
            </Link>

            {
                navs.map((item, i) => {
                    const { title, icon, redirect } = item;

                    return (
                        <>
                            {title === "Wishlist" ? (
                                <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to={redirect}>
                                    <span className="text-purple-900">{icon}</span>
                                    {title}
                                    <span className="ml-auto mr-3 bg-gray-100 p-0.5 px-2 text-gray-600 rounded">
                                        wishlist num
                                    </span>
                                </Link>
                            ) : (
                                <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to={redirect}>
                                    <span className="text-purple-900">{icon}</span>
                                    {title}
                                </Link>
                            )}
                        </>
                    )
                })
            }
        </div>
    )
}

export default PrimaryDropdown 