import React from 'react';
import DashboardSidebar from './components/DashboardSidebar';

const Terms = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar active="terms" />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Privacy</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              
              <textarea 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8D6E63] min-h-[200px]"
                defaultValue="Experience the perfect balance of rich aroma and smooth taste with our Premium Roast Coffee. Sourced from the finest coffee beans, expertly roasted to bring out deep, full-bodied flavors with a hint of natural sweetness. Sourced from the finest coffee beans, expertly roasted to bring out deep, full-bodied flavors with a hint of natural sweetness."
              />
              
              <div className="flex mt-6 space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md">Cancel</button>
                <button className="px-6 py-2 bg-[#8D6E63] text-white rounded-md">Save Details</button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Privacy and</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              
              <textarea 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8D6E63] min-h-[200px]"
                defaultValue="Experience the perfect balance of rich aroma and smooth taste with our Premium Roast Coffee. Sourced from the finest coffee beans, expertly roasted to bring out deep, full-bodied flavors with a hint of natural sweetness. Sourced from the finest coffee beans, expertly roasted to bring out deep, full-bodied flavors with a hint of natural sweetness."
              />
              
              <div className="flex mt-6 space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md">Cancel</button>
                <button className="px-6 py-2 bg-[#8D6E63] text-white rounded-md">Save Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 