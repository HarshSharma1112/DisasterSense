import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch, currentCity }) => {
  const [city, setCity] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8 animate-fade-in">
      <div className={`relative transition-smooth ${isFocused ? 'scale-105' : 'scale-100'}`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className={`h-5 w-5 transition-smooth ${isFocused ? 'text-primary' : 'text-gray-400'}`} />
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for any city worldwide..."
          className="w-full pl-12 pr-4 py-4 bg-dark-100/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-smooth glass"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-2 px-6 my-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-smooth font-medium hover:shadow-lg hover:shadow-primary/50"
        >
          Search
        </button>
      </div>
      {currentCity && (
        <div className="flex items-center justify-center mt-3 text-gray-400 text-sm">
          <MapPin className="h-4 w-4 mr-1 text-primary" />
          Currently viewing: <span className="ml-1 text-white font-medium">{currentCity}</span>
        </div>
      )}
    </form>
  );
};

export default SearchBar;