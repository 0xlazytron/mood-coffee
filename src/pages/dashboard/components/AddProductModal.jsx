import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [images, setImages] = useState([]);
  const [currentStep] = useState(1); // For future multi-step implementation

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'food', name: 'Food' },
  ];

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file && images.length < 4) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: productName,
      type: productType,
      price,
      location,
      description,
      category,
      images
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Add Products</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6">Please complete the form to add Product</p>
          
          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
                currentStep >= 1 ? 'bg-[#8B6C5C] text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                01
              </div>
              <div className="ml-4 text-gray-700 font-medium">Product information</div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B6C5C]"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Coffee"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Product Type</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B6C5C]"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  placeholder="Black Coffee"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B6C5C]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="39.99$"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B6C5C]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="New York Mood Coffee"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B6C5C] h-32"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Experience the perfect balance of rich aroma and smooth taste with our Premium Roast Coffee. Sourced from the finest coffee beans, expertly roasted to bring out deep, full-bodied flavors with a hint of natural sweetness."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white flex justify-between items-center"
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  >
                    <span>{category || 'Select Category'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform ${showCategoryDropdown ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {showCategoryDropdown && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {categories.map(cat => (
                        <div
                          key={cat.id}
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setCategory(cat.name);
                            setShowCategoryDropdown(false);
                          }}
                        >
                          {cat.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Product Image</label>
              <div className="flex flex-wrap gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative w-32 h-32 border border-gray-300 rounded-md overflow-hidden">
                    <img src={img} alt={`Product ${index+1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-white rounded-full p-1"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
                
                {images.length < 4 && (
                  <label className="w-32 h-32 border border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <input type="file" className="hidden" accept="image/*" onChange={handleAddImage} />
                  </label>
                )}
              </div>
            </div>
            
            <div className="flex justify-between border-t pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#8B6C5C] text-white rounded-md hover:bg-[#7D5E53]"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal; 