import { IoSearch } from "react-icons/io5"
import Input from "./Input"
import { useEffect, useState } from "react"
import { axiosInstance } from "../config/axiosInstance"

const SearchFilter = ({ searchHandle }) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        // console.log("searched property location-->", searchTerm)
        // searchHandle(searchTerm) // pass value on button click

        const value = e.target.value
        setSearchTerm(value)
        searchHandle(value)   // real-time filter
    }

    return (
        <div className="flex">
            <Input onChange={handleChange} className="max-w-2xs active:border-none outline-none" placeholder="Search by Location" />
            <button className="cursor-pointer w-2" 
            // onClick={handleSearchClick} 
            >
                <IoSearch /></button>
        </div>
    )
}

export default SearchFilter