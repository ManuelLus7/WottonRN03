import React, { useState, useEffect } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import ProductDetailsModal from './src/components/ProductDetailsModal';
import { loadFonts } from './src/global/fonts'; // Importa la función loadFonts
import { globalStyles } from './src/global/globalStyles'; // Importa los estilos globales



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [categorySelected, setCategorySelected] = useState('');
  const [productSelected, setProductSelected] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Carga las fuentes al inicio de la aplicación
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    // Espera a que se carguen las fuentes antes de renderizar
    return null;
  }

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('black');
    StatusBar.setBarStyle('light-content');
  } else {
    StatusBar.setBarStyle('dark-content');
  }

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      {Platform.OS === 'android' && (
        <StatusBar
          backgroundColor={globalStyles.statusBar.backgroundColor}
          barStyle="light-content"
        />
      )}

      {productSelected ? (
        <ProductDetailsModal
          product={productSelected}
          onClose={() => setProductSelected(null)}
        />
      ) : categorySelected ? (
        <Products
          category={categorySelected}
          setProductSelected={setProductSelected}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}
