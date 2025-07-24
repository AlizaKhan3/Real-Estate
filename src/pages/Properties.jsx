import { useEffect, useState } from "react"
import PropertiesNavbar from "../components/propertiesNavbar"
import PropertyCard from "../components/PropertyCard"
import { axiosInstanceProperty } from "../config/axiosInstance.js"
import { useNavigate } from "react-router-dom"

const Properties = () => {
  const [propertyList, setPropertyList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  const navigate  = useNavigate()
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


  const handleCategory = async (value) => {
    try {
      const response = await axiosInstanceProperty.get("/categories")
      const resData = response.data.data 

      const category = categoryList.map(cat => cat.name);
      console.log(category)

      let filteredData;

      if (value === "") {
        setPropertyList(propertyList);
      }

      if(value === "House"){
        // filteredData = propertyList.filter((property)=> property.category.name === category)
        console.log(filteredData)
        setPropertyList(filteredData);
      }
      
      // console.log(res)
      console.log(resData)
      console.log(value, "ye rahi cat val")
      setCategoryList(resData)
      // if()
    } catch (error) {
      console.log("Error in filtering category", error.message)
    }

  }
  return (
    <div className="w-full">
      <PropertiesNavbar filterPriceHandle={handlePrice} handleCategory={handleCategory} />
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
