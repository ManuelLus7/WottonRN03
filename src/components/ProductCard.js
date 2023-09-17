import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, Modal } from 'react-native';
import { globalStyles } from '../global/index';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {

  // Controlo la visibilidad del modal

  const [isModalVisible, setModalVisible] = useState(false);

  // Función para alternar la visibilidad del modal

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    
    <TouchableOpacity
      style={globalStyles.card} // Aplico estilos globales para la tarjeta
      onPress={onViewDetails} // Llamo a la función onViewDetails cuando se presiona la tarjeta
    >
      <Image source={{ uri: product.image }} style={globalStyles.image} />
      <Text style={globalStyles.name}>{product.name}</Text>

      {/* Agego botón para ver más detalles */}

      <TouchableOpacity onPress={toggleModal} style={globalStyles.detailsButton}>
        <Text style={globalStyles.detailsButtonText}>Ver más detalles</Text>
      </TouchableOpacity>

      {/* Agrego botón para agregar producto al carrito si quisiera comprarlo */}

      <TouchableOpacity onPress={onAddToCart} style={globalStyles.addToCartButton}>
        <Text style={globalStyles.addToCartButtonText}>Agregar al carrito</Text>
      </TouchableOpacity>

      {/* Modal de detalles */}

      <Modal
        visible={isModalVisible} // Controlo la visibilidad del modal
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={globalStyles.modalContent}>
          <Image source={{ uri: product.image }} style={globalStyles.modalImage} />
          <Text style={globalStyles.modalName}>{product.name}</Text>
          <Text style={globalStyles.modalText}>Descripción: {product.description}</Text>
          <Text style={globalStyles.modalText}>Presentación: {product.presentation}</Text>
          <Text style={globalStyles.modalText}>Tamaño: {product.size}</Text>
          <Text style={globalStyles.modalText}>Stock disponible: {product.stock}</Text>

          {/* Agrego botón para cerrar el modal */}

          <Button title="Cerrar" onPress={toggleModal} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ProductCard;
