// src/App.js
import React, { useState } from 'react';
import PostalCodeForm from './components/PostalCodeForm';
import LocationInfo from './components/LocationInfo';

const App = () => {
  const [location, setLocation] = useState(null);

  const handleFormSubmit = (data) => {
    setLocation(data);
  };

  const handleClearLocation = () => {
    setLocation(null);
  };

  return (
    <div className='w-[100%] h-[100%] box-border flex flex-col text-black '> 
      <PostalCodeForm onLocationChange={handleFormSubmit} />
      <LocationInfo location={location} onClearLocation={handleClearLocation} />
    </div>
  );
};

export default App;
