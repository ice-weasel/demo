"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicFilterSearch = dynamic(() => import('../../components/filtersearch'), {
  ssr: false
});

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/search?term=${searchTerm}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <main>


      <div className="flex flex-wrap flex-col justify-between mx-auto" id="start">
        <div className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FNT TECH SUPPORT
              </span>
            </a>
          </div>
        </div>

       

        
      <div className="grid grid-cols-2 md:grid-cols-3 flex flex-wrap justify-between mx-auto gap-4">
    <div>
        <img className="h-auto max-w-lg rounded-lg" src=""></img>
    </div>
    
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""></img>
    </div>
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""></img>
    </div>
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""></img>
    </div>
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""></img>
    </div>
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""></img>
    </div>

          
        </div>

        

      
      </div>
    </main>
  );
};

export default Navbar;
