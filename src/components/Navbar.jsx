import { Link, NavLink } from "react-router-dom"
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const Menu = [
        {
            id: 1,
            name: "About Us",
            move: "/"
        },
        {
            id: 2,
            name: "Properties",
            move: "/purchase/properties"
        },
        {
            id: 3,
            name: "Sell",
            move: "/selling"
        },
        {
            id: 4,
            name: "Register",
            move: "/register"
        }

    ]
    return (
        <div className="w-full fixed h-14 p-7 top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md flex items-center justify-between">
            <div className="flex justify-center items-center">
                {/* <button
                    className="px-4 flex justify-center items-center lg:hidden text-2xl text-black"
                    // onClick={setSidebar}
                >
                    <IoMenu/>
                </button> */}
                <p className=" text-2xl font-extrabold text-shadow-blue-50 text-black "> REAL ESTATE</p>
            </div>
            <div className="flex">
                <ul className="flex gap-5">
                    {
                        Menu.map((link) => {
                            return <li className="list-none" key={link.id}>
                                <NavLink
                                    to={link.move}
                                    className={({ isActive }) => isActive ? "active bg-red-500" : ""}
                                >
                                    {link.name}
                                </NavLink></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
