import React from 'react';

const RecentOrders = () => {
  // Mock data for recent orders
  const orders = [
    {
      id: '#ORD-2204',
      customer: 'John Smith',
      product: 'French Roast (2 lbs)',
      date: '12 Oct 2023',
      amount: '$42.00',
      status: 'Completed'
    },
    {
      id: '#ORD-2203',
      customer: 'Emily Johnson',
      product: 'Ethiopia Yirgacheffe (1 lb)',
      date: '11 Oct 2023',
      amount: '$24.50',
      status: 'Processing'
    },
    {
      id: '#ORD-2202',
      customer: 'Michael Chen',
      product: 'Coffee Sampler Pack',
      date: '10 Oct 2023',
      amount: '$35.00',
      status: 'Completed'
    },
    {
      id: '#ORD-2201',
      customer: 'Sarah Williams',
      product: 'Dark Roast (3 lbs)',
      date: '9 Oct 2023',
      amount: '$52.50',
      status: 'Shipped'
    },
    {
      id: '#ORD-2200',
      customer: 'Robert Davis',
      product: 'Espresso Blend (1 lb)',
      date: '8 Oct 2023',
      amount: '$18.75',
      status: 'Completed'
    }
  ];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
        <button className="text-sm font-medium text-[#8D6E63] hover:text-[#6D4C41]">
          View all
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#8D6E63]">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders; 