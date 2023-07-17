import { setNavbarState, navbarState, setDropdownState } from '@/lib/reducers/navbar';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Navbar() {
    const navbar_state = useSelector(navbarState);
    const dispatch = useDispatch();
    console.log(navbar_state);

    return (
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                </a>
                <button onClick={() => dispatch(setNavbarState(navbar_state.navbar ? false : true))} data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {navbar_state.navbar && <div id="mega-menu-full" className="items-center justify-between font-medium w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button onClick={() => dispatch(setDropdownState(navbar_state.dropdown ? false : true))} id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Company <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>}
            </div>
            {navbar_state.dropdown && <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y">
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-100">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>}
        </nav>

    )
}

export default Navbar