import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #e50914;
  color: white;
  cursor: pointer;
`;



function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <Input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
}

export default SearchBar;



