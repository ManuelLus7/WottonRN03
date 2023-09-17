import React, { useState } from 'react';
import { Input, Icon } from 'react-native-elements';
import { globalStyles } from '../global/index';
import PropTypes from 'prop-types';

const SearchBar = ({ onChangeText, onSearch, onClear }) => {
  const [text, setText] = useState('');

  const handleInputChange = (newText) => {
    setText(newText);
    onChangeText(newText); // Propago el texto de búsqueda al componente padre
  };

  const handleSearch = () => {
    onSearch(text); // Realiza la búsqueda
  };

  const handleClear = () => {
    setText(''); // Borra el texto de búsqueda
    onClear(); // Ejecuta la función para limpiar la búsqueda en el componente padre
  };

  return (
    <Input
      placeholder="Buscar productos"
      value={text}
      onChangeText={handleInputChange}
      leftIcon={
        <Icon
          name="search"
          type="font-awesome"
          onPress={handleSearch} // Realizo la búsqueda al presionar el ícono de búsqueda
        />
      }
      rightIcon={
        text ? (
          <Icon
            name="times-circle"
            type="font-awesome"
            onPress={handleClear} // Borro el texto de búsqueda al presionar el ícono de cruz
          />
        ) : null
      }
      containerStyle={globalStyles.searchInputContainer} // Aplico el estilo del contenedor del input
      inputStyle={globalStyles.searchInput} // Aplico el estilo del input
    />
  );
};

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SearchBar;
