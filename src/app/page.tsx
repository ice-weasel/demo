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
    <main >


      <div className="flex  flex-wrap flex-col justify-between mx-auto" id="start">
        <div className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FNT TECH SUPPORT
              </span>
            </a>
          </div>
        </div>

       

        
      <div className="grid grid-cols-2 md:grid-cols-3 bg-hover flex flex-wrap justify-between mx-auto gap-4">
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://www.popsci.com/uploads/2019/03/07/QVFBYX3BK6VWNCXYNLZYEAWLME.jpg" alt=""></img>
    </div>
    
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://support.content.office.net/en-us/media/c5ecd983-e264-4d81-812a-dfb332265591.png" alt=""></img>
    </div>
    <div>
        <img className="h-auto max-w-lg rounded-lg" src="https://www.popsci.com/uploads/2019/03/07/KEHXYBTWBPNURRHZVKUTHYEH5Q.jpg" alt=""></img>
    </div>   
    </div>

        

      
      </div>
    </main>
  );
};

export default Navbar;
