import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const FilterSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Another Item' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Perform the filtering logic based on the search term
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredItems.length > 0 ? (
        <ul>
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
