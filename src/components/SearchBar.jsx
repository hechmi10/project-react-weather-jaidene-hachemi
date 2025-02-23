import '../App.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(city);
    };
  
    return (
      <form className='form-group' onSubmit={handleSubmit}>
        <input
          className='form-control'
          type="text"
          placeholder="Entrez le nom de la ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='btn btn-primary' type="submit">Rechercher</button>
      </form>
    );
  };
SearchBar.propTypes={
    onSearch:PropTypes.string.isRequired
}
export default SearchBar;