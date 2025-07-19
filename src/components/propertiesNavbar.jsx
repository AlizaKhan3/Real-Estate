import Input from "../components/Input"

const PropertiesNavbar = () => {
    // const Menu = [
    //     {
    //         id: 1,
    //         name: "SELL",
    //         move: "/selling"
    //     },
    //     {
    //         id: 2,
    //         name: "PURCHASE",
    //         move: "/properties"
    //     },
    //     {
    //         id: 3,
    //         name: "RENT A PROPERTY",
    //         move: "/"
    //     }
    // ]
    return (
        // <div className="fixed w-full h-16 mt-14 px-7 bg-blue-700 shadow-md flex items-center justify-between">
        //     <div>
        //         {/* <p className="text-2xl font-extrabold text-amber-100 "> REAL ESTATE</p> */}
        //         <button>Filter by Price</button>
        //     </div>
        //     <div className="flex justify-center items-center">
        //         <div>
        //            <Input className="w-full max-w-sm" placeholder="Search by Location"/>
        //         </div>
        //         {/* <ul className="flex gap-2">
        //             {Menu.map((link) => (
        //                 <li key={link.id} className="list-none">
        //                     <NavLink
        //                         to={link.move}
        //                         className={({ isActive }) =>
        //                             `px-5 py-2 rounded-3xl border border-blue-700 transition ${isActive
        //                                 ? "bg-blue-500 text-white"
        //                                 : "bg-white text-blue-700"
        //                             }`
        //                         }
        //                     >
        //                         {link.name}
        //                     </NavLink>
        //                 </li>
        //             ))}
        //         </ul> */}
        //     </div>
        // </div>
    <div className="fixed top-14 w-full h-16 px-7 bg-blue-700 shadow-md flex gap-6 justify-start items-center">
      <button className="text-white px-3 py-2 rounded-4xl border ">Filter by Price</button>

      <div className="w-full max-w-xs">
        <Input placeholder="Search by Location" />
      </div>
      <div className="bg-yellow-300 rounded-4xl p-2 right-0">
        <p>AK</p>
      </div>
    </div>
 

    )
}

export default PropertiesNavbar
