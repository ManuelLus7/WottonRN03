import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { globalStyles } from '../global/index';
import productsData from '../data/products';

const Products = ({ category, setProductSelected }) => {
  const products = productsData;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Categoría: {category}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onViewDetails={() => setProductSelected(item)}
          />
        )}
      />
    </View>
  );
};

export default Products;
