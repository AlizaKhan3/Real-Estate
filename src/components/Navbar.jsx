// import { Link, NavLink, useNavigate } from "react-router-dom"
// import { IoMenu } from "react-icons/io5";


// const token = localStorage.getItem("token")

// const Navbar = () => {
//     const Menu = [
//         {
//             id: 1,
//             name: "About Us",
//             move: "/"
//         },
//         {
//             id: 2,
//             name: "Properties",
//             move: "/properties"
//         },
//         {
//             id: 3,
//             name: "Sell",
//             move: "/selling"
//         },
//         // {
//         //     id: 4,
//         //     name: "Register",
//         //     move: "/register"
//         // }

//     ]
//     const navigate = useNavigate()
//     const handleLogout = () => {
//         localStorage.removeItem("token")
//         navigate("/register")
//     }
//     return (
//         <div className="w-full fixed h-14 p-7 top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md flex items-center justify-between">
//             <div className="flex justify-center items-center">
//                 {/* <button
//                     className="px-4 flex justify-center items-center lg:hidden text-2xl text-black"
//                     // onClick={setSidebar}
//                 >
//                     <IoMenu/>
//                 </button> */}
//                 <p className=" text-2xl font-extrabold text-shadow-blue-50 text-black "> REAL ESTATE</p>
//             </div>
//             <div className="flex">
//                 <ul className="flex gap-5 font-medium">
//                     {
//                         Menu.map((link) => {
//                             return (<li className="list-none" key={link.id}>
//                                 <NavLink
//                                     to={link.move}
//                                     className={({ isActive }) => isActive ? "active bg-[#b9e5c0] px-3 py-2 rounded-full" : ""}
//                                 >
//                                     {link.name}
//                                 </NavLink>
//                             </li>
//                             )
//                         })

//                     }
//                     {!token ? (
//                         <li className="font-medium">
//                             <NavLink to="/register">Register</NavLink>
//                         </li>
//                     ) : (
//                         <li>
//                             <button onClick={handleLogout} className="text-red-600 font-medium">Logout</button>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar


import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoMenu, IoClose } from "react-icons/io5"
import { useState } from "react"

const token = localStorage.getItem("token")

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // mobile menu state
  const navigate = useNavigate()

  const Menu = [
    { id: 1, name: "About Us", move: "/" },
    { id: 2, name: "Properties", move: "/properties" },
    { id: 3, name: "Sell", move: "/selling" },
  ]

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/register")
  }

  return (
    <div className="w-full fixed h-14 px-7 top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Logo */}
      <p className="text-2xl font-extrabold text-black">REAL ESTATE</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 font-medium">
        {Menu.map((link) => (
          <li className="list-none" key={link.id}>
            <NavLink
              to={link.move}
              className={({ isActive }) =>
                isActive
                  ? "active bg-[#b9e5c0] px-3 py-2 rounded-full"
                  : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}

        {!token ? (
          <li className="font-medium">
            <NavLink to="/register">Register</NavLink>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="text-red-600 font-medium"
            >
              Logout
            </button>
          </li>
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white/90 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-5 font-medium">
            {Menu.map((link) => (
              <li className="list-none" key={link.id}>
                <NavLink
                  to={link.move}
                  className={({ isActive }) =>
                    isActive
                      ? "active bg-[#b9e5c0] px-3 py-2 rounded-full"
                      : ""
                  }
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {!token ? (
              <li className="font-medium">
                <NavLink to="/register" onClick={() => setIsOpen(false)}>
                  Register
                </NavLink>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
