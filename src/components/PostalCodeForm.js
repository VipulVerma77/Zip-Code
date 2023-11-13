// src/components/PostalCodeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostalCodeForm = ({ onLocationChange }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
      const data = response.data;
      onLocationChange(data);
    } catch (error) {
      console.error('Error fetching location information:', error);
      onLocationChange(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-11/12 mt-[40px] flex flex-col gap-[3px] mx-auto '>
      <label className='font-semibold text-3xl flex flex-col mt-[25px]'>
        Enter Postal Code
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder='Enter Postal Code'
          className='h-[30px] w-[50%]   rounded text-[20px]' 
        />
      </label>
      <button className=' w-[50%]   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-[10px]'
       type="submit">Submit</button>
    </form>
  );
};

export default PostalCodeForm;
