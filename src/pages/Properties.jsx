import PropertyCard from "../components/PropertyCard"

const Properties = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PropertyCard
        locationText="Islamabad, Pakistan"
        HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      />
      <PropertyCard
        locationText="Karachi, Pakistan"
        HouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      />
      {/* Add more cards here */}
    </div>

  )
}

export default Properties
