const CategoryFilter = ({ handleCategory }) => {
    const Category = [
        {
            id: 1,
            category: "House"
        },
        {
            id: 2,
            category: "Apartment"
        }, {
            id: 3,
            category: "Farmhouse"
        }, {
            id: 4,
            category: "Luxury Villa"
        }, {
            id: 5,
            category: "Commercial Office"
        },
        {
            id: 6,
            category: "Plot"
        }
    ]
    return (
        <div>
            <select name="category" onChange={(e) => handleCategory(e.target.value)}>
                {
                    Category.map((category) => {
                        return <option key={category.id} value={category.category}>{category.category}</option>
                    })
                }
                {/* <option value="Home">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Luxury Villa">Luxury</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Commercial Office">Commercial Office</option> */}
            </select>
        </div>
    )
}

export default CategoryFilter


// "Home"

// "Apartment"

// "Luxury Villa"

// "Farmhouse"

// "Commercial Office"