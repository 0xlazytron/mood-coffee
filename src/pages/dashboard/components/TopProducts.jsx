import React from 'react';

const TopProducts = () => {
  // Mock data for top products
  const products = [
    {
      name: 'Ethiopian Yirgacheffe',
      image: '/images/coffee-1.jpg',
      sales: 842,
      growth: '+12.5%',
      category: 'Single Origin',
      color: 'bg-amber-500'
    },
    {
      name: 'Dark Roast Blend',
      image: '/images/coffee-2.jpg',
      sales: 721,
      growth: '+8.2%',
      category: 'Blend',
      color: 'bg-amber-800'
    },
    {
      name: 'Colombian Supremo',
      image: '/images/coffee-3.jpg',
      sales: 693,
      growth: '+5.7%',
      category: 'Single Origin',
      color: 'bg-amber-600'
    },
    {
      name: 'Organic Decaf',
      image: '/images/coffee-4.jpg',
      sales: 512,
      growth: '+3.1%',
      category: 'Decaf',
      color: 'bg-amber-700'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Top Products</h3>
        <div className="flex space-x-2">
          <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-[#8D6E63] focus:border-[#8D6E63]">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-5">
          {products.map((product, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${product.color}`}>
                  <span className="text-white text-lg font-bold">{product.name.charAt(0)}</span>
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                  <span className="text-xs text-green-600 font-medium">{product.growth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{product.category}</span>
                  <span className="text-xs font-medium text-gray-700">{product.sales} sales</span>
                </div>
                <div className="mt-2 relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div 
                      style={{ width: `${(product.sales / 842) * 100}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${product.color}`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts; 