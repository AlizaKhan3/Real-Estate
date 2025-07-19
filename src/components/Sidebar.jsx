// import { NavLink, Route, Routes } from "react-router-dom"
// import Properties from "../pages/Properties"

// const Sidebar = () => {
//     const [sidebar, setsidebar] = useState(false)

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
//         {
//             id: 4,
//             name: "Register",
//             move: "/register"
//         }

//     ]
//     return (
//         <div className="w-full h-full flex">
//             <div className="w-1/5 bg-slate-200 pt-20">
//                 <ul className="space-y-6">
//                     {Menu.map((link) => (
//                         <li key={link.id} className="list-none">
//                             <NavLink
//                                 to={link.move}
//                                 className={({ isActive }) =>
//                                     `px-5 py-2 rounded-3xl border text-black border-blue-700 transition ${isActive
//                                         ? "bg-blue-500 "
//                                         : "bg-white text-blue-700"
//                                     }`
//                                 }
//                             >
//                                 {link.name}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="w-4/5 bg-amber-500 h-full">
//                 <Routes>
//                     {/* <PropertiesNavbar/> */}
//                     {/* <Route path="/purchase/properties" element={<Properties />} /> */}
//                     <Route path="/properties" element={<Properties />} />

//                 </Routes>
//             </div>
//         </div>
//     )
// }

// export default Sidebar

import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Properties from "../pages/Properties";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const Menu = [
    { id: 1, name: "About Us", move: "/" },
    { id: 2, name: "Properties", move: "/properties" },
    { id: 3, name: "Sell", move: "/selling" },
    { id: 4, name: "Purchase", move: "/purchase/properties" },
  ];

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div
        className={`fixed lg:static overflow-hidden top-0 left-0 h-full w-1/5 bg-blue-200/50 pt-20 transform transition-transform duration-300 z-50
        ${sidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <ul className="space-y-6">
          {Menu.map((link) => (
            <li key={link.id} className="list-none px-4">
              <NavLink
                to={link.move}
                onClick={() => setSidebar(false)} // close sidebar on link click
                className={({ isActive }) =>
                  `block px-5 py-2 rounded-3xl border border-blue-700 transition ${
                    isActive ? "bg-blue-500 text-white" : "bg-white text-blue-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTENT AREA */}
      <div className="w-full overflow-y-auto">
        {/* TOGGLE BUTTON: show only on mobile */}
        <button
          className="p-4 lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white rounded"
          onClick={() => setSidebar(!sidebar)}
        >
          ☰
        </button>

        <div >
          <Routes>
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
