import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

const items: Item[] = [
  { id: 1, name: 'Complete Checkup', category: 'Category A'},
  { id: 2, name: 'Software', category: 'Category B' },
  { id: 3, name: 'Hardware', category: 'Category C' },
  
];

const FilterSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);

    // Perform the filtering logic based on the selected category
    const filtered = value !== ''
      ? items.filter((item) => item.category === value)
      : items;
    setFilteredItems(filtered);
  };

  return (
    <div className ="flex flex-wrap justidy-start p-4">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className = "text-slate-50"
      >
        <option value="">All Categories</option>
        <option value="Category A">Complete Checkup</option>
        <option value="Category B">Software</option>
        <option value="Category C">Hardware</option>
      </select>

      {filteredItems.length > 0 ? (
        <ul className="p-2">
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default FilterSearch;
