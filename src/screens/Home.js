import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../global/index';
import { ProductCard, SearchBar } from '../components/index';
import productsData from '../data/products';

const Home = ({ setCategorySelected }) => {
  const [searchText, setSearchText] = useState('');
  const [filterByCategory, setFilterByCategory] = useState(null); // Estado para filtrar por categoría

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    // Realizo un Filtrado productos por búsqueda y categoría

    const filtered = productsData.filter((product) => {
      const nameMatch =
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText === '';

      const categoryMatch =
        !filterByCategory || product.category === filterByCategory;

      return nameMatch && categoryMatch;
    });

    setFilteredProducts(filtered);
  }, [searchText, filterByCategory]);

  // Obtengo todas las categorías únicas
  const uniqueCategories = Array.from(new Set(productsData.map((product) => product.category)));

  // Opciones de filtro avanzado (categorías)
  const filterOptions = uniqueCategories.map((category) => ({
    label: category,
    value: category,
  }));

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>REXONA - No Te Abandona</Text>

      {/* Barra de búsqueda */}
      <SearchBar
        onChangeText={(text) => setSearchText(text)}
        onSearch={() => {}}
        onClear={() => {
          setSearchText('');
        }}
      />

      {/* Filtros avanzados */}
      <Text>Filtrar por categoría:</Text>
      <View style={globalStyles.filterOptionsContainer}>
        {filterOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              globalStyles.filterOption,
              {
                backgroundColor: filterByCategory === option.value ? 'blue' : 'lightgray',
              },
            ]}
            onPress={() => setFilterByCategory(option.value)}
          >
            <Text
              style={{
                color: filterByCategory === option.value ? 'white' : 'black',
              }}
            >
              {option.label} (
              {
                filterByCategory
                  ? filteredProducts.filter((product) => product.category === option.value).length
                  : productsData.filter((product) => product.category === option.value).length
              }
              )
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Resultados de la búsqueda */}
      {searchText ? (
        <Text>{`Resultados de la búsqueda para: ${searchText}`}</Text>
      ) : null}

      {/* Lista de productos en forma de cuadrícula */}
      <FlatList
        data={filteredProducts}
        numColumns={2} // Dos productos por columna
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id.toString()}
            product={item}
            onViewDetails={() => setCategorySelected(item)}
          />
        )}
      />
    </View>
  );
};

export default Home;
