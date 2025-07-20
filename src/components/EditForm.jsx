import { useState } from "react";
import Input from "./Input"

const EditForm = ({ sendDataToDashboard, formData, setFormData }) => {
    // const [formData, setformData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        // setformData(formData)
        // console.log(object)
        sendDataToDashboard(formData);
        e.target.reset()
    }

    const handleInput = (key, value) => {
        // const editedFormData = {
        //     ...formData,
        //     [key]: value
        // }
        // setformData(editedFormData)
        setFormData({
            ...formData,
            [key]: value
        });
    }

    return (
        <div className="container mx-auto max-w-2xl p-3 text-center">
            <p className="text-3xl font-medium">Edit Property Form</p>
            <form className="p-4 space-y-2" action="" onSubmit={handleSubmit}>
                <Input value={formData.title || ""} onChange={(e) => handleInput("title", e.target.value)} type="text" placeholder="Update Title" />
                <Input value={formData.description || ""} onChange={(e) => handleInput("description", e.target.value)} type="text" placeholder="Update Description" />
                <Input value={formData.price || ""} onChange={(e) => handleInput("price", e.target.value)} type="number" placeholder="Update Price" />
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

export default EditForm
