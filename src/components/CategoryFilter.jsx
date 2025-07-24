const CategoryFilter = ({ handleCategory }) => {

    return (
        <div>
            <select name="category" id="" onChange={(e) => handleCategory(e.target.value)}>
                <option value="Home">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Luxury Villa">Luxury</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Commercial Office">Commercial Office</option>
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