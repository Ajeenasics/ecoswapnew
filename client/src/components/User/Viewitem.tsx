import React, { useEffect, useState } from "react";
import axios from "axios";

function Viewitem() {
  const [data, setData] = useState([]);
  const [editdetails, setEditdetails] = useState({});
  const [editbutton, setEditbutton] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showData = async () => {
    try {
      const cat = await axios.get("http://localhost:8000/user/getitems");
      setData(cat.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const handleEdit = async (val) => {
    const id = val._id;
    console.log(id);
    setEditbutton(true);
    try {
      const response = await axios.get(`http://localhost:8000/user/edititems/${id}`);
      console.log(response.data.data);
      setEditdetails(response.data.data);
    } catch (error) {
      console.error("Error fetching edit data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setEditbutton(false);
    try {
      await axios.post(`http://localhost:8000/user/updateitems/${editdetails._id}`, editdetails);
      showData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const confirmDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.post(`http://localhost:8000/user/deleteitems/${selectedItem._id}`);
      setShowDeleteModal(false);
      showData(); 
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 bg-green-50 mt-4"
          >
            <button
              onClick={() => confirmDelete(item)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              ❌
            </button>

            <button
              className="absolute top-2 right-10 text-blue-600 hover:text-blue-800"
              onClick={() => handleEdit(item)}
            >
              ✏️
            </button>

            <img
              src={item.img}
              alt="loading.."
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.productname}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.productdesc}</p>
              <div className="text-sm text-gray-700 space-y-1 mb-3">
                <p>Price: {item.productprice}</p>
                <p>Product Code: {item.productcode}</p>
                <p>Quantity: {item.productquantity}</p>
              </div>
              <div className="flex justify-end mt-2">
                <div className="bg-green-500 text-white text-xs font-semibold rounded flex items-center justify-center w-12 h-5">
                  4.7 ★
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editbutton && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
            <form onSubmit={handleUpdate}>
              
              <input
                type="text"
                name="productname"
                value={editdetails.productname || ""}
                onChange={(e) => setEditdetails({ ...editdetails, productname: e.target.value })}
                className="w-full mb-3 border p-2 rounded"
                placeholder="Product Name"
                required
              />
              <textarea
                name="productdesc"
                value={editdetails.productdesc || ""}
                onChange={(e) => setEditdetails({ ...editdetails, productdesc: e.target.value })}
                className="w-full mb-3 border p-2 rounded"
                placeholder="Product Description"
                required
              />
              <input
                type="text"
                name="productprice"
                value={editdetails.productprice || ""}
                onChange={(e) => setEditdetails({ ...editdetails, productprice: e.target.value })}
                className="w-full mb-3 border p-2 rounded"
                placeholder="Price"
                required
              />
              <input
                type="text"
                name="productcode"
                value={editdetails.productcode || ""}
                onChange={(e) => setEditdetails({ ...editdetails, productcode: e.target.value })}
                className="w-full mb-3 border p-2 rounded"
                placeholder="Product Code"
                required
              />
              <input
                type="text"
                name="productquantity"
                value={editdetails.productquantity || ""}
                onChange={(e) => setEditdetails({ ...editdetails, productquantity: e.target.value })}
                className="w-full mb-6 border p-2 rounded"
                placeholder="Quantity"
                required
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditbutton(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
            <div className="flex justify-between">
              <button
                onClick={handleDeleteConfirmed}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viewitem;
