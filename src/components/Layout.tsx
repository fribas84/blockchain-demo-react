import { Outlet, Link, useLocation } from 'react-router-dom';


const Layout = () => {

    const location = useLocation();
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link
                            className={`${location.pathname === '/' ? 'text-teal-600': 'text-teal-200'} block  mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ml-4'`}
                            to='/'> Home
                        </Link>
                        <Link
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                            to='/'> Hash
                        </Link>
                        <Link
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                            to='/'> Address
                        </Link>
                        <Link
                            className={`${location.pathname === '/blockchain' ? 'text-teal-600': 'text-teal-200'} block  mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'`}
                            to='/blockchain'> Blockchain
                        </Link>
                    </div>

                </div>
            </nav>
            <div>


                <Outlet />
            </div>
        </div>
    )
}

export default Layout
