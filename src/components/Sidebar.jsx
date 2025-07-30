// import { useState } from "react";
// import { NavLink, Route, Routes } from "react-router-dom";
// import Properties from "../pages/Properties";
// import { IoMenu } from "react-icons/io5";


// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const Menu = [
//     { id: 1, name: "About Us", move: "/" },
//     { id: 2, name: "Purchase", move: "/purchase/properties" },
//     { id: 3, name: "Sell", move: "/selling" },
//     { id: 4, name: "Contact", move: "/" },
//     {
//       Bedrooms: {
//         quantity: "HELLOJS1",
//       }
//     }
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* SIDEBAR */}
//       <div
//         className={`fixed w-64 lg:static overflow-hidden top-0 left-0 h-full bg-blue-200/50 pt-20 transform transition-transform duration-300 z-50
//         ${sidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         <ul className="space-y-6">
//           {Menu.map((link) => (
//             <li key={link.id} className="list-none px-4">
//               <NavLink
//                 to={link.move}
//                 onClick={() => setSidebar(false)} // close sidebar on link click
//                 className={({ isActive }) =>
//                   `block px-5 w-max py-2 rounded-3xl border border-blue-700 transition ${isActive ? "bg-blue-500 text-white" : "bg-white text-blue-700"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* CONTENT AREA */}
//       <div className="w-full overflow-y-auto">
//         {/* TOGGLE BUTTON: show only on mobile */}
//         <button
//           className="p-4 fixed top-4 left-5 lg:hidden bg-blue-600 text-white rounded"
       
//         >
//           <IoMenu onClick={() => setSidebar(!sidebar)}/>
//         </button>

//         <div >
//           <Routes>
//             <Route path="/properties" element={<Properties />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
