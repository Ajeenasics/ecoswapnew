import React, { useState } from "react";
import image2 from "../../asserts/nano.png";
import productImage from "../../asserts/nano.png";

const Myorderitems = [
  {
    title: "Nano Bristles Bamboo Toothbrush",
    desc: "Eco-friendly bamboo toothbrush with nano bristles.",
    img: productImage,
    price: "$15",
    quantity: 1,
    code: "520375",
    rating: "4.7",
    owner: "Jacklein Fergueson",
  },
  {
    title: "Henfruit Farm White Eggs",
    desc: "Farm-fresh white eggs, naturally grown.",
    img: image2,
    price: "$5.6",
    quantity: 2,
    code: "520375",
    rating: "4.8",
    owner: "Sachin Rachin",
  },
];

function Myorder() {
  const [quantity, setQuantity] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const [myorderItems, setMyorderItems] = useState(Myorderitems);

  const [review, setReview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleReviewSubmit = () => {
    if (review.trim() !== "") {

      setModalMessage("Review successfully sent");
      setShowModal(true);
      setReview(""); 
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="p-6 rounded-lg shadow-md mb-10 mt-20">
        <h1 className="text-2xl font-bold mb-6">Product</h1>
        {myorderItems.map((item, idx) => (
          <div
            key={idx}
            className="mb-10 bg-green-50 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">{item.owner}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="border p-4 rounded-lg">
                  <img
                    src={item.img}
                    alt="Product"
                    className="w-full h-[22rem] object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={item.title}
                    disabled
                    className="border rounded w-full p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Description</label>
                  <textarea
                    value={item.desc}
                    disabled
                    rows="4"
                    className="border rounded w-full p-2"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      type="text"
                      value={item.price}
                      disabled
                      className="border rounded w-full p-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={handleQuantityChange}
                      className="border rounded w-full p-2 bg-green-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Code</label>
                  <input
                    type="text"
                    value={item.code}
                    disabled
                    className="border rounded w-full p-2"
                  />
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <button className="flex-1 bg-blue-600 text-white text-[12px] py-2 rounded hover:bg-blue-700 h-10">Add to Cart</button>
                  <button className="flex-1 bg-green-500 text-white text-[12px] py-2 rounded hover:bg-green-600 h-10">Wishlist</button>
                  <button className="flex-1 bg-gray-500 text-white text-[12px] py-2 rounded hover:bg-gray-600 h-10">Swap Request</button>
                  <button className="flex-1 bg-red-500 text-white text-[12px] py-2 rounded hover:bg-red-600 h-10">Exchange Request</button>
                  <button
                    className="flex-1 bg-red-500 text-white text-[12px] py-2 rounded hover:bg-red-600 h-10"
                    onClick={() => setShowChat(true)}
                  >
                    Chat with Owner
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
              <textarea
                className="w-full border rounded p-2 mb-4"
                rows="4"
                placeholder="Write your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <button
                onClick={handleReviewSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500"
              >
                Submit Review
              </button>
            </div>

            {showChat && (
              <div className="bg-white p-6 rounded-lg shadow-md mt-10 relative">
                <button
                  onClick={() => setShowChat(false)}
                  className="absolute top-4 right-4 text-sm text-gray-600 border px-3 py-1 rounded hover:bg-gray-100"
                >
                  Close
                </button>

                <h2 className="text-xl font-bold mb-4">Chat with Owner</h2>

                <div className="space-y-6 mb-4">
                  <div>
                    <p className="font-semibold">Tony Stark</p>
                    <p className="text-gray-700">Hi! Is this item still available?</p>
                    <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                      <span>Like</span> | <span>Reply 1 hour</span>
                    </div>
                  </div>

                  <div className="pl-6 border-l-2">
                    <p className="font-semibold">Evalin Tony</p>
                    <p className="text-gray-700">Yes, it is.</p>
                    <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                      <span>Like</span> | <span>Reply 49min</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your comment"
                    className="flex-1 border rounded p-2"
                  />
                  <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm w-full">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100">
              <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">{modalMessage}</h3>

            <div className="mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myorder;
