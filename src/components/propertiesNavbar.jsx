import { useState } from "react"
import Input from "../components/Input"
import { axiosInstanceProperty } from "../config/axiosInstance"
import FilterByPrice from "./FilterByPrice"
import CategoryFilter from "./CategoryFilter"
import BedroomFilter from "./BedroomsFilter"

const PropertiesNavbar = ({ filterPriceHandle, handleCategory, handleBedrooms }) => {
       return (
        <div className="fixed top-14 w-full h-16 px-7 bg-blue-700 shadow-md flex gap-6 justify-start items-center">
            {/* <button className="text-white px-3 py-2 rounded-4xl border ">Filter by Price</button> */}
            <div className="flex gap-4 justify-center items-center">
                <FilterByPrice handleSort={filterPriceHandle} />
                <CategoryFilter handleCategory={handleCategory}/>
                <BedroomFilter handleBedrooms={handleBedrooms}/>
                <div className="w-full max-w-xs">
                    <Input placeholder="Search by Location" />
                </div>
            </div>

            {/* <div className="bg-yellow-300 rounded-4xl p-2 lg:ml-130">
                <p>AK</p>
            </div> */}
        </div>
    )
}

export default PropertiesNavbar;