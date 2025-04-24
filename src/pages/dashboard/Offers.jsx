import React, { useState } from 'react';
import DashboardSidebar from './components/DashboardSidebar';
import AddOfferModal from './components/AddOfferModal';
import coffeeImg from '../../assets/dashboard/coffee.jpg';

const Offers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState(null);
  
  const [offers, setOffers] = useState([
    { id: '01', name: 'Croissants', description: 'Top Mexican Coffee', price: '$49.99', offer: '30% Off', status: true },
    { id: '02', name: 'Croissants', description: 'Top Mexican Coffee', price: '$49.99', offer: '30% Off', status: false },
    { id: '03', name: 'Croissants', description: 'Top Mexican Coffee', price: '$49.99', offer: '30% Off', status: true },
    { id: '04', name: 'Croissants', description: 'Top Mexican Coffee', price: '$49.99', offer: '30% Off', status: true },
  ]);

  const handleToggleActionMenu = (id) => {
    if (showActionMenu === id) {
      setShowActionMenu(null);
    } else {
      setShowActionMenu(id);
    }
  };

  const handleAddOffer = (newOffer) => {
    const id = offers.length > 0 ? 
      String(Number(offers[offers.length - 1].id) + 1).padStart(2, '0') : 
      '01';
    
    setOffers([
      ...offers,
      {
        id,
        name: newOffer.name,
        description: newOffer.description,
        price: newOffer.offerPrice,
        offer: newOffer.offerPercent,
        status: true
      }
    ]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar active="offers" />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Offers</h1>
          
          <div className="mb-6">
            <button 
              className="flex items-center px-4 py-2 bg-[#8D6E63] text-white rounded-md"
              onClick={() => setIsAddModalOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Offer
            </button>
          </div>
          
          <div className="bg-[#F3E5DC] rounded-t-lg overflow-hidden">
            <div className="grid grid-cols-12 py-3 px-4 font-semibold text-gray-700">
              <div className="col-span-1">No</div>
              <div className="col-span-4">Product</div>
              <div className="col-span-2">Offer Price</div>
              <div className="col-span-2">Offer</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Action</div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-b-lg overflow-hidden mb-8">
            <h2 className="text-2xl font-semibold p-4 border-b">Special Offers</h2>
            
            <div className="divide-y">
              {offers.map((offer) => (
                <div key={offer.id} className="grid grid-cols-12 py-4 px-4 items-center">
                  <div className="col-span-1">{offer.id}</div>
                  <div className="col-span-4 flex items-center">
                    <img src={coffeeImg} alt={offer.name} className="w-16 h-16 rounded-md mr-4 object-cover" />
                    <div>
                      <h3 className="font-semibold text-lg">{offer.name}</h3>
                      <p className="text-gray-600">{offer.description}</p>
                    </div>
                  </div>
                  <div className="col-span-2">{offer.price}</div>
                  <div className="col-span-2">{offer.offer}</div>
                  <div className="col-span-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={offer.status} className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8D6E63]"></div>
                    </label>
                  </div>
                  <div className="col-span-1 relative">
                    <button 
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleToggleActionMenu(offer.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    
                    {showActionMenu === offer.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Edit Product
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
      
      {/* Add Offer Modal using the new component */}
      <AddOfferModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddOffer}
      />
    </div>
  );
};

export default Offers; 