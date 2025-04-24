import React from 'react';

const RevenueChart = () => {
  // Mock data for the chart
  const monthlyRevenue = [
    { month: 'Jan', revenue: 15000 },
    { month: 'Feb', revenue: 18000 },
    { month: 'Mar', revenue: 16500 },
    { month: 'Apr', revenue: 19500 },
    { month: 'May', revenue: 22000 },
    { month: 'Jun', revenue: 25000 },
    { month: 'Jul', revenue: 27500 },
    { month: 'Aug', revenue: 24000 },
    { month: 'Sep', revenue: 28000 },
    { month: 'Oct', revenue: 32000 },
    { month: 'Nov', revenue: 35000 },
    { month: 'Dec', revenue: 38000 },
  ];

  // Find the highest revenue to calculate bar heights
  const maxRevenue = Math.max(...monthlyRevenue.map(item => item.revenue));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Revenue Overview</h3>
        <div className="text-sm text-gray-500">Last 12 months</div>
      </div>
      
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
          <div>${Math.round(maxRevenue / 1000)}k</div>
          <div>${Math.round(maxRevenue * 0.75 / 1000)}k</div>
          <div>${Math.round(maxRevenue * 0.5 / 1000)}k</div>
          <div>${Math.round(maxRevenue * 0.25 / 1000)}k</div>
          <div>$0</div>
        </div>
        
        {/* Grid lines */}
        <div className="absolute left-12 right-0 top-0 bottom-0">
          <div className="h-full flex flex-col justify-between">
            <div className="border-b border-gray-200 h-0"></div>
            <div className="border-b border-gray-200 h-0"></div>
            <div className="border-b border-gray-200 h-0"></div>
            <div className="border-b border-gray-200 h-0"></div>
            <div className="border-b border-gray-200 h-0"></div>
          </div>
        </div>
        
        {/* Bars */}
        <div className="absolute left-12 right-0 bottom-6 h-[calc(100%-24px)] flex items-end">
          <div className="w-full flex justify-between items-end h-full">
            {monthlyRevenue.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-6 bg-gradient-to-t from-[#8D6E63] to-[#A1887F] rounded-t"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">{item.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#8D6E63] rounded-full mr-2"></div>
            <span className="text-sm text-gray-500">This Year</span>
          </div>
          <div className="flex items-center ml-4">
            <div className="w-3 h-3 border border-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-500">Last Year</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <button className="text-sm text-gray-500 font-medium hover:text-gray-700 mr-4">Monthly</button>
          <button className="text-sm text-[#8D6E63] font-medium">Yearly</button>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart; 