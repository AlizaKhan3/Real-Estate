import { useEffect, useState } from "react"
import Input from "../components/Input"
import { axiosInstanceProperty } from "../config/axiosInstance"
import FilterByPrice from "./FilterByPrice"
import CategoryFilter from "./CategoryFilter"
import BedroomFilter from "./BedroomsFilter"
import SearchFilter from "./SearchFilter"

const PropertiesNavbar = ({ filterPriceHandle, handleCategory, handleBedrooms, locationSearchHandle }) => {
    // const [propertyList, setPropertyList] = useState([])
    // const [allProperties, setAllProperties] = useState([]) // backup to reset

    // useEffect(() => {
    //     axiosInstanceProperty.get("/").then((res) => {
    //         const response = res.data.data
    //         console.log(response)
    //         setPropertyList(response)
    //         setAllProperties(response) // store original

    //     })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])


    // const searchHandle = (searchedLocation) => {
    //     if (!searchedLocation) {
    //         setPropertyList(allProperties) // reset to original if empty
    //     } else {
    //         const FilteredData = allProperties.filter((property) =>
    //             property.location.toLowerCase().includes(searchedLocation.toLowerCase())
    //         )
    //         setPropertyList(FilteredData)
    //     }
    // }
   
    return (
        <div className="fixed overflow-x-visible overflow-y-hidden top-14 w-full h-16 px-7 bg-[#74c781] shadow-md flex gap-6 justify-start items-center">
            <div className="flex gap-4 justify-center items-center">
                <FilterByPrice handleSort={filterPriceHandle} />
                <CategoryFilter handleCategory={handleCategory} />
                <BedroomFilter handleBedrooms={handleBedrooms} />
                <SearchFilter searchHandle={locationSearchHandle} />
            </div>

            {/* <div className="bg-yellow-300 rounded-4xl p-2 lg:ml-130">
                <p>AK</p>
            </div> */}
        </div>
    )
}

export default PropertiesNavbar;