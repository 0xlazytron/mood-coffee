import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardSidebar from './components/DashboardSidebar';
import coffeeImg from '../../assets/dashboard/coffee.jpg';

// Icons for sidebar and dashboard
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-3">
    <rect x="3" y="3" width="7" height="7" rx="2" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" strokeWidth="2" />
  </svg>
);

const ProductsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
);

const Dashboard = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [viewMode, setViewMode] = useState('Monthly Report');
  const [orderViewMode, setOrderViewMode] = useState('Daily Orders');
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Sample data for dashboard
  const dashboardData = {
    totalOrders: 1200,
    totalRevenue: '$50K',
    canceledOrders: 70,
    registeredUsers: 3000,
    newUsers: 40,
    totalVisitors: '100K'
  };

  // Sample data for orders
  const orders = [
    { id: 1, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Reserve Table', item: 'Coffee', time: '12: 00Am', quantity: '01', price: '$29.99' },
    { id: 2, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Pick Up', item: 'Coffee', time: '12: 00Am', quantity: '02', price: '$29.99' },
    { id: 3, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Reserve Table', item: 'Coffee', time: 'Now', quantity: '01', price: '$29.99' },
    { id: 4, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Pick Up', item: 'Coffee', time: '12: 00Am', quantity: '02', price: '$29.99' },
    { id: 5, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Reserve Table', item: 'Coffee', time: 'Now', quantity: '01', price: '$29.99' },
    { id: 6, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Pick Up', item: 'Coffee', time: '12: 00Am', quantity: '02', price: '$29.99' },
    { id: 7, userName: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', pickReserve: 'Reserve Table', item: 'Coffee', time: '12: 00Am', quantity: '01', price: '$29.99' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar active="dashboard" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics</h1>

          {/* Analytics Section */}
          <div className="flex justify-between items-center mb-6">
            <div></div>
            <div className="flex items-center">
              <button 
                className="flex items-center text-gray-700 font-medium"
                onClick={() => setViewMode(viewMode === 'Monthly Report' ? 'Annual Report' : 'Monthly Report')}
              >
                {viewMode}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.totalOrders}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.totalRevenue}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">Canceled Order</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.canceledOrders}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">Registered Users</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.registeredUsers}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">New Users</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.newUsers}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">Total Visitors</h3>
              <p className="text-3xl font-bold text-[#8D6E63]">{dashboardData.totalVisitors}</p>
            </div>
          </div>

          {/* Orders Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">New Orders</h2>
              <button 
                className="flex items-center text-gray-700 font-medium"
                onClick={() => setOrderViewMode(orderViewMode === 'Daily Orders' ? 'Weekly Orders' : 'Daily Orders')}
              >
                {orderViewMode}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#F3E5DC] text-left">
                    <th className="py-3 px-4 font-semibold text-gray-700">User Name</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Email</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Number</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Pick/Reserve</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Item</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Time</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Quantity</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-200">
                      <td className="py-3 px-4 text-gray-700">{order.userName}</td>
                      <td className="py-3 px-4 text-gray-700">{order.email}</td>
                      <td className="py-3 px-4 text-gray-700">{order.number}</td>
                      <td className="py-3 px-4 text-gray-700">{order.pickReserve}</td>
                      <td className="py-3 px-4 text-gray-700">{order.item}</td>
                      <td className="py-3 px-4 text-gray-700">{order.time}</td>
                      <td className="py-3 px-4 text-gray-700">{order.quantity}</td>
                      <td className="py-3 px-4 text-gray-700">{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-1">
                <button className="p-2 border rounded-md bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 rotate-180">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 px-4 border rounded-md bg-gray-200">1</button>
                <button className="p-2 px-4 border rounded-md bg-[#8D6E63] text-white">2</button>
                <button className="p-2 px-4 border rounded-md bg-gray-200">3</button>
                <button className="p-2 px-4 border rounded-md bg-gray-200">4</button>
                <button className="p-2 px-4 border rounded-md bg-gray-200">5</button>
                <button className="p-2 border rounded-md bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 