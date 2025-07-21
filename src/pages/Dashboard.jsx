import { useEffect, useState } from "react";
import { axiosInstanceProperty } from "../config/axiosInstance"
import EditForm from "../components/EditForm";
import PostForm from "../components/PostForm";

const Dashboard = () => {
  const [properties, setproperties] = useState([])
  const [editedFormData, setEditedFormData] = useState({})
  const [editForm, setEditForm] = useState(false)

  const [postForm, setPostForm] = useState(false)
  const [postedFormData, setPostedFormData] = useState({})

  useEffect(() => {
    axiosInstanceProperty.get("/").then((res) => {
      const response = res.data.data
      console.log(response)
      setproperties(response)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const handleDelete = async (id) => {
    console.log("Trying to delete:", id);
    try {
      const token = localStorage.getItem("token")

      const res = await axiosInstanceProperty.delete(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Response:", res.status);

      if (res.status === 200) {
        setproperties(properties.filter((property) => property.id !== id));
      } else {
        console.error("Delete failed with status:", res.status);
      }
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  // const handleEdit = async (property) => {
  //   //property whole object araha hei isi mein id, title, price, status etc sab hei.
  //   setEditedFormData(property)
  //   setEditForm(true)
  //   try {
  //     // const handleEdit (id);
  //     const token = localStorage.getItem("token")
  //     console.log(id, payload)
  //     const res = await axiosInstanceProperty.put(`/${id}`, payload, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     if (res.status === 200) {
  //       const updatedProperty = properties.filter((property) => property.id === id)
  //       setproperties(...updatedProperty, payload)
  //     }
  //     setEditForm(false);

  //     console.log(response.status);
  //   } catch (error) {

  //   }
  // }

  const handleEditForm = (property) => {
    setEditedFormData(property);
    setEditForm(true);
  };

  const handleUpdate = async (updatedData) => {

    const token = localStorage.getItem("token")
    console.log(updatedData);
    try {
      const response = await axiosInstanceProperty.put(`${updatedData.id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        // 👇 Safe map for local update
        setproperties((prev) =>
          prev.map((property) =>
            property.id === updatedData.id ? { ...property, ...updatedData } : property
          )
        );
        setEditForm(false); // hide form
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handlePostForm = () => {
    setPostForm(true);
    // setPostedFormData(property)
  }


  const handlePost = async (data) => {
    try {
      const token = localStorage.getItem("token");

      console.log(data)
      const response = await axiosInstanceProperty.post("/add", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (response.status === 200) {
        const newData = response.data.data;
        setproperties((prev) => [...prev, newData])

       // setproperties(addProperty)
        setEditForm(false); // hide form
      }

    } catch (error) {
      console.log("Error in posting data ->", error)
    }
  }


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Catgeory</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            properties.map((property) => {
              return <tr key={property.id}>
                <td className="border p-2">{property.title}</td>
                <td className="border p-2">{property.price}</td>
                <td className="border p-2">{property.category.name}</td>
                <td className="border p-2">{property.status}</td>
                <td className="border p-2 space-x-3">
                  <button className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(property.id)}>Delete</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditForm(property)}>Edit</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handlePostForm(property)}>Add Property</button>
                  {/* property --> poora object hei property ka. */}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      {
        editForm ?
          <EditForm sendDataToDashboard={handleUpdate} formData={editedFormData} setFormData={setEditedFormData} />
          : <></>
      }
      {
        postForm ?
          <PostForm sendDataToDashboard={handlePost}  />
          : <></>
      }
    </div>
  )
}

export default Dashboard


// const handleEdit = async (id) => {
//   try {
//     const token = localStorage.getItem("token")
//     console.log(id, payload)
//     const res = await axiosInstanceProperty.put(`/${id}`, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     if (res.status === 200) {
//       const updatedProperty = properties.filter((property) => property.id === id)
//       setproperties(updatedProperty)

//     }
//     console.log(response.status);
//   } catch (error) {

//   }
// }
