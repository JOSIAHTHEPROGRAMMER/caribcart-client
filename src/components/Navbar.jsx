import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { ListCheckIcon, MenuIcon, MessageCircleIcon, Package, ListChecks, MessageCircle, Settings, LogOut, ArrowBigLeft, ArrowLeft } from 'lucide-react';
import { FiX } from 'react-icons/fi';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { openSignIn, signOut, openUserProfile } = useClerk();
    const { isSignedIn, isLoaded, user } = useUser();

    const [menuOpen, setMenuOpen] = useState(false);      // Mobile main menu
    const [userMenuOpen, setUserMenuOpen] = useState(false); // Mobile user menu

    const navBtnPrimary =
        "cursor-pointer px-5 py-2 rounded-sm hover:text-white hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] hover:scale-105 transition font-semibold";

    const userMenuPrimary = "flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md hover:text-white hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] hover:scale-105 transition font-semibold"

    const handleLoginClick = (route) => {
        if (!isLoaded) return;

        if (isSignedIn) {
            navigate(route);
            scrollTo(0, 0);
            setMenuOpen(false);
        } else if (route === '/login') {
            openSignIn();
        } else {
            toast.error("Please log in to access this feature.");
        }
    };


    const handlePublicRoute = () => {
        scrollTo(0, 0);
        setMenuOpen(false);
        setUserMenuOpen(false);
    };

    const closeAllMenus = () => {
        setMenuOpen(false);
        setUserMenuOpen(false);
    };

    const handleAvatarClick = () => {
        setMenuOpen(false);        // close hamburger menu
        setUserMenuOpen(true);     // open user menu
    };

    return (
        <nav className="h-20">
            {/* Desktop Navbar */}
            <div className="fixed inset-x-0 top-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white">
                {/* Logo */}
                <Link to="/" onClick={handlePublicRoute}>
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="h-10 scale-300 origin-left cursor-pointer"
                />

                </Link>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-4 md:gap-8 text-gray-800">
                    <Link className={navBtnPrimary} to="/" onClick={handlePublicRoute}>Home</Link>
                    <button className={navBtnPrimary} onClick={() => handleLoginClick('/marketplace')}>Market Place</button>
                    <Link className={navBtnPrimary} to="/aboutus" onClick={handlePublicRoute}>About Us</Link>
                    <Link className={navBtnPrimary} to="/contact" onClick={handlePublicRoute}>Contact Us</Link>

                    {/* Desktop Right Actions */}
                    {!isSignedIn && isLoaded && (
                        <button
                            onClick={openSignIn}
                            className="cursor-pointer px-8 py-2 bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] text-white rounded-md hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800 transition"
                        >
                            Login
                        </button>
                    )}

                    {isSignedIn && isLoaded && (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Orders" labelIcon={<Package size={16} />} onClick={() => { navigate('/myorders'); scrollTo(0, 0); }} />
                                <UserButton.Action label="My Listings" labelIcon={<ListCheckIcon size={16} />} onClick={() => { navigate('/mylistings'); scrollTo(0, 0); }} />
                                <UserButton.Action label="Messages" labelIcon={<MessageCircleIcon size={16} />} onClick={() => { navigate('/messages'); scrollTo(0, 0); }} />
                            </UserButton.MenuItems>
                        </UserButton>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <MenuIcon
                    onClick={() => setMenuOpen(true)}
                    className="sm:hidden size-8 text-gray-500 cursor-pointer"
                />
            </div>

            {/* Mobile Main Menu */}
            <div className={`sm:hidden fixed inset-0 bg-white z-200 transition ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="pt-24 px-6 flex flex-col items-center gap-6 text-xl font-semibold">
                    <Link className={navBtnPrimary} to="/" onClick={closeAllMenus}>Home</Link>
                    <button className={navBtnPrimary} onClick={() => handleLoginClick('/marketplace')}>Market Place</button>
                    <Link className={navBtnPrimary} to="/aboutus" onClick={closeAllMenus}>About Us</Link>
                    <Link className={navBtnPrimary} to="/contact" onClick={closeAllMenus}>Contact Us</Link>

                    {!isSignedIn && isLoaded && (
                        <button
                            onClick={openSignIn}
                            className="cursor-pointer px-8 py-2 bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] text-white rounded-md hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800 transition"
                        >
                            Login
                        </button>
                    )}

                    {isSignedIn && isLoaded && user && !userMenuOpen && (
                        <div
                            onClick={handleAvatarClick}
                            className={userMenuPrimary + "text-center justify-center"}
                        >
                            <img src={user.imageUrl} alt="User avatar" className="w-8 h-8 rounded-full" />
                            <div className="text-left">
                                <p className="font-semibold">{user.fullName}</p>
                            </div>
                        </div>
                    )}

                    <FiX
                        onClick={closeAllMenus}
                        className="absolute top-6 right-6 size-8 cursor-pointer"
                    />
                </div>
            </div>

            {/* Mobile User Menu */}
            {isSignedIn && isLoaded && userMenuOpen && (
                <div className="sm:hidden fixed inset-0 bg-white z-200 transition pt-24 px-6 flex flex-col gap-3">
                    <button
                        className={userMenuPrimary}
                        onClick={() => { navigate('/myorders'); closeAllMenus(); }}
                    >
                        <Package size={18} /> My Orders
                    </button>

                    <button
                        className={userMenuPrimary}
                        onClick={() => { navigate('/mylistings'); closeAllMenus(); }}
                    >
                        <ListChecks size={18} /> My Listings
                    </button>

                    <button
                        className={userMenuPrimary}
                        onClick={() => { navigate('/messages'); closeAllMenus(); }}
                    >
                        <MessageCircle size={18} /> Messages
                    </button>

                    <hr />

                    <button
                        className={userMenuPrimary}
                        onClick={openUserProfile}
                    >
                        <Settings size={18} /> Manage account
                    </button>

                    <button
                        className="flex items-center cursor-pointer gap-3 w-full px-4 py-2 text-left rounded hover:bg-red-50 text-red-600"
                        onClick={() => signOut(() => navigate('/'))}
                    >
                        <LogOut size={18} /> Sign out
                    </button>


                    <ArrowLeft onClick={() => { setUserMenuOpen(false); setMenuOpen(true); }}
                     className="absolute top-6 left-6 size-8 cursor-pointer hover:text-[#FF6B6B]"/> 


                    <FiX
                        onClick={closeAllMenus}
                        className="absolute top-6 right-6 size-8 cursor-pointer hover:text-[#FF6B6B]"
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
