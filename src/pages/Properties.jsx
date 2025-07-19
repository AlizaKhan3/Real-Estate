import { useEffect, useState } from "react"
import PropertiesNavbar from "../components/propertiesNavbar"
import PropertyCard from "../components/PropertyCard"
import { axiosInstanceProperty } from "../config/axiosInstance.js"

// "Home"

// "Apartment"

// "Luxury Villa"

// "Farmhouse"

// "Commercial Office"

const Properties = () => {
  const [propertyList, setPropertyList] = useState([])

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


  return (
    <div className="w-full">
      <PropertiesNavbar filterPriceHandle={handlePrice} />
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
