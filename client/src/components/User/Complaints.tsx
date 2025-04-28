import React from 'react';
import { ClipboardList} from "lucide-react";

const SubmitComplaint = () => {
  return (
    <div className="max-w-md mx-auto p-8 mt-40 bg-white rounded-lg shadow-md text-center">
      <div className="flex flex-col items-center mb-6 ">
      <ClipboardList className="mr-2 h-5 w-5 bg-green" />
        <h2 className="text-2xl font-semibold">Submit a Complaint</h2>
      </div>

      <div className="text-left mb-2">
        <label className="text-md font-medium text-gray-700">Complaint Description</label>
      </div>

      <textarea
        placeholder="Enter your complaint"
        className="w-full border border-gray-300 rounded p-3 mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
      ></textarea>

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Send
      </button>
    </div>
  );
};

export default SubmitComplaint;
