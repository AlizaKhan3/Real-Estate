import { useState } from "react";
import Input from "./Input"

const PostForm = ({ sendDataToDashboard }) => {
    const [formData, setFormData] = useState({})

    //images ka separate object banraha isko formData wale mein include krna hei
    const [images, setImages] = useState({
        image1: null,
        image2: null,
        image3: null
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const finalData = new FormData()

        // Add images in key-value pait
        if (images.image1) finalData.append("image1", images.image1);
        if (images.image2) finalData.append("image2", images.image2);
        if (images.image3) finalData.append("image3", images.image3);

        for (const key in formData) {
            finalData.append(key, formData[key])
        }
        sendDataToDashboard(finalData);
        console.log(images.image1)
        console.log(images.image2)
        console.log(images.image3)

        console.log(finalData)
        e.target.reset()
    }
    // console.log(images)
    const handleInput = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    return (
        <div className="container mx-auto max-w-2xl p-3 text-center">
            <p className="text-3xl font-medium">Edit Property Form</p>
            <form className="p-4 space-y-2" onSubmit={handleSubmit} action="/add" method="post" encType="multipart/form-data">
                <Input required onChange={(e) => handleInput("title", e.target.value)} type="text" placeholder="Update Title" />
                <Input required onChange={(e) => handleInput("slug", e.target.value)} type="text" placeholder="Update Slug" />
                <Input required onChange={(e) => handleInput("categoryName", e.target.value)} type="text" placeholder="categoryName" />
                <Input required onChange={(e) => handleInput("location", e.target.value)} type="text" placeholder="Location" />
                <Input required onChange={(e) => handleInput("amenities", e.target.value)} type="text" placeholder="Amenities" />
                <Input required onChange={(e) => handleInput("description", e.target.value)} type="text" placeholder="Update Description" />
                <Input required onChange={(e) => handleInput("price", e.target.value)} type="number" placeholder="Update Price" />
                <div className="flex justify-center items-center">
                    <Input required onChange={(e) => setImages({ ...images, image1: e.target.files[0] })} type="file" name="image1" />

                    <Input onChange={(e) => setImages({ ...images, image1: e.target.files[0] })}
                        type="file"
                        name="image2" />
                    <Input required onChange={(e) => setImages({ ...images, image1: e.target.files[0] })} type="file" name="image3" />
                </div>
                <div className="flex justify-center items-center">
                    <Input required onChange={(e) => handleInput("bedrooms", e.target.value)} type="number" placeholder="no. of Bedrooms" />
                    <Input required onChange={(e) => handleInput("bathrooms", e.target.value)} type="number" placeholder="no. of Bathrooms" />
                    <Input required onChange={(e) => handleInput("Area Square feet", e.target.value)} type="number" placeholder="Sqaure Ft." />
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