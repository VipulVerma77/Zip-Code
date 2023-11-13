// src/components/LocationInfo.js
import React from 'react';

const LocationInfo = ({ location, onClearLocation }) => {
  return (
    <div className=''>
      {location ? (
        <div className=''>
          <h2 className=' w-11/12 font-semibold text-3xl mt-[10px] ml-[60px]'>Location Information</h2>
          <p className='text-3xl ml-[60px]'>Country: {location.country}</p>
          {location.places && location.places.length > 0 ? (
            <div>
              {location.places.map((place, index) => (
                <div key={index} className="mb-4">
                  <p className='text-3xl ml-[60px]'>Place Name: {place['place name']}</p>
                  <p className='text-3xl ml-[60px]'>State Abbreviation: {place['state abbreviation']}</p>
                  <p className='text-3xl ml-[60px]'>State: {place.state}</p>
                </div>
              ))}
              <button className='bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full ml-[40px]'
                onClick={onClearLocation}>
                Clear Information
              </button>
            </div>
          ) : (
            <p>No places found.</p>
          )}
        </div>
      ) : (
        <p className='ml-[65px]'>Please Enter Postal code</p>
      )}
    </div>
  );
};

export default LocationInfo;
