const BedroomFilter = ({ handleBedrooms }) => {
    const BedtoomsNo = [
        {
            id: 1,
            bedrooms: 1
        },
        {
            id: 2,
            bedrooms: 2
        }, {
            id: 3,
            bedrooms:3
        }, {
            id: 4,
            bedrooms: 4
        }, {
            id: 5,
            bedrooms: 5
        },
        {
            id: 6,
            bedrooms: 6
        }
    ]
    return (
        <div>
            <select name="bedrooms" onChange={(e) => handleBedrooms(e.target.value)}>
                {
                    BedtoomsNo.map((bedroom) => {
                        return <option key={bedroom.id} value={bedroom.bedrooms}>{bedroom.bedrooms}</option>
                    })
                }
            </select>
        </div>
    )
}

export default BedroomFilter


// "Home"

// "Apartment"

// "Luxury Villa"

// "Farmhouse"

// "Commercial Office"