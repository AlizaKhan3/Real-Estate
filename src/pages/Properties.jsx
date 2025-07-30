import { useEffect, useState } from "react"
import PropertiesNavbar from "../components/propertiesNavbar"
import PropertyCard from "../components/PropertyCard"
import { axiosInstanceProperty } from "../config/axiosInstance.js"
import { useNavigate } from "react-router-dom"
import Error from "../pages/Error.jsx"

const Properties = () => {
  const [propertyList, setPropertyList] = useState([])
  // const [categoryList, setCategoryList] = useState([])

  // const navigate = useNavigate()
  useEffect(() => {
    axiosInstanceProperty.get("/").then((res) => {
      const response = res.data.data
      console.log(response)
      setPropertyList(response)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   axiosInstanceProperty.get("/categories").then((res) => {
  //     const response = res.data
  //     console.log(response)
  //     setCategoryList(response)
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])


  const handlePrice = async (value) => {
    try {
      const response = await axiosInstanceProperty.get("/");
      // const data = response.data.data;
      // console.log(data)

      // const prices = propertyList.map(item => item.price);
      let sorted = [...propertyList]
      if (value === "Low to High") {
        sorted = sorted.sort((a, b) => a.price - b.price);
      }
      if (value === "High to Low") {
        sorted = sorted.sort((a, b) => b.price - a.price);
      }
      setPropertyList(sorted)

    } catch (error) {
      console.log(error)
    }
  }


  const handleCategory = async (selectedCategory) => {
    try {
      // const response = await axiosInstanceProperty.get("/categories")
      const response = await axiosInstanceProperty.get("/")  //getting properties
      const resData = response.data.data

      const filteredData = resData.filter(property => property.category.name === selectedCategory );
      // console.log("property wali category->", filteredData)

      // let filteredData;

      if (filteredData) {
        setPropertyList(filteredData);
      } 
      
       if (!filteredData) {
        return "pROPETY not found ka ek component rkhna hei kese krun"
      } 

     
      } catch (error) {
        console.log("Error in filtering category", error.message)
      }

    }

    const handleBedrooms = async (selectedBedroom) => {
      console.log(selectedBedroom)
    }
  return (
      <div className="w-full">
        <PropertiesNavbar filterPriceHandle={handlePrice} handleCategory={handleCategory} handleBedrooms={handleBedrooms}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 pt-40">
          {propertyList.map((object) => {
            return <PropertyCard key={object.id} data={object} />
          })
          }
        </div>
      </div>

    )
  }

  export default Properties
