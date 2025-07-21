import { useState } from "react";
import Input from "./Input"

// {
//   "title": "1500 sqft. Apartment",---
//   "slug": "luxury-4bhk-sea-view",
//   "price": 45000000,
//   "description": "Spacious 5 BHK apartment with modern amenities and breathtaking sea view.",
//   "categoryName": "Apartment",
//   "status":"Rent",
//   "location": "Gulistan e Johar, Karachi",
//   "bedrooms": 3,
//   "bathrooms": 3,
//   "areaSqft": 1200,
//   "amenities": ["Parking", "Security"],
//   "images": [
//     "sea_view_front.jpg",
//     "living_room.jpg",
//     "bedroom.jpg"
//   ]
// }
const PostForm = ({ sendDataToDashboard }) => {
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        sendDataToDashboard(formData);
        e.target.reset()
    }

    const handleInput = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    return (
        <div className="container mx-auto max-w-2xl p-3 text-center">
            <p className="text-3xl font-medium">Edit Property Form</p>
            <form className="p-4 space-y-2" action="" onSubmit={handleSubmit}>
                <Input onChange={(e) => handleInput("title", e.target.value)} type="text" placeholder="Update Title" />
                <Input onChange={(e) => handleInput("slug", e.target.value)} type="text" placeholder="Update Slug" />
                <Input onChange={(e) => handleInput("categoryName", e.target.value)} type="text" placeholder="categoryName Title" />
                <Input onChange={(e) => handleInput("location", e.target.value)} type="text" placeholder="Location" />
                <Input onChange={(e) => handleInput("amenities", e.target.value)} type="text" placeholder="Amenities" />
                <Input onChange={(e) => handleInput("images", e.target.value)} type="text" placeholder="Images" />

                <Input onChange={(e) => handleInput("description", e.target.value)} type="text" placeholder="Update Description" />
                <Input onChange={(e) => handleInput("price", e.target.value)} type="number" placeholder="Update Price" />
                <div className="flex justify-center items-center">
                    <Input onChange={(e) => handleInput("bedrooms", e.target.value)} type="number" placeholder="no. of Bedrooms" />
                    <Input onChange={(e) => handleInput("bathrooms", e.target.value)} type="number" placeholder="no. of Bathrooms" />
                    <Input onChange={(e) => handleInput("Area Square feet", e.target.value)} type="number" placeholder="Sqaure Ft." />
                </div>
                <select
                    value={formData.status || ""}
                    onChange={(e) => handleInput("status", e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                >
                    <option value="" disabled>Select Status</option>
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                    <option value="rent">Rent</option>
                </select>
                <button type="Update"> Submit </button>
            </form>
        </div>
    )
}

export default PostForm;