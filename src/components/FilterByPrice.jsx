import { useState } from "react";
import { IoFilterCircleSharp } from "react-icons/io5";

const FilterByPrice = ({handleSort}) => {
        const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="h-max flex place-items-start flex-col text-white relative my-6 ml-2">
            <div className="w-max bg-secondary/40 p-2 rounded-xl text-black font-bold flex gap-2 items-center cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                <IoFilterCircleSharp /> Filter by Price
                <select>Filter by Price</select>
            </div>
            {
                showOptions ? //True
                    <div className="mt-2 flex flex-col bg-white/60 text-slate-500 font-semibold rounded shadow-lg absolute top-full z-10">
                        <button onClick={() => handleSort("Low to High")} value="low to high" className="px-4 py-2 hover:bg-purple-100"> Low to High </button>
                        <button onClick={() => handleSort("High to Low")} value="high to low" className="px-4 py-2 hover:bg-purple-100"> High to Low</button>
                    </div>
                    : //False
                    <></> // or null
            }
        </div>
    );
}
export default FilterByPrice;