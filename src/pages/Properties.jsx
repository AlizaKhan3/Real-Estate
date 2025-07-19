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
    .catch((err)=> {
      console.log(err)
    })
  }, [])



  return (
    <div className="w-full">
      <PropertiesNavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 pt-40">
        { propertyList.map((object) => {
           return <PropertyCard key={object.id} data={object} />
          })
        }
        {/* <PropertyCard
          locationText="Islamabad, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        />
        <PropertyCard
          locationText="Karachi, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        />
        <PropertyCard
          locationText="Karachi, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        />  <PropertyCard
          locationText="Karachi, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        />  <PropertyCard
          locationText="Karachi, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        />  <PropertyCard
          locationText="Karachi, Pakistan"
          HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        /> */}
        {/* Add more cards here */}
      </div>
    </div>

  )
}

export default Properties
