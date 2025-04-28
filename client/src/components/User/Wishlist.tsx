import React, { useState } from "react";
import image1 from "../../asserts/nano.png";
import image2 from "../../asserts/henfruit.png";
import image3 from "../../asserts/linen.png";

const initialWishlistItems = [
  {
    title: "Nano Bristles Bamboo Toothbrush",
    desc: "Eco-friendly bamboo toothbrush with nano bristles.",
    img: image1,
    price: "$15",
    quantity: 1,
    code: "520375",
    rating:"4.4"
  },
  {
    title: "Henfruit Farm White Eggs",
    desc: "Farm-fresh white eggs, naturally grown.",
    img: image2,
    price: "$5.6",
    quantity: 1,
    code: "520375",
    rating:"4.6"
  },
  {
    title: "Linen-Bamboo Portable Utensil Set",
    desc: "Eco utensil set with linen roll case.",
    img: image3,
    price: "$7.5",
    quantity: 1,
    code: "520375",
    rating:"4.9"
  },
];

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const changeQuantity = (index, type) => {
    const updatedItems = [...wishlistItems];
    const currentQty = updatedItems[index].quantity;

    if (type === "increase") {
      updatedItems[index].quantity = currentQty + 1;
    } else if (type === "decrease" && currentQty > 1) {
      updatedItems[index].quantity = currentQty - 1;
    }

    setWishlistItems(updatedItems);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <button className="absolute top-2 right-2 text-red-600 hover:text-red-800">
              ❌
            </button>

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

              <div className="text-sm text-gray-700 space-y-1 mb-3">
                <p>Price: {item.price}</p>
                <p>Product Code: {item.code}</p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <p className="text-sm text-gray-700">Quantity:</p>
                <div className="flex items-center border rounded overflow-hidden">
                  <button
                    onClick={() => changeQuantity(idx, "decrease")}
                    className="px-3 py-1 text-gray-700 bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(idx, "increase")}
                    className="px-3 py-1 text-gray-700 bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-end mt-2">
  <div className="bg-green-500 text-white text-xs font-semibold rounded flex items-center justify-center w-12 h-5">
    {item.rating} ★
  </div>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
