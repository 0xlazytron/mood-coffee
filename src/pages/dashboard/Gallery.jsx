import React from 'react';
import DashboardSidebar from './components/DashboardSidebar';
import coffeeImg from '../../assets/dashboard/coffee.jpg';
import logoImg from '../../assets/dashboard/logo.svg';

const Gallery = () => {
  // Sample gallery images
  const galleryImages = [
    { id: 1, image: coffeeImg },
    { id: 2, image: coffeeImg },
    { id: 3, image: coffeeImg },
    { id: 4, image: coffeeImg },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar active="gallery" />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Store Gallery</h1>
          
          <div className="mb-6">
            <button className="flex items-center px-4 py-2 bg-[#8D6E63] text-white rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Offer
            </button>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Store Gallery Images</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {galleryImages.map((item) => (
              <div key={item.id} className="bg-white rounded-md overflow-hidden shadow-md">
                <img src={item.image} alt="Gallery" className="w-full h-40 object-cover" />
              </div>
            ))}
            
            <div className="border-2 border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Add Logo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <img src={logoImg} alt="Logo" className="w-full h-40 object-cover" />
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-md h-40 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-gray-500 text-sm">Upload Logo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 