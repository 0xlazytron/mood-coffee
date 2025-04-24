import React, { useState } from 'react';
import DashboardSidebar from './components/DashboardSidebar';

const Users = () => {
  const [viewMode, setViewMode] = useState('Monthly Users');
  
  const users = [
    { id: 1, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 2, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 3, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 4, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 5, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 6, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 7, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 8, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 9, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
    { id: 10, name: 'Jhon Alia', email: 'abcd@gmail.com', number: '+19139464917213', date: '12/07/2024' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar active="users" />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Our Users</h1>
            
            <button 
              className="flex items-center text-gray-700 font-medium"
              onClick={() => setViewMode(viewMode === 'Monthly Users' ? 'All Users' : 'Monthly Users')}
            >
              {viewMode}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="bg-[#F3E5DC] rounded-t-lg overflow-hidden">
            <div className="grid grid-cols-4 py-3 px-4 font-semibold text-gray-700">
              <div>User Name</div>
              <div>Email</div>
              <div>Number</div>
              <div>Date</div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8 divide-y">
            {users.map((user) => (
              <div key={user.id} className="grid grid-cols-4 py-4 px-4">
                <div className="text-gray-700">{user.name}</div>
                <div className="text-gray-700">{user.email}</div>
                <div className="text-gray-700">{user.number}</div>
                <div className="text-gray-700">{user.date}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
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
  );
};

export default Users; 